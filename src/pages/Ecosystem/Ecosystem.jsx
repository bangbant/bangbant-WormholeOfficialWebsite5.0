import React from 'react';
import styles from './Ecosystem.less';
export default function Ecosystem() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topLeft}></div>
          <div className={styles.topRight}>
            <div className={styles.topRightBold}>
              The principal cryptocurrency of the Wormholes Blockchain is the
              Wormholes ERB.{' '}
            </div>
            <div className={styles.topRightBolder}>
              <span>Wormholes</span>&nbsp;<span>Ecosystem</span>
            </div>
            <div className={styles.topRightLight}>
              The principal cryptocurrency of the Wormholes Blockchain is the
              Wormholes ERB.{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
