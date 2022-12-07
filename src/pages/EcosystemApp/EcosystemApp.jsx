import styles from './EcosystemApp.less';
import React, { useState, useEffect } from 'react';
export default function EcosystemApp() {
  const [aaa, setAaa] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightBold}>
              The principal cryptocurrency
              <br /> of WormholesChain is the
              <br /> WormholesChain ERB.
            </div>
            <div className={styles.topRightBolder}>
              WormholesChain
              <br />
              <span>Ecosystem</span>
            </div>
            <div className={styles.topRightLight}>
              The WormholesChain economy is backed by a two-tier token model
              consisting of the WormholesChain fungible token ERB and
              non-fungible token S-NFT.
            </div>
            {/* <div className={styles.button}>Learn More</div> */}
          </div>
        </div>
        {/* 转盘 */}
        <div className={styles.turntableBox}>
          <div
            className={styles.turntable}
            // onTouchStart={() => {
            //   setAaa(0);
            // }}
            // onTouchEnd={() => {
            //   setAaa(1);
            // }}
            // style={{ transform: 'rotate(210deg)' }}
          >
            <p className={styles.turntable_p1}>
              ERB is used to pay transaction fees on WormholesChain NFT
              Marketplaces, gas fees, and persistent storage payments.
            </p>
            <p className={styles.turntable_p2}>
              The theme of each issue of S-NFTs is decided on by the community
              through voting, giving S-NFTs a collectible value separate from
              their pure exchange to ERB value and allowing community members to
              participate in creating the assets that make up WormholesChain.
            </p>
            <p className={styles.turntable_p6}>
              Finally, ERB plays a crucial role in voting and participating in
              governance throughout the community.
            </p>
            <p className={styles.turntable_p5}>
              Ranging from frequent tasks such as voting on the theme of each
              issue of S-NFT to major decisions such as the disbursement of
              funds from the WormholesChain Community fund.
            </p>
            <p className={styles.turntable_p4}>
              WormholesChain S-NFTs are the second native token of the
              WormholesChain. S-NFTs serve as the direct reward for S-NFT Nodes
              who stake their tokens on WormholesChain.
            </p>
            <p className={styles.turntable_p3}>
              S-NFTs also have an additional utility function, rewarding holders
              with extra rewards for collecting and exchanging full sets of
              S-NFTs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
