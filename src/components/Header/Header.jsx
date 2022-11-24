import Header_ls from './Header.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
export default function Header() {
  //Basic
  const [basicopacity, setBasicopacity] = useState('none');
  //Technology
  const [technologyopacity, setTechnologyopacity] = useState('none');
  //Economy
  const [economyopacity, setEconomyopacity] = useState('none');
  //Dapps
  const [dappsopacity, setDappsopacity] = useState('none');
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

  return (
    <div className={Header_ls.Header}>
      <div className={Header_ls.HeaderBox}>
        <img src={require('../../assets/images/Header/Slice 817.png')} />
        <span>Mirror universe public testnet No.2</span>
      </div>
      <div className={Header_ls.HeaderBox2}>
        <div className={Header_ls.HeaderBox2_center}>
          <span>Economic</span>
          <span>Docs</span>
          <span>Interfaces</span>
          <img src={require('../../assets/images/Header/Slice 908.png')} />
          <img src={require('../../assets/images/Header/Slice 909.png')} />
          <img src={require('../../assets/images/Header/Slice 910.png')} />
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
                style={{ display: basicopacity }}
                onMouseOut={navigationOut.bind(this, 1)}
                onMouseOver={navigationOver.bind(this, 1)}
              >
                <Link
                  to={{ pathname: '/WormholesOverview', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Overview
                </Link>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Architecture
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Subchain System
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Join Wormholes
                </span>
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
                style={{ display: technologyopacity, width: '198px' }}
                onMouseOut={navigationOut.bind(this, 2)}
                onMouseOver={navigationOver.bind(this, 2)}
              >
                <Link
                  to={{ pathname: '/AboutWormholes', state: '' }}
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                >
                  Multi-Dimensional Chain
                </Link>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Test Wallet
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
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
                style={{ display: economyopacity, width: '220px' }}
                onMouseOut={navigationOut.bind(this, 3)}
                onMouseOver={navigationOver.bind(this, 3)}
              >
                <Link
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                  to={{ pathname: '/Ecosystem', state: '' }}
                >
                  Ecosystem Economy
                </Link>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Mainnet Native ERB
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Mainnet Native S-NFT
                </span>
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
                style={{ display: dappsopacity }}
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
