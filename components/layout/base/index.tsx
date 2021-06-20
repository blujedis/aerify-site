import { FC } from 'react';
import Head from 'next/head';
import { ILayoutBaseProps, ILayoutOpenGraph, ILayoutTwitterCard } from './types';

const DEFAULTS: Partial<ILayoutBaseProps> = {
  title: 'NextJS',
  description: 'NextJS Web Application',
  links: [],
  metas: [],
  socialGraph: {} as ILayoutOpenGraph,
  socialCard: {} as ILayoutTwitterCard
};

const getKey = () => Math.random().toString(16);

const LayoutBase: FC<ILayoutBaseProps> = (props) => {

  props = {
    ...DEFAULTS,
    ...props
  };

  const {
    title, description, metas, links, header,
    footer, children, socialGraph: openGraph, socialCard: twitterCard
  } = props;

  const getTitle = () => {
    return (
      <title>{title}</title>
    );
  };

  const getOpenGraph = () => {
    if (!openGraph) return null;
    return Object.keys(openGraph).map(key => <meta key={getKey()} property={'og:' + key} content={openGraph[key as keyof typeof openGraph]} />);
  };

  const getTwitterCard = () => {
    if (!twitterCard) return null;
    return Object.keys(twitterCard).map(key => <meta key={getKey()} name={'twitter:' + key} content={twitterCard[key as keyof typeof twitterCard]} />);
  };

  const getMetas = () => {
    const _metas = metas.map(v => <meta key={getKey()} {...v} />);
    const desc = <meta key={getKey()} name="description" content={description} />;
    const og = getOpenGraph() || [];
    const twitter = getTwitterCard() || [];
    return [desc, ..._metas, ...og, ...twitter];
  };

  const getLinks = () => {
    return links.map(v => <link key={getKey()} {...v} />);
  };

  const getHeader = () => {
    if (!header) return null;
    return header as JSX.Element;
  };

  const getFooter = () => {
    if (!footer) return null;
    return footer as JSX.Element;
  };

  return (
    <>
      <Head>
        {getTitle()}
        {getMetas()}
        {getLinks()}
      </Head>
      {getHeader()}
      {children}
      {getFooter()}
    </>
  );

};

export default LayoutBase;