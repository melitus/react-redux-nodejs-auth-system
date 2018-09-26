// @flow
import React from 'react';
import type { Node as ReactNode, ComponentType } from 'react';

export type LayoutProps = {
  main: ReactNode,
  header: ComponentType,
  footer: ComponentType,
};

const Layout = ({
  header,
  main,
  footer
}: LayoutProps): ReactNode => (
  <div>
    <header>{header}</header>
    <main>{main}</main>
    <footer>{footer}</footer>
  </div>
);

Layout.defaultProps = {
  header: <h1>New header here</h1>
}
export default Layout;
