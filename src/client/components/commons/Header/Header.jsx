//@flow
import React from 'react';
import type { Node as ReactNode} from 'react';

export type HeaderProps = {
  title: string,
};
const Header = ({ title } : HeaderProps): ReactNode =>  (
  <h1>{title}</h1>
);

Header.defaultProps = {
  title: 'Header Component'
};


export default Header;
