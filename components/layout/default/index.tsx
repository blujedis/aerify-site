import { FC, ReactNode } from 'react';
import LayoutBase from '../base';
import Header from './header';
import Footer from './footer';
import Nav from './nav';
import { ILayoutBaseProps, ILayoutProps } from '../base/types';
import styles from './styles.module.scss';

const DEFAULTS: Partial<ILayoutBaseProps> = {
  links: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
};

const LayoutDefault: FC<Partial<ILayoutProps>> = (props) => {

  const options = {
    ...DEFAULTS,
    ...props
  } as ILayoutBaseProps & { children: ReactNode; };

  const { children, ...rest } = options;

  const nav = (
    <Nav className={styles.nav}>
      Navigation
    </Nav>
  );

  const header = (
    <Header className={styles.header}>
      {nav}
    </Header>
  );

  const footer = (
    <Footer className={styles.footer}>
      Footer
    </Footer>
  );

  return (
    <LayoutBase {...rest} header={header} footer={footer}>
      <main className={styles.main}>
        {children}
      </main>
    </LayoutBase>
  );

};

export default LayoutDefault;