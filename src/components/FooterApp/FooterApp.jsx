import FooterApp_ls from './FooterApp.less';
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
export default function FooterApp() {
  const [visible, setVisible] = useState(false);
  const [checkeddata, setCheckeddata] = useState(false);
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
  function changeReactInputValue(inputDom, newText) {
    let lastValue = inputDom.value;
    inputDom.value = newText;
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = inputDom._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    inputDom.dispatchEvent(event);
  }
  //订阅按钮
  function comclick() {
    let data = document.getElementById('combutton').value;
    if (com(data) == true) {
      setVisible(true);
      setComdata(data);
      localStorage.setItem('WormholesChainEmail', data);
    } else {
      setVisible(false);
      message.error('Incorrect email format!');
    }
    let inputdata = document.getElementById('combutton');
    changeReactInputValue(inputdata, '');
  }
  function CloseOutlinedclick() {
    setVisible(false);
  }
  function subscribe() {
    if (checkeddata == true) {
      setVisible(false);
      message.success('Subscription succeeded!');
      subscriptionPost_q(localStorage.getItem('WormholesChainEmail'));
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
      <div className={FooterApp_ls.FooterAppBox} id="app">
        <Modal
          centered
          visible={visible}
          footer={null}
          bodyStyle={{
            width: '297px',
            height: '256px',
            // border: '2px solid #FFB31F',
            backgroundColor: '#E8E8E8',
            // backgroundColor: 'red',
            // background:
            //   'linear-gradient(to bottom right, #26d0ff, #9f3ecb, #eaa641)',
            color: '#ffffff',
            borderRadius: '20px',
            margin: 'auto',
          }}
        >
          <div className={FooterApp_ls.FooterBox_model_BOX}>
            <p
              className={FooterApp_ls.FooterBox_model_p1}
              onClick={CloseOutlinedclick}
            >
              <CloseOutlined />
            </p>
            <p className={FooterApp_ls.FooterBox_model_p2}>
              <ExclamationCircleFilled />
            </p>
            <p className={FooterApp_ls.FooterBox_model_p3}>
              By subscribing to this mailing list, you are opting in to
              receiving email updates from Chevening. You can opt out at any
              time. We process your personal data in line with our 
              <span
                onClick={() => {
                  history.push('/PrivacyPolicyApp');
                }}
              >
                privacy policy
              </span>
            </p>
            <p className={FooterApp_ls.FooterBox_model_p4}>
              <Checkbox onChange={onChange}>I agree to be emailed*</Checkbox>
              {!checkeddata ? (
                <div className={FooterApp_ls.FooterBox_model_p4_d}>
                  <div className={FooterApp_ls.FooterBox_model_p4_d_data}>
                    <CaretUpFilled
                      className={FooterApp_ls.FooterBox_model_p4_d_dataicon}
                    />
                    <ExclamationCircleOutlined
                      className={FooterApp_ls.FooterBox_model_p4_d_dataicon2}
                    />
                    <span className={FooterApp_ls.FooterBox_model_p4_d_data_p}>
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
                className={FooterApp_ls.FooterBox_model_button}
                onClick={subscribe}
              >
                SUBSCRIBE
              </div>
            ) : (
              <div
                className={FooterApp_ls.FooterBox_model_button2}
                onClick={subscribe}
              >
                SUBSCRIBE
              </div>
            )}
          </div>
        </Modal>
        <div className={FooterApp_ls.FooterAppBox_center}>
          {/* 订阅 */}
          <div className={FooterApp_ls.FooterBox_inputbox}>
            <input
              className={FooterApp_ls.FooterBox_input}
              placeholder="Enter Email"
              id="combutton"
              autocomplete="off"
            />
            <div className={FooterApp_ls.FooterBox_button} onClick={comclick}>
              <div className={FooterApp_ls.FooterBox_buttontext}>SUBSCRIBE</div>
            </div>
          </div>
          {/* icon */}
          <div className={FooterApp_ls.FooterAppBox_iconbox}>
            <img
              onClick={githubwinopen}
              src={require('../../assets/images/FooterApp/Group 712@2x.png')}
            />
            <img
              onClick={discordwinopen}
              src={require('../../assets/images/FooterApp/Group 709@2x.png')}
            />
            <img
              onClick={twitterwinopen}
              src={require('../../assets/images/FooterApp/Group 710@2x.png')}
            />
            <img
              onClick={Telegram}
              src={require('../../assets/images/FooterApp/Slice 583@2x.png')}
            />
            <img
              onClick={mediumwinopen}
              src={require('../../assets/images/FooterApp/Group 711@2x.png')}
            />
            <img
              onClick={ins}
              src={require('../../assets/images/FooterApp/Frame@2x.png')}
            />
            <img
              onClick={Youtube}
              src={require('../../assets/images/FooterApp/Frame@2xbs.png')}
            />
          </div>
          {/* 导航 */}
          <div className={FooterApp_ls.FooterAppBox_Navigationbox}>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Basic</p>
              <Link
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
                to={{ pathname: '/WormholesOverviewApp', state: '' }}
              >
                Overview
              </Link>
              <span
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
                onClick={() => {
                  window.open('https://www.wormholes.com/docs/Architecture/');
                }}
              >
                Architecture
              </span>
              {/* <span
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Subchain System
              </span> */}
              <Link
                to={{ pathname: '/PrivacyPolicyApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Privacy Policy
              </Link>
              <Link
                to={{ pathname: '/JoinApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Join Wormholes
              </Link>
            </div>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Technology</p>
              <Link
                to={{ pathname: '/AboutWormholesApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Multi-Dimensional Chain
              </Link>
              <Link
                to={{ pathname: '/DREApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                DRE Consensus
              </Link>
              <Link
                to={{ pathname: '/WalletApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Test Wallet
              </Link>
              <span
                onClick={() => {
                  window.open('https://www.wormholesscan.com/#/');
                }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Test Explorer
              </span>
            </div>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Ecosystem</p>
              <Link
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
                to={{ pathname: '/EcosystemApp', state: '' }}
              >
                Ecosystem Economy
              </Link>
              <Link
                to={{ pathname: '/AboutERBApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
              >
                Mainnet Native ERB
              </Link>
              <Link
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
                to={{ pathname: '/AboutSNFTApp', state: '' }}
              >
                Mainnet Native S-NFT
              </Link>
            </div>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Dapps</p>
              <Link
                to={{ pathname: '/DappsApp', state: '' }}
                className={FooterApp_ls.FooterAppBox_Navigationbox_block_span}
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
