import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import AuthenticatedRoute from '../Hoc/authenticated-route';
import UnauthenticatedRoute from '../Hoc/unauthenticated-route';

import NotFound from '../components/NotFound';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ '../components/Homepage'),
  loading: () => null,
  modules: ['homepage']
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ '../components/About/About'),
  loading: () => null,
  modules: ['about']
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard'),
  loading: () => null,
  modules: ['dashboard']
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ '../containers/SignInForm/SignInForm.state'),
  loading: () => null,
  modules: ['login']
});

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "SignUp" */ '../containers/SIgnUpForm/SignupForm.state'),
  loading: () => null,
  modules: ['SignUp']
});


const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ '../components/Logout'),
  loading: () => null,
  modules: ['logout']
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ '../components/UserProfile'),
  loading: () => null,
  modules: ['profile']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={About} />

    <Route exact path="/profile/:id" component={Profile} />

    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />

    <UnauthenticatedRoute exact path="/SignUp" component={SignUp} />
    <UnauthenticatedRoute exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/logout" component={Logout} />

    <Route component={NotFound} />
  </Switch>
);