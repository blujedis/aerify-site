import { FC } from 'react';
import { DetailedAttributes } from '../base';

const HeaderElement: FC<DetailedAttributes> = (props) => {
  const { children, ...rest } = props;
  return (
    <header { ...rest } >
      {children}
    </header>
  );
};

export default HeaderElement;