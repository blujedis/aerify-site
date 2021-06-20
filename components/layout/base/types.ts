import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DetailedAttributes<T extends HTMLElement = HTMLElement, A extends HTMLAttributes<T> = HTMLAttributes<T>> = DetailedHTMLProps<A, T>;

export interface ILayoutOpenGraph {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface ILayoutTwitterCard extends Omit<ILayoutOpenGraph, 'url'> {
  card: string;
}

export interface ILayoutProps {
  title: string;
  description: string;
  socialGraph: ILayoutOpenGraph;
  socialCard: ILayoutTwitterCard;
}

export interface ILayoutBaseProps extends ILayoutProps {
  metas: Record<string, any>[];
  links: Record<string, any>[];
  header: JSX.Element;
  footer: JSX.Element;
}

