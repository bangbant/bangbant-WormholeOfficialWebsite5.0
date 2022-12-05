import styles from './index.less';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HeaderApp from '../components/HeaderApp/HeaderApp';
import HomePageApp from './HomePageApp/HomePageApp';
import React, { useState, useEffect } from 'react';

import { Helmet } from 'umi';
export default function IndexPage(props) {
  const [wormholes, setWormholes] = useState('WormholesChain Official Website');
  const getDevice = () => {
    let agent = navigator.userAgent.toLowerCase();
    let result = {
      device: (function () {
        if (/windows/.test(agent)) {
          return 'pc';
        } else if (/iphone|ipod/.test(agent) && /mobile/.test(agent)) {
          return 'mobilemove';
        } else if (/ipad/.test(agent) && /mobile/.test(agent)) {
          return 'mobilemove';
        } else if (/android/.test(agent)) {
          return 'mobile';
        } else if (/linux/.test(agent)) {
          return 'pc';
        } else if (/mac/.test(agent)) {
          return 'pc';
        } else {
          return 'pc';
        }
      })(),
    };
    return result.device;
  };
  console.log(getDevice());
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
      {getDevice() == 'pc' ? (
        <div className={styles.box}>
          <Header />
          {props.children}
          <Footer />
        </div>
      ) : (
        <>
          <HeaderApp />
          {window.location.pathname == '/' ? <HomePageApp /> : props.children}
        </>
      )}
    </>
  );
}
