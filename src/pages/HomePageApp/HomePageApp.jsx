import React from 'react';
import HomePageApp_ls from './HomePageApp.less';
export default function HomePageApp() {
  return (
    <>
      <div className={HomePageApp_ls.HomePageAppBox}>
        <div className={HomePageApp_ls.titlebox}>
          <p>
            The First Truly Decentralized POS <span>Multi-Dimensional</span>{' '}
            Chain in<span>&nbsp;Web3</span>
          </p>
        </div>
        <div className={HomePageApp_ls.centerbox}>
          <div className={HomePageApp_ls.centerbox_d1}>
            <div className={HomePageApp_ls.centerbox_d1_1}>
              Features and Innovations
            </div>
            <div className={HomePageApp_ls.centerbox_d1_2}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.centerbox_d1_3}>{/* 线 */}</div>
            <div className={HomePageApp_ls.centerbox_d1_4}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.centerbox_d1_5}>
              <div></div>
              <p>
                One-click coupling generates clone subchains and multiple
                subchain systems combined with the SWAP interaction scheme to
                complete the cross-chain interaction of different crypto assets.
              </p>
            </div>
            <div className={HomePageApp_ls.centerbox_d1_6}>
              <div></div>
              <p>
                Innovative native mainnet fragment S-NFT and high-performance
                decentralized infrastructure built around NFT full-stack
                solutions.
              </p>
            </div>
            <div className={HomePageApp_ls.centerbox_d1_7}>
              <div></div>
              <p>
                Fair and Secure, powered by PoS and Dynamic Random Election
                (DRE) consensus algorithm.
              </p>
            </div>
          </div>
          <div className={HomePageApp_ls.centerbox_d2}>
            <img src={require('../../assets/gif/4.gif')} />
          </div>
          <div
            className={HomePageApp_ls.centerbox_d3}
            onClick={() => {
              window.open(
                'https://medium.com/wormholeschain-network/mandatory-reading-for-validators-of-wormholeschain-d17c2b27a885',
              );
            }}
          >
            Learn about Validator
          </div>
          <div
            className={HomePageApp_ls.centerbox_d4}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/install/run/index.html#spin-up-your-own-wormholes-node',
              );
            }}
          >
            Become a Validator
          </div>
        </div>
      </div>
    </>
  );
}
