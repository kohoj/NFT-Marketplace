import React from 'react';
import type { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '@/styles/tailwind.css';
import 'focus-visible';
import Head from 'next/head';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.ArbitrumTestnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>
          BentoCollect - Discover, collect, and sell extraordinary NFTs
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Marketplace with Next.JS To List Your NFTs For Sale, Accept Bids, and Buy NFTs"
        />
        <meta
          name="keywords"
          content="Thirdweb, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
