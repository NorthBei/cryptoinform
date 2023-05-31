import Head from 'next/head';
import React from 'react';

import { webSiteUrl } from '@/const';
import { brand } from '@/theme';

type HelmetProps = {
  title?: string;
  description?: string;
};

const Helmet = (props: HelmetProps) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{`CryptoInform | ${title}`}</title>
      <meta name="description" content={description} />
      {/* Favicon */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={brand.primary}
      />
      <meta name="msapplication-TileColor" content={brand.primary} />
      <meta name="theme-color" content={brand.primary} />
      {/* Facebook */}
      <meta
        property="og:title"
        content="CryptoInform | Valuable Crypto Notifications"
      />
      <meta property="og:site_name" content="CryptoInform" />
      <meta property="og:url" content={webSiteUrl} />
      <meta
        property="og:description"
        content="Won't miss any great invest opportunities such as ICO, IDO, IEO, airdrop again by receiving continuous period notification in Telegram."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${webSiteUrl}/images/cover.jpg`} />
    </Head>
  );
};

Helmet.defaultProps = {
  title: 'valuable crypto notifications',
  description: 'CryptoInform Bot',
};

export default Helmet;
