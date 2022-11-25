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
              The principal cryptocurrency<br></br>of WormholesChain is the
              WormholesChain ERB.
            </div>
            <div className={styles.topRightBolder}>
              WormholesChain&nbsp;<span>Ecosystem</span>
            </div>
            <div className={styles.topRightLight}>
              The WormholesChain economy is backed by a two-tier token model
              consisting of the WormholesChain fungible token ERB and
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
                ERB is used to pay transaction<br></br>fees on WormholesChain
                NFT<br></br>Marketplaces, gas fees, and<br></br>persistent
                storage payments.
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
                funds from the WormholesChain Community fund.
              </div>
            </div>
            <div className={styles.outleft3}>
              <img
                src={require('../../assets/images/ecosystem/outleft3.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                WormholesChain S-NFTs are the second native token of the
                WormholesChain. S-NFTs serve as the direct reward for S-NFT
                Nodes who stake their tokens on WormholesChain.
              </div>
            </div>
            <div className={styles.outright1}>
              <img
                src={require('../../assets/images/ecosystem/outright1.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                The theme of each issue of S-NFTs is decided on by the community
                through voting, giving S-NFTs a collectible value separate from
                their pure exchange to ERB value and allowing community members
                to participate in creating the assets that make up
                WormholesChain.
              </div>
            </div>
            <div className={styles.outright2}>
              <img
                src={require('../../assets/images/ecosystem/outright2.png')}
              ></img>
              <div className={styles.dot}></div>
              <div className={styles.text}>
                S-NFTs also have an additional utility function, rewarding
                holders with extra rewards for collecting and exchanging full
                sets of S-NFTs.
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
                  src={require('../../assets/images/ecosystem/6.png')}
                ></img>
              </div>
              <div className={styles.inleft2}>
                <img
                  src={require('../../assets/images/ecosystem/inleft2.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/5.png')}
                ></img>
              </div>

              <div className={styles.inleft3}>
                <img
                  src={require('../../assets/images/ecosystem/inleft3.png')}
                ></img>
                <img
                  className={styles.number}
                  src={require('../../assets/images/ecosystem/4.png')}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
