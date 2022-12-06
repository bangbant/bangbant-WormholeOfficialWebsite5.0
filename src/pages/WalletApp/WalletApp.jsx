import React from 'react';
import styles from './WalletApp.less';

export default function WalletApp() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.titleBolder}>
            Wormholes<br></br>Chain&nbsp;<span>Limino</span>
          </div>
          <div className={styles.titleLight}>
            The WormholesChain Limino is your portal to the WormholesChain
            ecosystem, acting as a secure means for storing and transacting your
            crypto assets on the WormholesChain. Join us in building the
            WormholesChain ecosystem by creating a WormholesChain Limino today!
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
            WormholesChain<br></br>
            <span>Limino</span>&nbsp;Functions
          </div>
          <div className={styles.middelcenter}>
            <img
              src={require('../../assets/images/Wallet/middleimg.png')}
            ></img>
          </div>
          <div className={styles.flexBox}>
            <div className={styles.middelLeft}>
              <img
                src={require('../../assets/images/Wallet/rightimg.png')}
              ></img>
              <div className={styles.title}>
                Stake ERB on<br></br>WormholesChain
              </div>
              <div className={styles.item}>
                As the native token of the WormholesChain, ERB gives its holder
                access to important functions on WormholesChain, including
                participating in the building of WormholesChain. Through the
                WormholesChain Limino, ERB can be staked to create validator
                nodes and to have the chance to get validator rewards.
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
            <div className={styles.middelRight}>
              <img
                src={require('../../assets/images/Wallet/leftimg.png')}
              ></img>
              <div className={styles.title}>
                Open an NFT
                <br /> Marketplace
              </div>
              <div className={styles.item}>
                By staking a small amount of ERB through the WormholesChain
                Limino, users can create their own NFT Marketplace with just one
                click and gain the chance to receive S-NFT rewards.
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
          <span>WormholesChain</span>&nbsp;is<br></br>almost here, stay tuned
          <br></br>
          for updates!
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
            WormholesChain Limino Tutorial
          </div>
          <div
            className={styles.Button}
            onClick={() => {
              window.open('https://metamask.io/');
            }}
          >
            WormholesChain Supports MetaMask
          </div>
        </div>
      </div>
    </div>
  );
}
