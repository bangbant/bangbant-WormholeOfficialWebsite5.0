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
              <span>Overview</span>
              <span>Architecture</span>
              <span>Sub Chain System</span>
              <span>Join Wormholes</span>
            </div>
            <div>
              <p>Technology</p>
              <span>Multi Dimensional Chain</span>
              <span>Wormholes Test Wallet</span>
              <span>Wormholes Test Explor</span>
            </div>
            <div>
              <p>Economy</p>
              <span>Ecological Economy</span>
              <span>Primary Network Native ERB</span>
              <span>Primary Fragment S-NFT</span>
            </div>
            <div>
              <p>Dapps</p>
              <span>Meteorite Exchange</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
