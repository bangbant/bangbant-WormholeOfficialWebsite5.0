import React from 'react';
import styles from './Wallet.less';
export default function Wallet() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.titleBolder}>
            Wormholes&nbsp;<span>Wallet</span>
          </div>
          <div className={styles.titleLight}>
            The Wormholes Wallet is your portal to the Wormholes Chain
            ecosystem, acting as a secure means for<br></br>storing and
            transacting your crypto assets on the Wormholes Chain. Join us in
            building the Wormholes<br></br>ecosystem by creating a Wormholes
            Wallet today!
          </div>
          <div className={styles.Button}>Enter Wallet</div>
        </div>
      </div>
      <div className={styles.contentmiddle}>
        <div className={styles.middle}>
          <div className={styles.lineBox}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.titleBolder}>
            Wormholes&nbsp;<span>Wallet</span>&nbsp;Functions
          </div>
          <div className={styles.flexBox}>
            <div className={styles.middelLeft}>
              <img
                src={require('../../assets/images/Wallet/leftimg.png')}
              ></img>
              <div className={styles.title}>
                Stake ERB on the Wormholes Chain
              </div>
              <div className={styles.item}>
                As the native token of the Wormholes Chain, ERB gives its holder
                access to important functions on the Wormholes Chain, including
                participating in the building of the Wormholes Blockchain.
                Through the Wormholes Wallet, ERB can be staked to create
                validator nodes and to have the chance to get validator rewards.
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
                By staking a small amount of ERB through the Wormholes Wallet,
                users can create their own NFT Marketplace with just one click
                and gain the chance to receive S-NFT rewards.
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
          <div className={styles.Button}>Wormholes Wallet Tutorial</div>
          <div className={styles.Button}>Wormholes Supports MetaMask</div>
        </div>
      </div>
    </div>
  );
}
