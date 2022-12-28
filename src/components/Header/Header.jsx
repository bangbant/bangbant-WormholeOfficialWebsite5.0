import Header_ls from './Header.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
import { message } from 'antd';
export default function Header() {
  //Basic
  const [basicopacity, setBasicopacity] = useState('none');
  //Technology
  const [technologyopacity, setTechnologyopacity] = useState('none');
  //Economy
  const [economyopacity, setEconomyopacity] = useState('none');
  //Dapps
  const [dappsopacity, setDappsopacity] = useState('none');
  const [messageApi, contextHolder] = message.useMessage();
  function comingsoon() {
    messageApi.open({
      type: 'warning',
      content: 'Coming Soon !',
      icon: (
        <img
          style={{ width: '20px', height: '20px', margin: '-5px 20px 0 0' }}
          src={require('../../assets/images/Header/gantanhao.png')}
        />
      ),
    });
  }
  message.config({
    maxCount: 1,
  });
  function navigationOver(data) {
    if (data == 1) {
      setBasicopacity('block');
    } else if (data == 2) {
      setTechnologyopacity('block');
    } else if (data == 3) {
      setEconomyopacity('block');
    } else if (data == 4) {
      setDappsopacity('block');
    }
  }
  function navigationOut(data) {
    if (data == 1) {
      setBasicopacity('none');
    } else if (data == 2) {
      setTechnologyopacity('none');
    } else if (data == 3) {
      setEconomyopacity('none');
    } else if (data == 4) {
      setDappsopacity('none');
    }
  }
  //git跳转链接
  function githubwinopen() {
    window.open('https://github.com/wormholes-org');
  }
  //twitter跳转
  function twitterwinopen() {
    window.open('https://twitter.com/WormholesChain');
  }
  //medium跳转
  function mediumwinopen() {
    window.open('https://medium.com/wormholeschain-network');
  }
  return (
    <div className={Header_ls.Header}>
      {contextHolder}
      <div className={Header_ls.HeaderBox}>
        <img src={require('../../assets/images/Header/Slice 817.png')} />
        <a href="/#event">Meteorite Effect Event NO.1</a>
      </div>
      <div className={Header_ls.HeaderBox2}>
        <div className={Header_ls.HeaderBox2_center}>
          <span
            onClick={() => {
              window.open('https://www.wormholes.com/docs/economic/');
            }}
          >
            Economics
          </span>
          <span
            onClick={() => {
              window.open('https://www.wormholes.com/docs/#/');
            }}
          >
            Docs
          </span>
          <span
            onClick={() => {
              window.open('https://www.wormholes.com/docs/interface/');
            }}
          >
            Interfaces
          </span>
          <div
            onClick={githubwinopen}
            className={Header_ls.HeaderBox2_center_img1}
          ></div>
          <div
            onClick={twitterwinopen}
            className={Header_ls.HeaderBox2_center_img2}
          ></div>
          <div
            onClick={mediumwinopen}
            className={Header_ls.HeaderBox2_center_img3}
          ></div>
          {/* <img src={require('../../assets/images/Header/Slice 908.png')} />
          <img src={require('../../assets/images/Header/Slice 909.png')} />
          <img src={require('../../assets/images/Header/Slice 910.png')} /> */}
        </div>
      </div>
      <div className={Header_ls.HeaderBox3}>
        <div className={Header_ls.HeaderBox3_center}>
          <Link
            to={{ pathname: '/', state: '' }}
            className={Header_ls.HeaderBox3_left}
          >
            <img src={require('../../assets/images/Header/Frame.png')} />
            <span>Wormholes</span>
          </Link>
          <div className={Header_ls.HeaderBox3_right}>
            <div
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 1)}
              onMouseOver={navigationOver.bind(this, 1)}
            >
              Basic
              <div
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{ display: basicopacity, width: '220px' }}
                onMouseOut={navigationOut.bind(this, 1)}
                onMouseOver={navigationOver.bind(this, 1)}
              >
                <Link
                  to={{ pathname: '/WormholesOverview', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Overview
                </Link>
                <span
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                  onClick={() => {
                    window.open('https://www.wormholes.com/docs/Architecture/');
                  }}
                >
                  Architecture
                </span>
                <Link
                  to={{ pathname: '/PrivacyPolicy', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Privacy Policy
                </Link>
                {/* <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Subchain System
                </span> */}
                <Link
                  to={{ pathname: '/Join', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Join Wormholes
                </Link>
              </div>
            </div>
            <div
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 2)}
              onMouseOver={navigationOver.bind(this, 2)}
            >
              Technology
              <div
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{ display: technologyopacity, width: '220px' }}
                onMouseOut={navigationOut.bind(this, 2)}
                onMouseOver={navigationOver.bind(this, 2)}
              >
                <Link
                  to={{ pathname: '/AboutWormholes', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Multi-Dimensional Chain
                </Link>
                <Link
                  to={{ pathname: '/DRE', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  DRE Consensus
                </Link>
                <Link
                  to={{ pathname: '/Wallet', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Test Wallet
                </Link>
                <span
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                  onClick={() => {
                    window.open('https://www.wormholesscan.com/#/');
                  }}
                >
                  Test Explorer
                </span>
              </div>
            </div>
            <div
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 3)}
              onMouseOver={navigationOver.bind(this, 3)}
            >
              Ecosystem
              <div
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{
                  display: economyopacity,
                  width: '220px',
                  left: '-10px',
                }}
                onMouseOut={navigationOut.bind(this, 3)}
                onMouseOver={navigationOver.bind(this, 3)}
              >
                <Link
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                  to={{ pathname: '/Ecosystem', state: '' }}
                >
                  Ecosystem Economy
                </Link>
                <Link
                  to={{ pathname: '/AboutERB', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Mainnet Native ERB
                </Link>
                <Link
                  to={{ pathname: '/AboutSNFT', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Mainnet Native S-NFT
                </Link>
              </div>
            </div>
            <div
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 4)}
              onMouseOver={navigationOver.bind(this, 4)}
            >
              Dapps
              <div
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{
                  display: dappsopacity,
                  left: '-130px',
                  width: '200px',
                }}
                onMouseOut={navigationOut.bind(this, 4)}
                onMouseOver={navigationOver.bind(this, 4)}
              >
                <Link
                  to={{ pathname: '/Dapps', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Meteorite Exchange
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
