import { FC } from 'react';
import { DetailedAttributes } from '../base/types';

const Header: FC<DetailedAttributes> = (props) => {

  const { children, ...rest } = props;

  return (
    <header { ...rest } >
      {children}
    </header>
  );
};

export default Header;