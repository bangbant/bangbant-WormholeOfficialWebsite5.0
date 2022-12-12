import styles from './EcosystemApp.less';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function EcosystemApp() {
  const [blockArr, setBlockArr] = useState([
    {
      index: 0,
      active: true,
    },
    {
      index: 1,
      active: false,
    },
    {
      index: 2,
      active: false,
    },
  ]);
  const inputElement = useRef();
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      console.log('afterChange', index);
      let arr = [...blockArr];
      arr.forEach((item, Arrindex) => {
        if (Arrindex == index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      setBlockArr(arr);
    },
  };
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

        <div className={styles.TouchcarouselBox}>
          <Slider ref={inputElement} {...settings}>
            <div>
              <div className={styles.TouchcarouselBox_block}>
                <div className={styles.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/EcosystemApp/Slice 1022@2x.png')}
                  />
                  <p>
                    ERB is used to pay transaction fees on WormholesChain NFT
                    Marketplaces, gas fees, and persistent storage payments.
                  </p>
                </div>
                <div className={styles.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/EcosystemApp/Slice 1023@2x.png')}
                  />
                  <p>
                    The theme of each issue of S-NFTs is decided on by the
                    community through voting, giving S-NFTs a collectible value
                    separate from their pure exchange to ERB value and allowing
                    community members to participate in creating the assets that
                    make up WormholesChain.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TouchcarouselBox_block}>
                <div className={styles.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/EcosystemApp/Slice 1024@2x.png')}
                  />
                  <p>
                    S-NFTs also have an additional utility function, rewarding
                    holders with extra rewards for collecting and exchanging
                    full sets of S-NFTs.
                  </p>
                </div>
                <div className={styles.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/EcosystemApp/Slice 1020@2x.png')}
                  />
                  <p>
                    WormholesChain S-NFTs are the second native token of the
                    WormholesChain. S-NFTs serve as the direct reward for S-NFT
                    Nodes who stake their tokens on WormholesChain.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TouchcarouselBox_block}>
                <div className={styles.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/EcosystemApp/Slice 1021@2x.png')}
                  />
                  <p>
                    Ranging from frequent tasks such as voting on the theme of
                    each issue of S-NFT to major decisions such as the
                    disbursement of funds from the WormholesChain Community
                    fund.
                  </p>
                </div>
                <div className={styles.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/EcosystemApp/Slice 934@2x.png')}
                  />
                  <p>
                    Finally, ERB plays a crucial role in voting and
                    participating in governance throughout the community.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.dotBox}>
          {blockArr.map((item, index) => {
            return (
              <div
                className={styles.dot}
                style={{
                  background: item.active ? '#a486fa' : 'rgba(0,0,0,0.23)',
                }}
                onClick={(index) => {
                  console.log(item, inputElement.current);
                  inputElement.current.slickGoTo(item.index);
                }}
              ></div>
            );
          })}
        </div>

        {/* 转盘 */}
        {/* <div className={styles.turntableBox}>
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
        </div> */}
      </div>
    </div>
  );
}
