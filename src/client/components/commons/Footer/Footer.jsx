//@flow
import React from 'react';
import type { Node as ReactNode} from 'react';

export type FooterProps = {
  copyright: string,
};

const Footer = ({ copyright }: FooterProps): ReactNode =>  (
  <section>{copyright}</section>
);

Footer.defaultProps = {
  copyright: '@2018 copyright Sunday!!!'
};


export default Footer;
