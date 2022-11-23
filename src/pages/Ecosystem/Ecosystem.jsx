import React from 'react';
import styles from './Ecosystem.less';
export default function Ecosystem() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.topRightBold}>
              The principal cryptocurrency of the Wormholes<br></br>Blockchain
              is the Wormholes ERB.
            </div>
            <div className={styles.topRightBolder}>
              Wormholes&nbsp;<span>Ecosystem</span>
            </div>
            <div className={styles.topRightLight}>
              The Wormholes Blockchain economy is backed by a two-tier token
              model consisting of the Wormholes fungible token ERB and
              non-fungible token S-NFT.
            </div>
          </div>
        </div>
        <div className={styles.circle}>
          <div className={styles.out}>
            <div className={styles.outtop1}>
              <img
                src={require('../../assets/images/ecosystem/outtop1.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                ERB is used to pay transaction<br></br>fees on Wormholes NFT
                <br></br>Marketplaces, gas fees, and<br></br>persistent storage
                payments.
              </div>
            </div>
            <div className={styles.outleft1}>
              <img
                src={require('../../assets/images/ecosystem/outleft1.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                Finally, ERB plays a crucial role in voting and participating in
                governance throughout the community.
              </div>
            </div>
            <div className={styles.outleft2}>
              <img
                src={require('../../assets/images/ecosystem/outleft2.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                Ranging from frequent tasks such as voting on the theme of each
                issue of S-NFT to major decisions such as the disbursement of
                funds from the Wormholes Community fund.
              </div>
            </div>
            <div className={styles.outleft3}>
              <img
                src={require('../../assets/images/ecosystem/outleft3.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                Wormholes S-NFTs is the second native token of the Wormholes
                Blockchain. S-NFTs serve as the direct reward to the miners and
                NFT marketplace creators who secure the Wormholes Blockchain
                through their stakes and actions.
              </div>
            </div>
            <div className={styles.outright1}>
              <img
                src={require('../../assets/images/ecosystem/outright1.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                The theme of each issue of S-NFTs is decided on by the community
                through voting, giving SNFTs a collectible value separate from
                their pure exchange to ERB value and allowing community members
                to participate in creating the assets that make up the Wormholes
                Blockchain.
              </div>
            </div>
            <div className={styles.outright2}>
              <img
                src={require('../../assets/images/ecosystem/outright2.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                They are returned to the Wormholes Blockchain S-NFT Pool and
                will continue to serve as the direct reward for miners and NFT
                Marketplace creators in the future.
              </div>
            </div>
            <div className={styles.outright3}>
              <img
                src={require('../../assets/images/ecosystem/outright3.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                S-NFTs also have an additional utility function, granting
                holders the privilege of increasing their S-NFT to ERB exchange
                rate. S-NFTs are not burned or destroyed after they are
                exchanged for ERBs.
              </div>
            </div>
            <div className={styles.in}>
              <div className={styles.round}>
                <div className={styles.roundButton}>
                  <div className={styles.roundText}>Learn More</div>
                </div>
              </div>
              <div className={styles.intop1}>
                <img
                  src={require('../../assets/images/ecosystem/intop1.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/1.png')}
                ></img>
              </div>
              <div className={styles.inleft1}>
                <img
                  src={require('../../assets/images/ecosystem/inleft1.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/7.png')}
                ></img>
              </div>
              <div className={styles.inleft2}>
                <img
                  src={require('../../assets/images/ecosystem/inleft2.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/6.png')}
                ></img>
              </div>

              <div className={styles.inleft3}>
                <img
                  src={require('../../assets/images/ecosystem/inleft3.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/5.png')}
                ></img>
              </div>
              <div className={styles.inright1}>
                <img
                  src={require('../../assets/images/ecosystem/inright1.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/2.png')}
                ></img>
              </div>
              <div className={styles.inright2}>
                <img
                  src={require('../../assets/images/ecosystem/inright2.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/3.png')}
                ></img>
              </div>
              <div className={styles.inright3}>
                <img
                  src={require('../../assets/images/ecosystem/inright3.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/7.png')}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
