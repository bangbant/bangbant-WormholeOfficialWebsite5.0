import Header_ls from './Header.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
export default function Header() {
  //Basic
  const [basicopacity, setBasicopacity] = useState(0);
  //Technology
  const [technologyopacity, setTechnologyopacity] = useState(0);
  //Economy
  const [economyopacity, setEconomyopacity] = useState(0);
  //Dapps
  const [dappsopacity, setDappsopacity] = useState(0);
  function navigationOver(data) {
    if (data == 1) {
      setBasicopacity(1);
    } else if (data == 2) {
      setTechnologyopacity(1);
    } else if (data == 3) {
      setEconomyopacity(1);
    } else if (data == 4) {
      setDappsopacity(1);
    }
  }
  function navigationOut(data) {
    if (data == 1) {
      setBasicopacity(0);
    } else if (data == 2) {
      setTechnologyopacity(0);
    } else if (data == 3) {
      setEconomyopacity(0);
    } else if (data == 4) {
      setDappsopacity(0);
    }
  }

  return (
    <>
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
            <span
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 1)}
              onMouseOver={navigationOver.bind(this, 1)}
            >
              Basic
              <span
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{ opacity: basicopacity }}
              >
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Overview
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Architecture
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Sub Chain System
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Join Wormholes
                </span>
              </span>
            </span>
            <span
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 2)}
              onMouseOver={navigationOver.bind(this, 2)}
            >
              Technology
              <span
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{ opacity: technologyopacity, width: '198px' }}
              >
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Multi Dimensional Chain
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Wormholes Test Wallet
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Wormholes Test Explor
                </span>
              </span>
            </span>
            <span
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 3)}
              onMouseOver={navigationOver.bind(this, 3)}
            >
              Economy
              <span
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{ opacity: economyopacity, width: '220px' }}
              >
                <Link
                  className={Header_ls.HeaderBox3_right_spanblock_link}
                  to={{ pathname: '/Ecosystem', state: '' }}
                >
                  Ecological Economy
                </Link>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Primary Network Native ERB
                </span>
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Primary Fragment S-NFT
                </span>
              </span>
            </span>
            <span
              className={Header_ls.HeaderBox3_right_span}
              onMouseOut={navigationOut.bind(this, 4)}
              onMouseOver={navigationOver.bind(this, 4)}
            >
              Dapps
              <span
                className={Header_ls.HeaderBox3_right_spanblock}
                style={{ opacity: dappsopacity }}
              >
                <span className={Header_ls.HeaderBox3_right_spanblock_link}>
                  Meteorite Exchange
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
