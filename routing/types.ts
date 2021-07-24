import { IconType } from 'react-icons';

export interface IArea {
  title: string;
  description: string;
  menus: string | string[];
  icon: IconType;
  images: string | string[];
  url: string | string[];
  card: string;
}

export type Areas<T extends Record<string, IArea> = Record<string, IArea>> = Record<keyof T, T[keyof T]>;