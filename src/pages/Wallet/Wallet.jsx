import React from 'react';
import styles from './Wallet.less';
export default function Wallet() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.titleBolder}>
            Wormholes&nbsp;<span>Limino</span>
          </div>
          <div className={styles.titleLight}>
            The Wormholes Limino is your portal to the Wormholes ecosystem,
            acting as a secure means
            <br /> for storing and transacting your crypto assets on Wormholes.
            Join us in building the
            <br />
            Wormholes ecosystem by creating a Wormholes Limino today!
          </div>
          <div
            className={styles.Button}
            onClick={() => {
              window.open('https://www.limino.com/#/wallet');
            }}
          >
            Enter Limino
          </div>
        </div>
      </div>
      <div className={styles.contentmiddle}>
        <div className={styles.middle}>
          <div className={styles.lineBox}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.titleBolder}>
            Wormholes&nbsp;<span>Limino</span>&nbsp;Functions
          </div>
          <div className={styles.flexBox}>
            <div className={styles.middelLeft}>
              <img
                src={require('../../assets/images/Wallet/rightimg.png')}
              ></img>
              <div className={styles.title}>
                Stake ERB on<br></br>Wormholes
              </div>
              <div className={styles.item}>
                As the native token of the Wormholes, ERB gives its holder
                access to important functions on Wormholes, including
                participating in the building of Wormholes. Through the
                Wormholes Limino, ERB can be staked to create validator nodes
                and to have the chance to get validator rewards.
              </div>
              <div
                className={styles.Button}
                onClick={() => {
                  window.open(
                    'https://market-2.gitbook.io/get-s-nft-by-staking-erb-on-wormholeschain/',
                  );
                }}
              >
                More
              </div>
            </div>
            <div className={styles.middelcenter}>
              <img
                src={require('../../assets/images/Wallet/middleimg.png')}
              ></img>
            </div>
            <div className={styles.middelRight}>
              <img
                src={require('../../assets/images/Wallet/leftimg.png')}
              ></img>
              <div className={styles.title}>
                Open an NFT
                <br /> Marketplace
              </div>
              <div className={styles.item}>
                By staking a small amount of ERB through the Wormholes Limino,
                users can create their own NFT Marketplace with just one click
                and gain the chance to receive S-NFT rewards.
              </div>
              <div
                className={styles.Button}
                onClick={() => {
                  window.open(
                    'https://market-2.gitbook.io/one-click-nft-marketplace/',
                  );
                }}
              >
                More
              </div>
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
          <div
            className={styles.Button}
            style={{ color: '#a486fa' }}
            onClick={() => {
              window.open('https://market-2.gitbook.io/wormholestestwallet/');
            }}
          >
            Wormholes Limino Tutorial
          </div>
          <div
            className={styles.Button}
            onClick={() => {
              window.open('https://metamask.io/');
            }}
          >
            Wormholes Supports MetaMask
          </div>
        </div>
      </div>
    </div>
  );
}
