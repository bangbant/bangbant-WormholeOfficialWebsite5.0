import Footer_ls from './Footer.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
export default function Footer() {
  return (
    <>
      <div className={Footer_ls.FooterBox}>
        <div className={Footer_ls.FooterBox_center}>
          <div className={Footer_ls.FooterBox_inputiconbox}>
            <div className={Footer_ls.FooterBox_inputbox}>
              <input
                className={Footer_ls.FooterBox_input}
                placeholder="Enter Emall"
                id="combutton"
              />
              <div className={Footer_ls.FooterBox_button}>
                <div className={Footer_ls.FooterBox_buttontext}>SUBSCRIBE</div>
              </div>
            </div>
            <div className={Footer_ls.FooterBox_iconbox}>
              <div className={Footer_ls.FooterBox_iconbox_icon1}></div>
              <div className={Footer_ls.FooterBox_iconbox_icon2}></div>
              <div className={Footer_ls.FooterBox_iconbox_icon3}></div>
              <div className={Footer_ls.FooterBox_iconbox_icon4}></div>
              <div className={Footer_ls.FooterBox_iconbox_icon5}></div>
              <div className={Footer_ls.FooterBox_iconbox_icon6}></div>
              <div className={Footer_ls.FooterBox_iconbox_icon7}></div>
            </div>
          </div>
          {/* 橫綫 */}
          <div className={Footer_ls.FooterBox_line}></div>
          <div className={Footer_ls.FooterBox_databox}>
            <div>
              <p>Basic</p>
              <Link
                className={Footer_ls.FooterBox_databoxLink}
                to={{ pathname: '/WormholesOverview', state: '' }}
              >
                Overview
              </Link>
              <span className={Footer_ls.FooterBox_databoxLink}>
                Architecture
              </span>
              <span className={Footer_ls.FooterBox_databoxLink}>
                Subchain System
              </span>
              <Link
                to={{ pathname: '/Join', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Join Wormholes
              </Link>
            </div>
            <div>
              <p>Technology</p>
              <Link
                to={{ pathname: '/AboutWormholes', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Multi-Dimensional Chain
              </Link>
              <Link
                to={{ pathname: '/Wallet', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Test Wallet
              </Link>
              <span className={Footer_ls.FooterBox_databoxLink}>
                Test Explorer
              </span>
            </div>
            <div>
              <p>Ecosystem</p>
              <span className={Footer_ls.FooterBox_databoxLink}>
                Ecosystem Economy
              </span>
              <Link
                to={{ pathname: '/AboutERB', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Mainnet Native ERB
              </Link>
              <Link
                to={{ pathname: '/AboutSNFT', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Mainnet Native S-NFT
              </Link>
            </div>
            <div>
              <p>Dapps</p>
              <Link
                to={{ pathname: '/Dapps', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Meteorite Exchange
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
