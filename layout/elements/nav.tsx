import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DetailedAttributes } from '../base';

const NavElement: FC<DetailedAttributes> = (props) => {

  const { children, ...rest } = props;

  const router = useRouter();
  const [selected, setSelected] = useState('/');

  useEffect(() => {
    setSelected(router.asPath)
  }, [router]);

  const isSelected = (path: string) => {
    if (selected === path)
      return ''; // styles.selected; // css modules.
    return '';
  };

  return (
    <nav {...rest}>
      <div><Link href="/"><a className={isSelected('/')}>Home</a></Link></div>
      <div><Link href="/examples/aerify"><a className={isSelected('/examples/aerify')}>Examples</a></Link></div>
      <div><Link href="/identity/signin"><a className={isSelected('/signin')}>Sign In</a></Link></div>
      <div><Link href="/bad/route" ><a>404</a></Link></div>
    </nav>
  );

};

export default NavElement;