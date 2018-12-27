// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import queryString from 'query-string';
import { btoa } from 'b2a';
import { subscribeToNewMessages } from '../../subscriptions';
import threadInfoFragment from '../../fragments/thread/threadInfo';
import type { ThreadInfoType } from '../../fragments/thread/threadInfo';
import threadMessageConnectionFragment from '../../fragments/thread/threadMessageConnection';
import type { ThreadMessageConnectionType } from '../../fragments/thread/threadMessageConnection';

export type GetThreadMessageConnectionType = {
  ...$Exact<ThreadInfoType>,
  ...$Exact<ThreadMessageConnectionType>,
};

export const getThreadMessageConnectionQuery = gql`
  query getThreadMessages(
    $id: ID!
    $after: String
    $first: Int
    $before: String
    $last: Int
  ) {
    thread(id: $id) {
      ...threadInfo
      ...threadMessageConnection
    }
  }
  ${threadInfoFragment}
  ${threadMessageConnectionFragment}
`;
export const getThreadMessageConnectionOptions = {
  // $FlowFixMe
  options: ({ thread, ...props }) => {
    let msgsafter, msgsbefore;
    if (props.location && props.location.search) {
      try {
        const params = queryString.parse(props.location.search);
        msgsafter = params.msgsafter;
        msgsbefore = params.msgsbefore;
      } catch (err) {
        // Ignore errors in query string parsing, who cares
        console.error(err);
      }
    }

    let variables = {
      id: props.id,
      after: msgsafter ? msgsafter : null,
      before: msgsbefore && !msgsafter ? msgsbefore : null,
      last: null,
      first: null,
    };

    // if the thread has less than 25 messages, just load all of them
    if (thread.messageCount <= 25) {
      variables.after = null;
      variables.before = null;
      // $FlowFixMe
      variables.last = 25;
    }

    if (thread.messageCount > 25) {
      //if the thread has more than 25 messages, we'll likely only want to load the latest 25
      // **unless** the current user hasn't seen the thread before
      // $FlowFixMe
      variables.last = 25;
      if (!thread.currentUserLastSeen) {
        variables.last = null;
      }
    }

    // if it's a watercooler thread only ever load the 25 most recent messages
    if (props.isWatercooler) {
      variables.before = null;
      variables.after = null;
      //$FlowFixMe
      variables.last = 25;
    }

    // if a user is visiting a url like /thread/:id#:messageId we can extract
    // the messageId from the query string and start pagination from there. This
    // allows users to share links to individual messages and the pagination
    // will work regardless of if it's a super long thread or not
    if (props.location && props.location.search) {
      const params = queryString.parse(props.location.search);

      if (params && params.m) {
        variables.after = params.m;
        variables.last = null;
        // $FlowFixMe
        variables.first = 25;
      }
    }

    return {
      variables,
      fetchPolicy: 'cache-and-network',
    };
  },
  // $FlowFixMe
  props: props => ({
    data: {
      ...props.data,
      messageConnection: props.data.thread
        ? props.data.thread.messageConnection
        : null,
    },
    loadNextPage: () => {
      let cursor;
      const { thread } = props.data;
      if (
        thread &&
        thread.messageConnection &&
        thread.messageConnection.edges &&
        thread.messageConnection.edges.length > 0
      ) {
        cursor =
          thread.messageConnection.edges[
            thread.messageConnection.edges.length - 1
          ].cursor;
      }
      return props.data.fetchMore({
        variables: {
          after: cursor,
          first: undefined,
          before: undefined,
          last: undefined,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult || !fetchMoreResult.thread) return prev;

          return {
            ...prev,
            thread: {
              ...prev.thread,
              messageConnection: {
                ...prev.thread.messageConnection,
                pageInfo: {
                  ...prev.thread.messageConnection.pageInfo,
                  hasNextPage:
                    fetchMoreResult.thread.messageConnection.pageInfo
                      .hasNextPage,
                },
                edges: [
                  ...prev.thread.messageConnection.edges,
                  ...fetchMoreResult.thread.messageConnection.edges,
                ],
              },
            },
          };
        },
      });
    },
    loadPreviousPage: () => {
      let cursor;
      const { thread } = props.data;
      if (
        thread &&
        thread.messageConnection &&
        thread.messageConnection.edges &&
        thread.messageConnection.edges.length > 0
      ) {
        cursor = thread.messageConnection.edges[0].cursor;
      }
      return props.data.fetchMore({
        variables: {
          after: undefined,
          first: undefined,
          before: cursor,
          last: undefined,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult || !fetchMoreResult.thread) return prev;
          const {
            messageConnection: { pageInfo, edges },
          } = fetchMoreResult.thread;

          return {
            ...prev,
            thread: {
              ...prev.thread,
              messageConnection: {
                ...prev.thread.messageConnection,
                pageInfo: {
                  ...prev.thread.messageConnection.pageInfo,
                  hasPreviousPage: pageInfo.hasPreviousPage,
                },
                edges: edges
                  ? [...edges, ...prev.thread.messageConnection.edges]
                  : prev.thread.messageConnection.edges,
              },
            },
          };
        },
      });
    },
    subscribeToNewMessages: () => {
      return props.data.subscribeToMore({
        document: subscribeToNewMessages,
        variables: {
          thread: props.ownProps.id,
        },
        updateQuery: (prev, { subscriptionData }) => {
          const newMessage = subscriptionData.data.messageAdded;
          const existingMessage = prev.thread.messageConnection.edges.find(
            // Check whether we have a node with the same ID or an optimistic response
            // with the same content
            // NOTE(@mxstbr): Checking for equality in the content is very brittle, what if we change the content on the server?
            // I couldn't find a better way to do this for now, ref withspectrum/spectrum#2328
            ({ node }) =>
              node.id === newMessage.id ||
              (typeof node.id === 'number' &&
                node.content.body === newMessage.content.body)
          );
          // If there is an optimstic update with the same content that wasn't replaced yet, replace it
          if (existingMessage && typeof existingMessage.node.id === 'number') {
            return {
              ...prev,
              thread: {
                ...prev.thread,
                messageConnection: {
                  ...prev.thread.messageConnection,
                  edges: prev.thread.messageConnection.edges.map(edge => {
                    // Replace the optimstic update with the actual db message
                    if (edge.node.id === existingMessage.id)
                      return {
                        ...edge,
                        cursor: btoa(newMessage.id),
                        node: newMessage,
                      };

                    return edge;
                  }),
                },
              },
            };
            // If the message is already in the state because the mutation already
            // added it, ignore it and don't duplicate it
          } else if (existingMessage) {
            return prev;
          }

          // Add the new message to the data
          return {
            ...prev,
            thread: {
              ...prev.thread,
              messageConnection: {
                ...prev.thread.messageConnection,
                edges: [
                  ...prev.thread.messageConnection.edges,
                  // NOTE(@mxstbr): The __typename hack is to work around react-apollo/issues/658
                  {
                    node: newMessage,
                    cursor: btoa(newMessage.id),
                    __typename: 'ThreadMessageEdge',
                  },
                ],
              },
            },
          };
        },
      });
    },
  }),
};

export default graphql(
  getThreadMessageConnectionQuery,
  getThreadMessageConnectionOptions
);
