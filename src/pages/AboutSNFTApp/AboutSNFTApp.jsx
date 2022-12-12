import AboutSNFTApp_ls from './AboutSNFTApp.less';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function AboutSNFTApp() {
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
    <>
      <div className={AboutSNFTApp_ls.AboutSNFTAppBox}>
        <p className={AboutSNFTApp_ls.AboutSNFTAppBox_title}>
          Chain-Native
          <br /> Non-Fungible <br />
          Token -&nbsp;<span>S-NFT</span>
        </p>
        <p className={AboutSNFTApp_ls.AboutSNFTAppBox_text}>
          Distinct from smart-contract based NFTs, S-NFTs are a native
          chain-layer non-fungible asset on WormholesChain. S-NFTs are rewarded
          to WormholesChain S-NFT Miners.
        </p>
        <img
          className={AboutSNFTApp_ls.AboutSNFTAppBox_titleimg1}
          src={require('../../assets/images/AboutSNFTApp/Slice 893.png')}
        />
        <img
          className={AboutSNFTApp_ls.AboutSNFTAppBox_titleimg2}
          src={require('../../assets/images/AboutSNFTApp/Slice 1005.png')}
        />
        <div className={AboutSNFTApp_ls.AboutSNFTAppBox_centerbox}>
          <div className={AboutSNFTApp_ls.AboutSNFTAppBox_block1}>
            <span className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_math}>
              1
            </span>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_name}>
              S-NFT Creation:
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_data}>
              Each issue of 4096 S-NFTs will be issued as block rewards, with
              4/11 of the total block rewards being distributed in S-NFTs. For
              the S-NFTs in the issue that have been selected, the output of
              S-NFT fragments in the first phase will be completed after 1024
              blocks; upon completion, the next series of S-NFTs will be voted
              on and minted.
            </p>
          </div>
          <div className={AboutSNFTApp_ls.AboutSNFTAppBox_block2}>
            <span className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_math}>
              2
            </span>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_name}>
              S-NFT Issue Election Mechanism:
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_data}>
              An issue of S-NFTs is composed of 4096 individual S-NFTs, and each
              new issue of S-NFTs will be selected by users who hold S-NFTs.
            </p>
          </div>
          <div className={AboutSNFTApp_ls.AboutSNFTAppBox_block3}>
            <span className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_math}>
              3
            </span>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_name}>
              S-NFT Synthesis Mechanism:
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_block1_data}>
              The 4096 S-NFTs in an issue are all minted as first-level S-NFTs.
              After collecting 16 consecutively numbered, first-level S-NFTs
              from the same issue, the S-NFTs will automatically be synthesized
              into a second-level S-NFT. The S-NFT system follows the same logic
              until level 4 S-NFTs are synthesized from level 3 S-NFTs.
            </p>
          </div>
        </div>
        <div className={AboutSNFTApp_ls.AboutSNFTAppBox_bigbackg}>
          <p className={AboutSNFTApp_ls.AboutSNFTAppBox_bigbackg_title}>
            Get&nbsp;<span>S-NFTs</span>
          </p>
          <p className={AboutSNFTApp_ls.AboutSNFTAppBox_bigbackg_text}>
            Any ecosystem participant that stakes 700 ERBs on the chain can
            become eligible to receive S-NFT rewards.
          </p>
          <div
            className={AboutSNFTApp_ls.AboutSNFTAppBox_bigbackg_button}
            onClick={() => {
              window.open(
                'https://market-2.gitbook.io/get-s-nft-by-staking-erb-on-wormholeschain/',
              );
            }}
          >
            More
          </div>
        </div>
        <p className={AboutSNFTApp_ls.AboutSNFTAppBox_bigbackg_interest}>
          Right and interest
          <br /> nature of&nbsp;<span>S-NFT</span>
        </p>

        <div className={AboutSNFTApp_ls.TouchcarouselBox}>
          <Slider ref={inputElement} {...settings}>
            <div>
              <div className={AboutSNFTApp_ls.TouchcarouselBox_block}>
                <div className={AboutSNFTApp_ls.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/AboutSNFTApp/Slice 1022@2x.png')}
                  />
                  <p>
                    Trading rights and interests: S-NFTs, like ordinary NFTs,
                    have attributes and are freely tradable on primary and
                    secondary markets.
                  </p>
                </div>
                <div className={AboutSNFTApp_ls.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/AboutSNFTApp/Slice 1023@2x.png')}
                  />
                  <p>
                    Voting rights and interests: holders of S-NFTs can vote for
                    each S-NFT issue. The voter with the highest S-NFT voting
                    weight will be selected as the creator of the next issue of
                    S-NFTs and will receive 10% royalties on all S-NFT
                    transactions from that issue.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={AboutSNFTApp_ls.TouchcarouselBox_block}>
                <div className={AboutSNFTApp_ls.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/AboutSNFTApp/Slice 1024@2x.png')}
                  />
                  <p>
                    Content rights and interests: different levels of S-NFTs can
                    become tickets that allowed their owner to watch different
                    digital content. Content creators will upload their digital
                    work through the platform, with good content generating
                    strong asset appreciation and royalties for creators.
                  </p>
                </div>
                <div className={AboutSNFTApp_ls.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/AboutSNFTApp/Slice 1020@2x.png')}
                  />
                  <p>
                    Staking rights and interests: S-NFTs can be staked into a
                    decentralized exchange to get assets on the many
                    WormholesChain subchains.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={AboutSNFTApp_ls.TouchcarouselBox_block}>
                <div className={AboutSNFTApp_ls.TouchcarouselBox_block_d}>
                  <img
                    src={require('../../assets/images/AboutSNFTApp/Slice 1021@2x.png')}
                  />
                  <p>
                    Exchange rights and interests: exchange S-NFTs at differing
                    exchange rates depending on the level of the S-NFTs.
                    First-level S-NFTs can be exchanged for 0.095 ERBs,
                    second-level for 0.143, third-level for 0.271, and
                    fourth-level for 0.65 ERBs.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className={AboutSNFTApp_ls.dotBox}>
          {blockArr.map((item, index) => {
            return (
              <div
                className={AboutSNFTApp_ls.dot}
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
        {/* <div className={AboutSNFTApp_ls.AboutSNFTAppBox_turntableBox}>
          <div className={AboutSNFTApp_ls.AboutSNFTAppBox_turntable}>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_turntable_p1}>
              Trading rights and interests: S-NFTs, like ordinary NFTs, have
              attributes and are freely tradable on primary and secondary
              markets.
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_turntable_p2}>
              Voting rights and interests: holders of S-NFTs can vote for each
              S-NFT issue. The voter with the highest S-NFT voting weight will
              be selected as the creator of the next issue of S-NFTs and will
              receive 10% royalties on all S-NFT transactions from that issue.
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_turntable_p3}>
              Content rights and interests: different levels of S-NFTs can
              become tickets that allowed their owner to watch different digital
              content. Content creators will upload their digital work through
              the platform, with good content generating strong asset
              appreciation and royalties for creators.
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_turntable_p4}>
              Staking rights and interests: S-NFTs can be staked into a
              decentralized exchange to get assets on the many WormholesChain
              subchains.
            </p>
            <p className={AboutSNFTApp_ls.AboutSNFTAppBox_turntable_p5}>
              Exchange rights and interests: exchange S-NFTs at differing
              exchange rates depending on the level of the S-NFTs. First-level
              S-NFTs can be exchanged for 0.095 ERBs, second-level for 0.143,
              third-level for 0.271, and fourth-level for 0.65 ERBs.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
