import { FC } from 'react';
import { DetailedAttributes } from '../base';

const FooterElement: FC<DetailedAttributes> = (props) => {
  const { children, ...rest } = props;
  return (
    <footer {...rest} >
      {children}
    </footer>
  );
};

export default FooterElement;