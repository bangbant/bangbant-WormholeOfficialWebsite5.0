import styles from './index.less';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React, { useState, useEffect } from 'react';
export default function IndexPage(props) {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [props.location.pathname]);
  return (
    <div className={styles.box}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
