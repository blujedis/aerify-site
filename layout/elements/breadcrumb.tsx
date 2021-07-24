import React, { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { capitalize } from 'utils/string';

export interface IBreadcrumbProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { }

export interface IBreadcrumb {
  path: string;
  href: string;
}

const normalize = (str: string) => {
  return capitalize(str
    .replace(/-/g, ' '));
  // .replace(/oe/g, 'ö')
  // .replace(/ae/g, 'ä')
  // .replace(/ue/g, 'ü'));
};

const BreadcrumbElement: FC<IBreadcrumbProps> = (props = {}) => {

  const style = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: '.5rem 1rem',
    margin: 0,
    ...props.style
  };

  props = {
    ...props,
    style
  };

  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {

    if (router) {
      const link = router.asPath.replace(/^\//, '').split('/');
      const arr = link.map((path, i) => {
        return { path, href: '/' + link.slice(0, i + 1).join('/') };
      });
      setBreadcrumbs(arr);
    }

  }, [router]);


  if (!breadcrumbs.length)
    return null;

  return (
    <ul {...props}>
      {breadcrumbs.map((o, i) => {
        return (
          <li key={o.href}>
            <Link href={o.href}>
              <a>
                {normalize(o.path)}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );

}

export default BreadcrumbElement;
