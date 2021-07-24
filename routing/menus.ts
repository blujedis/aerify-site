import { isString } from 'utils/is';
import { capitalize } from 'utils/string';
import { IconType } from 'react-icons';
import { AiOutlineHome } from 'react-icons/ai';

export interface IMenuItem {
  icon: IconType | null;
  label: string;
  alt: string;
  rewrite: string | { source: string, destination: string } | null;
};

const _menus = {

  '/home': {
    icon: AiOutlineHome
  }

};

const menus = Object.keys(_menus).reduce((a, c) => {

  const path = c as keyof typeof _menus;
  const value = _menus[path] as Partial<IMenuItem>;

  const stripped = c.replace(/^\//, '')
  const segments = stripped.split('/');
  const last = segments[segments.length - 1];
  const label = capitalize(last);
  const alt = segments.map(v => v.replace(/\//g, ' ')).join(' ');

  const item = {
    icon: '',
    label,
    alt,
    rewrite: null,
    ...value
  } as IMenuItem;

  // Normalize the rewrite.
  if (isString(item.rewrite)) {
    item.rewrite = {
      source: path,
      destination: item.rewrite
    };
  }

  a[path] = item;

  return a;

}, {} as Record<keyof typeof _menus, IMenuItem>);

export { menus };