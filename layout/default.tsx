import React, { FC, ReactNode } from 'react';
import LayoutBase from './base';
import HeaderElement from './elements/header';
import FooterElement from './elements/footer';
import BreadcrumbElement from './elements/breadcrumb';
import NavElement from './elements/nav';

import { ILayoutBaseProps, ILayoutProps } from './base';
import Image from 'next/image';
import logo from '../public/img/logo.png';
// import { ThemeToggle } from 'theme';
import styles from './styles.module.scss';

const DEFAULTS: Partial<ILayoutBaseProps> = {
  links: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylsheet', href: '/css/nprogress.css' }
  ],
  metas: []
};

const LayoutDefault: FC<Partial<ILayoutProps & { sticky?: boolean }>> = (props) => {

  const options = {
    ...DEFAULTS,
    ...props
  } as ILayoutBaseProps & { children: ReactNode; sticky?: boolean };

  const { children, sticky, links, metas, ...rest } = options;

  const Header = (
    <HeaderElement className={styles.header}>
      <div style={{ display: 'flex', backgroundColor: '#181c35', color: '#fff', alignItems: 'center', width: '100%' }}>
        <div style={{ paddingLeft: '.5rem' }}>
          <Image src={logo} alt="Logo" width={75} height={75} />
        </div>
        <h1 style={{ paddingLeft: '1rem' }}>Next.js Workshop</h1>
        <span style={{ paddingLeft: '1rem' }}> & Server Side Rendering</span>
        <div style={{ position: 'absolute', right: '1rem' }} >
          {/* <ThemeToggle off="light" on="dark" animate /> */}
        </div>
      </div>
    </HeaderElement>
  );

  const Nav = (
    <NavElement className={styles.nav} />
  );

  const Breadcrumb = (
    <BreadcrumbElement className={styles.breadcrumb} />
  );

  const Footer = (
    <FooterElement className={styles.footer}>
      Footer
    </FooterElement>
  );

  const layoutProps = {
    header: Header,
    nav: Nav,
    breadcrumb: Breadcrumb,
    links: links,
    metas: metas,
    footer: Footer,
    ...(rest as Partial<ILayoutBaseProps>)
  } as ILayoutBaseProps;

  return (
    <LayoutBase {...layoutProps}>
      <main>
        {children}
      </main>
    </LayoutBase>
  );

};

export default LayoutDefault;

