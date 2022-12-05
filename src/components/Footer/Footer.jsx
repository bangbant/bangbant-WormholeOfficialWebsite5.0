import Footer_ls from './Footer.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
import { message, Modal, Checkbox, Tooltip } from 'antd';
import {
  CloseOutlined,
  ExclamationCircleFilled,
  CaretUpFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { subscriptionPost } from '../../api/request_data/block_request';
export default function Footer() {
  const [subscribecolor, setSubscribecolor] = useState('#3D3D3D');
  const [navigationcolor, setNavigationcolor] = useState('#1F1F1F');
  const [checkeddata, setCheckeddata] = useState(false);
  const [visible, setVisible] = useState(false);
  const [buttoncolor, setButtoncolor] = useState(1);
  const [ts, setTs] = useState(true);
  const [comdata, setComdata] = useState();
  const subscriptionPost_q = async (item) => {
    subscriptionPost(item);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setCheckeddata(e.target.checked);
  };
  function com(str) {
    let re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return re.test(str);
  }
  //订阅按钮
  function comclick() {
    let data = document.getElementById('combutton').value;
    if (com(data) == true) {
      setVisible(true);
      setComdata(data);
    } else {
      setVisible(false);
      message.error('Incorrect email format!');
    }
  }
  function CloseOutlinedclick() {
    setVisible(false);
  }
  function subscribe() {
    if (checkeddata == true) {
      setVisible(false);
      message.success('Subscription succeeded!');
      subscriptionPost_q(comdata);
    } else {
      setTs(true);
    }
  }
  //git跳转链接
  function githubwinopen() {
    window.open('https://github.com/wormholes-org');
  }
  //discord跳转
  function discordwinopen() {
    window.open('https://discord.gg/N4ksH6tqRX');
  }
  //twitter跳转
  function twitterwinopen() {
    window.open('https://twitter.com/WormholesChain');
  }
  //medium跳转
  function mediumwinopen() {
    window.open('https://medium.com/wormholeschain-network');
  }
  //Telegram
  function Telegram() {
    window.open('https://t.me/wormholes_chain');
  }
  //Youtube
  function Youtube() {
    window.open('https://www.youtube.com/channel/UCB3-3LhjxsZk-vm47qwydgg');
  }
  //ins
  function ins() {
    window.open('https://www.instagram.com/wormholeschain/');
  }
  return (
    <>
      <div className={Footer_ls.FooterBox}>
        <Modal
          centered
          visible={visible}
          footer={null}
          bodyStyle={{
            width: '594px',
            height: '513px',
            // border: '2px solid #FFB31F',
            backgroundColor: '#E8E8E8',
            // background:
            //   'linear-gradient(to bottom right, #26d0ff, #9f3ecb, #eaa641)',
            color: '#ffffff',
            borderRadius: '20px',
            // marginLeft: '-200px',
          }}
        >
          <div className={Footer_ls.FooterBox_model_BOX}>
            <p
              className={Footer_ls.FooterBox_model_p1}
              onClick={CloseOutlinedclick}
            >
              <CloseOutlined />
            </p>
            <p className={Footer_ls.FooterBox_model_p2}>
              <ExclamationCircleFilled />
            </p>
            <p className={Footer_ls.FooterBox_model_p3}>
              By subscribing to this mailing list, you are opting in to
              receiving email updates from Chevening. You can opt out at any
              time. We process your personal data in line with our 
              <span>privacy policy</span>
            </p>
            <p className={Footer_ls.FooterBox_model_p4}>
              <Checkbox onChange={onChange}>I agree to be emailed*</Checkbox>
              {!checkeddata ? (
                <div className={Footer_ls.FooterBox_model_p4_d}>
                  <div className={Footer_ls.FooterBox_model_p4_d_data}>
                    <CaretUpFilled
                      className={Footer_ls.FooterBox_model_p4_d_dataicon}
                    />
                    <ExclamationCircleOutlined
                      className={Footer_ls.FooterBox_model_p4_d_dataicon2}
                    />
                    <span className={Footer_ls.FooterBox_model_p4_d_data_p}>
                      Check if you want to continue！
                    </span>
                  </div>
                </div>
              ) : (
                ''
              )}
            </p>
            {!checkeddata ? (
              <div
                className={Footer_ls.FooterBox_model_button}
                onClick={subscribe}
              >
                SUBSCRIBE
              </div>
            ) : (
              <div
                className={Footer_ls.FooterBox_model_button2}
                onClick={subscribe}
              >
                SUBSCRIBE
              </div>
            )}
          </div>
        </Modal>
        <div className={Footer_ls.FooterBox_center}>
          <div className={Footer_ls.FooterBox_inputiconbox}>
            <div className={Footer_ls.FooterBox_inputbox}>
              <input
                className={Footer_ls.FooterBox_input}
                placeholder="Enter Email"
                id="combutton"
                autocomplete="off"
              />
              <div className={Footer_ls.FooterBox_button} onClick={comclick}>
                <div className={Footer_ls.FooterBox_buttontext}>SUBSCRIBE</div>
              </div>
            </div>
            <div className={Footer_ls.FooterBox_iconbox}>
              <div
                onClick={githubwinopen}
                className={Footer_ls.FooterBox_iconbox_icon1}
              ></div>
              <div
                onClick={discordwinopen}
                className={Footer_ls.FooterBox_iconbox_icon2}
              ></div>
              <div
                onClick={twitterwinopen}
                className={Footer_ls.FooterBox_iconbox_icon3}
              ></div>
              <div
                onClick={Telegram}
                className={Footer_ls.FooterBox_iconbox_icon4}
              ></div>
              <div
                onClick={mediumwinopen}
                className={Footer_ls.FooterBox_iconbox_icon5}
              ></div>
              <div
                onClick={ins}
                className={Footer_ls.FooterBox_iconbox_icon6}
              ></div>
              <div
                onClick={Youtube}
                className={Footer_ls.FooterBox_iconbox_icon7}
              ></div>
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
              <span
                className={Footer_ls.FooterBox_databoxLink}
                onClick={() => {
                  window.open('https://www.wormholes.com/docs/Architecture/');
                }}
              >
                Architecture
              </span>
              {/* <span className={Footer_ls.FooterBox_databoxLink}>
                Subchain System
              </span> */}
              <Link
                to={{ pathname: '/Join', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Join WormholesChain
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
                to={{ pathname: '/DRE', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                DRE Consensus
              </Link>
              <Link
                to={{ pathname: '/Wallet', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Test Wallet
              </Link>
              <span
                className={Footer_ls.FooterBox_databoxLink}
                onClick={() => {
                  window.open('https://www.wormholesscan.com/#/');
                }}
              >
                Test Explorer
              </span>
            </div>
            <div>
              <p>Ecosystem</p>
              <Link
                to={{ pathname: '/Ecosystem', state: '' }}
                className={Footer_ls.FooterBox_databoxLink}
              >
                Ecosystem Economy
              </Link>
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
