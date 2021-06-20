import { FC } from 'react';
import { DetailedAttributes } from '../base/types';

const Nav: FC<DetailedAttributes> = (props) => {
  const { children, ...rest } = props;
  return (
    <nav { ...rest } >
      {children}
    </nav>
  );
};

export default Nav;