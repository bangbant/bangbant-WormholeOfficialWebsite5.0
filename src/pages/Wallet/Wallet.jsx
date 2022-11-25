import React from 'react';
import styles from './Wallet.less';
export default function Wallet() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.titleBolder}>
            WormholesChain&nbsp;<span>Wallet</span>
          </div>
          <div className={styles.titleLight}>
            The WormholesChain Limino is your portal to the WormholesChain
            ecosystem, acting as a secure means<br></br>for storing and
            transacting your crypto assets on the WormholesChain. Join us in
            building the<br></br>WormholesChain ecosystem by creating a
            WormholesChain Limino today!
          </div>
          <div className={styles.Button}>Enter Limino</div>
        </div>
      </div>
      <div className={styles.contentmiddle}>
        <div className={styles.middle}>
          <div className={styles.lineBox}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.titleBolder}>
            WormholesChain&nbsp;<span>Limino</span>&nbsp;Functions
          </div>
          <div className={styles.flexBox}>
            <div className={styles.middelLeft}>
              <img
                src={require('../../assets/images/Wallet/leftimg.png')}
              ></img>
              <div className={styles.title}>
                Stake ERB on<br></br>the WormholesChain
              </div>
              <div className={styles.item}>
                As the native token of the WormholesChain, ERB gives its holder
                access to important functions on WormholesChain, including
                participating in the building of WormholesChain. Through the
                WormholesChain Limino, ERB can be staked to create validator
                nodes and to have the chance to get validator rewards.
              </div>
              <div className={styles.Button}>More</div>
            </div>
            <div className={styles.middelcenter}>
              <img
                src={require('../../assets/images/Wallet/middleimg.png')}
              ></img>
            </div>
            <div className={styles.middelRight}>
              <img
                src={require('../../assets/images/Wallet/rightimg.png')}
              ></img>
              <div className={styles.title}>Open an NFT Marketplace</div>
              <div className={styles.item}>
                By staking a small amount of ERB through the WormholesChain
                Limino, users can create their own NFT Marketplace with just one
                click and gain the chance to receive S-NFT rewards.
              </div>
              <div className={styles.Button}>More</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.titleBolder}>
          <span>Wormholes</span>&nbsp;is almost here, stay<br></br>tuned for
          updates!
        </div>
        <div className={styles.lineBox}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.buttonBox}>
          <div className={styles.Button}>WormholesChain Limino Tutorial</div>
          <div className={styles.Button}>WormholesChain Supports MetaMask</div>
        </div>
      </div>
    </div>
  );
}
