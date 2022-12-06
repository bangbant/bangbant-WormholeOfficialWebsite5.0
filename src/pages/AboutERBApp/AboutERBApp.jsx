import React, { useState, useEffect } from 'react';
import styles from './AboutERBApp.less';
export default function AboutERBApp() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.topRightBolder}>
            About the&nbsp;<span>ERB</span>
          </div>
          <div className={styles.topRightLight}>
            The principal cryptocurrency of WormholesChain is the WormholesChain
            ERB. ERB is used to pay transaction fees on WormholesChain NFT
            Marketplaces, gas fees, and persistent storage payments.It is also
            used as a stake to open NFT marketplaces and increase mining
            revenue. Finally, ERB plays a crucial role in voting and
            participating in governance throughout the community, ranging from
            frequent tasks such as voting on the theme of each issue of S-NFT to
            major decisions such as the disbursement of funds from the
            WormholesChain Community Fund.
          </div>
        </div>
        <div className={styles.topRight}>
          <img src={require('../../assets/images/AboutERB/logo.png')}></img>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.content}>
          <div className={styles.topRightBolder}>
            <span>Mainnet</span>&nbsp;Token<br></br>
            <span className={styles.smallTitle}>Inflation Logic</span>
          </div>
          <div className={styles.topRightLight}>
            WormholesChain validation and staking rewards are distributed in the
            form of ERBs and S-NFTs. S-NFTs can also be exchanged for ERBs in
            Limino, the WormholesChain digital wallet.
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.topRightBolder}>
          Advantages of the&nbsp;<span>ERB</span>
        </div>
        <div className={styles.lineBox}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.itemboxLeft}>
          <div className={styles.item}>
            <div className={styles.itemLeft}>
              Decentrali<br></br>zed Assets
            </div>
            <div className={styles.itemRight}>
              Based on a programmable mainnet crypto asset on a
              multi-dimensional chain, ERB belongs directly to its owner and is
              always retrievable unless the private key is lost.
            </div>
          </div>
        </div>
        <div className={styles.itemboxRight}>
          <div className={styles.item}>
            <div className={styles.itemLeft}>Secure</div>
            <div className={styles.itemRight}>
              WormholesChain uses the most advanced encryption technology and
              security systems to ensure the security and stability of the
              network and its users assets.
            </div>
          </div>
        </div>
        <div className={styles.itemboxLeft}>
          <div className={styles.item}>
            <div className={styles.itemLeft}>Low-Cost Liquidity</div>
            <div className={styles.itemRight}>
              The WormholesChain multi-dimensional blockchain architecture
              combined with its lightweight and fair consensus algorithms allow
              on-chain assets to move quickly and cheaply without sacrificing
              decentralization.
            </div>
          </div>
        </div>
        <div className={styles.itemboxRight}>
          <div className={styles.item}>
            <div className={styles.itemLeft}>Balanced Inflation</div>
            <div className={styles.itemRight}>
              The differentiated dual-token model effectively balances inflation
              through market supply and demand forces resulting in a unique
              token economic model.
            </div>
          </div>
        </div>
        <div className={styles.itemboxLeft}>
          <div className={styles.item}>
            <div className={styles.itemLeft}>Diversified Demand</div>
            <div className={styles.itemRight}>
              Owing to the NFT Marketplaces built on the multi-chain and
              multi-layer structure and the WormholesChain application layer,
              the WormholesChain token economic model creates significant demand
              for ERBs and S-NFTs, opening up new roles in the WormholesChain
              ecosystem.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flow}>
        <div className={styles.topLeft}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightBolder}>
            Richer Circulation&nbsp;<br></br>
            <span>Application</span>&nbsp;Scenarios
          </div>
          <div className={styles.topRightLight}>
            ERB is used to pay transaction fees on WormholesChain NFT
            Marketplaces, gas<br></br>fees, and persistent storage payments.
          </div>
        </div>
      </div>
    </div>
  );
}
