import styles from './index.less';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React, { useState, useEffect } from 'react';

import { Helmet } from 'umi';
export default function IndexPage(props) {
  const [wormholes, setWormholes] = useState('WormholesChain Official Website');

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setWormholes(
      `WormholesChain ${props.location.pathname.slice(
        1,
        props.location.pathname.length,
      )}`,
    );
  }, [props.location.pathname]);
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8" />
        <title>{wormholes}</title>
        <link
          rel="shortcut ico"
          href="../assets/images/logo.ico"
          type="images/ico"
        />
      </Helmet>
      <div className={styles.box}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
