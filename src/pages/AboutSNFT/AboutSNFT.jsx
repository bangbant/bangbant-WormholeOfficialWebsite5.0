import React from 'react';
import styles from './AboutSNFT.less';
export default function AboutSNFT() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img src={require('../../assets/images/AboutSNFT/top.png')}></img>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightBolder}>
            Chain-Native Non-Fungible<br></br>Token -&nbsp;<span>S-NFT</span>
          </div>
          <div className={styles.topRightLight}>
            Distinct from smart-contract based NFTs, S-NFTs are a native
            chain-layer non-fungible asset on Wormholes. S-NFTs are rewarded to
            Wormholes S-NFT Miners.
          </div>
        </div>
      </div>
      <img
        className={styles.line}
        src={require('../../assets/images/AboutSNFT/cross2.png')}
      ></img>
      <div className={styles.middle}>
        <div className={styles.boxLeft}>
          <div className={styles.title}>
            S-NFT Creation:
            <div className={styles.num}>1</div>
          </div>
          <div className={styles.content}>
            Each issue of 4096 S-NFTs will be issued as block rewards, with 4/11
            of the total block rewards being distributed in S-NFTs. For the
            S-NFTs in the issue that have been selected, the output of S-NFT
            fragments in the first phase will be completed after 1024 blocks;
            upon completion, the next series of S-NFTs will be voted on and
            minted.
          </div>
        </div>
        <div className={styles.boxRight}>
          <div className={styles.boxRightTop}>
            <div className={styles.title}>
              S-NFT Issue Election Mechanism:
              <div className={styles.num}>2</div>
            </div>
            <div className={styles.content}>
              An issue of S-NFTs is composed of 4096 individual S-NFTs, and each
              new issue of S-NFTs will be selected by users who hold S-NFTs.
            </div>
          </div>
          <div className={styles.boxRightBot}>
            <div className={styles.title}>
              S-NFT Synthesis Mechanism:
              <div className={styles.num}>3</div>
            </div>
            <div className={styles.content}>
              The 4096 S-NFTs in an issue are all minted as first-level S-NFTs.
              After collecting 16 consecutively numbered, first-level S-NFTs
              from the same issue, the S-NFTs will automatically be synthesized
              into a second-level S-NFT. The S-NFT system follows the same logic
              until level 4 S-NFTs are synthesized from level 3 S-NFTs.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cross}>
        <div className={styles.box}>
          <div className={styles.crossLeft}>
            <div className={styles.topRightBolder}>
              Get&nbsp;<span>S-NFTs</span>
            </div>
            <div className={styles.topRightLight}>
              Any ecosystem participant that stakes 700 ERBs on the<br></br>
              chain can become eligible to receive S-NFT rewards.
            </div>
          </div>
          <div className={styles.crossRight}>
            <div
              className={styles.Button}
              style={{
                color: '#a486fa',
              }}
              onClick={() => {
                window.open(
                  'https://market-2.gitbook.io/get-s-nft-by-staking-erb-on-wormholeschain/',
                );
              }}
            >
              More
            </div>
          </div>
        </div>
      </div>
      <div className={styles.circle}>
        <div className={styles.in}>
          <div className={styles.round}>
            <div className={styles.roundButton}>
              <div className={styles.roundText}>
                Right and Interest<br></br>Nature of S-NFTs
              </div>
            </div>
          </div>
        </div>
        <div className={styles.out}>
          <div className={styles.outtop1}>
            <img src={require('../../assets/images/AboutSNFT/c1.png')}></img>
            <div className={styles.dot}>
              <img src={require('../../assets/images/AboutSNFT/1.png')}></img>
            </div>
            <div className={styles.text}>
              Trading rights and interests: S-NFTs, like ordinary NFTs, have
              attributes and are freely tradable on primary and secondary
              markets.
            </div>
          </div>
          <div className={styles.outleft1}>
            <img src={require('../../assets/images/AboutSNFT/c5.png')}></img>
            <div className={styles.dot}>
              <img src={require('../../assets/images/AboutSNFT/5.png')}></img>
            </div>
            <div className={styles.text}>
              Exchange rights and interests: exchange S-NFTs at differing
              exchange rates depending on the level of the S-NFTs. First-level
              S-NFTs can be exchanged for 0.095 ERBs, second-level for 0.143,
              third-level for 0.271, and fourth-level for 0.65 ERBs.
            </div>
          </div>
          <div className={styles.outleft2}>
            <img src={require('../../assets/images/AboutSNFT/c4.png')}></img>
            <div className={styles.dot}>
              <img src={require('../../assets/images/AboutSNFT/4.png')}></img>
            </div>
            <div className={styles.text}>
              Staking rights and interests: S-NFTs can be staked into a
              decentralized exchange to get assets on the many Wormholes
              subchains.
            </div>
          </div>
          <div className={styles.outright1}>
            <img src={require('../../assets/images/AboutSNFT/c2.png')}></img>
            <div className={styles.dot}>
              <img src={require('../../assets/images/AboutSNFT/2.png')}></img>
            </div>
            <div className={styles.text}>
              Voting rights and interests: holders of S-NFTs can vote for each
              S-NFT issue. The voter with the highest S-NFT voting weight will
              be selected as the creator of the next issue of S-NFTs and will
              receive 10% royalties on all S-NFT transactions from that issue.
            </div>
          </div>
          <div className={styles.outright2}>
            <img src={require('../../assets/images/AboutSNFT/c3.png')}></img>
            <div className={styles.dot}>
              <img src={require('../../assets/images/AboutSNFT/3.png')}></img>
            </div>
            <div className={styles.text}>
              Content rights and interests: different levels of S-NFTs can
              become tickets that allowed their owner to watch different digital
              content. Content creators will upload their digital work through
              the platform, with good content generating strong asset
              appreciation and royalties for creators.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
