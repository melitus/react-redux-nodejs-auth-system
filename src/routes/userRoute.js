// @flow
import React from 'react';
import { Route } from 'react-router';

import Layout from '../containers/Layout/Layout.state';
import Header from '../containers/Header/Header.state';
import Footer from '../containers/Footer/Footer.state';
import { requireAuth, redirectHomeIfLoggedIn, requiresUrlParams } from './routes';
import Signup from '../containers/SIgnUpForm/SignupForm.state';
import SignIn from '../containers/SignInForm/SignInForm.state';
import Confirmation from '../containers/Confirmation/Confirmation.state';
import ForgotPassword from '../containers/ForgotPassword/ForgotPasswordForm.state';
import ResetPassword from '../containers/ResetPassword/ResetPassword.state';


const userRoutes = (
  // eslint-disable-next-line react/jsx-filename-extension
  <Route path="/" component={Layout}>
    <Route path="signin" components={{ header: Header, footer: Footer, main: SignIn }} />
    <Route path="signup" components={{ header: Header, footer: Footer, main: Signup }} onEnter={redirectHomeIfLoggedIn} />
    <Route path="confirmation" components={{ header: Header, footer: Footer, main: Confirmation }} onEnter={redirectHomeIfLoggedIn} />
    <Route path="forgotpassword" components={{ header: Header, footer: Footer, main: ForgotPassword }} onEnter={requiresUrlParams('email', 'password_reset_token')} />
    <Route path="resetpassword" components={{ header: Header, footer: Footer, main: ResetPassword }} onEnter={requireAuth} />
  </Route>
);

export default userRoutes;
