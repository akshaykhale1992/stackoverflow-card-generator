import Head from 'next/head';
import React from 'react';

const CustomHead = () => {
  return (
    <Head>
      <title>Stackoverflow Card Generator</title>
      <meta name="description" content="Stackoverflow Card Generator" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
