// @flow
import React from 'react';
import { Route } from 'react-router';

import Layout from '../containers/Layout/Layout.state';
import Header from '../containers/Header/Header.state';
import Footer from '../containers/Footer/Footer.state';

import Signup from '../containers/SIgnUpForm/SignupForm.state';
import SignIn from '../containers/SignInForm/SignInForm.state';
import Confirmation from '../containers/Confirmation/Confirmation.state';
import ForgotPassword from '../containers/ForgotPassword/ForgotPasswordForm.state';
import ResetPassword from '../containers/ResetPassword/ResetPassword.state';


export default (
  <Route path="/" component={Layout}>
    <Route path="signup" components={{ header: Header, footer: Footer, main: Signup }} />
    <Route path="signin" components={{ header: Header, footer: Footer, main: SignIn }} />
    <Route path="confirmation" components={{ header: Header, footer: Footer, main: Confirmation }} />
    <Route path="forgotpassword" components={{ header: Header, footer: Footer, main: ForgotPassword }} />
    <Route path="resetpassword" components={{ header: Header, footer: Footer, main: ResetPassword }} />
  </Route>
);
