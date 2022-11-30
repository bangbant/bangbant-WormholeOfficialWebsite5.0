import React from 'react';
import styles from './Join.less';

export default function Join() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightBolder}>
              Join the&nbsp;<span>WormholesChain</span>
              <br></br>Global Community Team
            </div>
            <div className={styles.topRightLight}>
              Grow together with WormholesChain and help build a better Web3
              future.
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.block}>
            <div className={styles.dot}></div>
            <div className={styles.item}>
              If you know blockchain development, come work with the
              WormholesChain Community Team to resolve security bugs and
              optimize algorithm protocols and application tools, earning
              rewards in the process.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.dot}></div>
            <div className={styles.item}>
              If you are good at writing, come provide unique written or video
              content about WormholesChain to a global audience, earning rewards
              in the process.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.dot}></div>
            <div className={styles.item}>
              If you can propose and develop creative ideas for WormholesChain,
              you will earn recieve rewards if they are selected.
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.dot}></div>
            <div className={styles.item}>
              If know community operation, come work with the WormholesChain
              Community Team to establish an active global community, getting
              paid as you reach benchmarks.
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.topRightBolder}>
            Apply Here to&nbsp;<span>Join</span>&nbsp;the&nbsp;
            <span>WormholesChain</span>
            <br></br>Global Community Team
          </div>
          <div
            className={styles.Button}
            onClick={() => {
              window.open('https://wormholes.com/websetForm/#/joinWormholes');
            }}
          >
            Join
          </div>
        </div>
      </div>
    </div>
  );
}
