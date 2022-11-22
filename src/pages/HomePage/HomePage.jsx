import HomePage_ls from './HomePage.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
export default function HomePage() {
  const [vidoe, setVidoe] = useState(1);
  function vidoeclick(data) {
    setVidoe(data);
  }
  return (
    <div className={HomePage_ls.HomePage}>
      <div className={HomePage_ls.HomePageBox}>
        <div className={HomePage_ls.HomePageBox_center}>
          <p>The First Truly Decentralized POS</p>
          <p>
            <span>Multi-Dimensional</span>
            Chain in
            <span>Web3</span>.
          </p>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox_Featuresbox}>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div1}>
          Features and Innovations
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div2}>
          {/* 圆 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div3}>
          <div></div>
          <p>
            One-click coupling generates clone sub-chains, and multiple
            sub-chain systems combined with the SWAP interaction scheme to
            complete the cross-chain interaction of different crypto assets.
          </p>
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div4}>
          {/* 线 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div5}>
          <div></div>
          <p>
            Innovative native mainnet fragment S-NFT and high-performance
            decentralized infrastructure around NFT full-stack solutions.
          </p>
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div6}>
          {/* 圆 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div7}>
          {/* 紫色图片 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_divviodebox}>
          <div className={HomePage_ls.HomePageBox_Featuresbox_divviode}></div>
          <div className={HomePage_ls.HomePageBox_Featuresbox_divbuttonbox}>
            {vidoe == 0 ? (
              <div
                className={
                  HomePage_ls.HomePageBox_Featuresbox_divbuttonbox_top1
                }
                onClick={vidoeclick.bind(this, 1)}
              >
                <p>Mandatory reading for Validator</p>
              </div>
            ) : (
              <div
                className={
                  HomePage_ls.HomePageBox_Featuresbox_divbuttonbox_top2
                }
                onClick={vidoeclick.bind(this, 0)}
              >
                <p>Mandatory reading for Validator</p>
              </div>
            )}
            {vidoe == 1 ? (
              <div
                className={
                  HomePage_ls.HomePageBox_Featuresbox_divbuttonbox_top1
                }
                onClick={vidoeclick.bind(this, 0)}
              >
                <p>Become a Wormholes Validator</p>
              </div>
            ) : (
              <div
                className={
                  HomePage_ls.HomePageBox_Featuresbox_divbuttonbox_top2
                }
                onClick={vidoeclick.bind(this, 1)}
              >
                <p>Become a Wormholes Validator</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox2}>
        <div className={HomePage_ls.HomePageBox2_center}>
          <p className={HomePage_ls.HomePageBox2_title}>
            As the<span>S - NFT</span> Miner
          </p>
        </div>
      </div>
    </div>
  );
}
