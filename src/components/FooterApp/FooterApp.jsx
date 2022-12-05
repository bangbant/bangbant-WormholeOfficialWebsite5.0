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
              <span>privacy policy</span>
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
              src={require('../../assets/images/FooterApp/Group 712@2x.png')}
            />
            <img
              src={require('../../assets/images/FooterApp/Group 709@2x.png')}
            />
            <img
              src={require('../../assets/images/FooterApp/Group 710@2x.png')}
            />
            <img
              src={require('../../assets/images/FooterApp/Slice 583@2x.png')}
            />
            <img
              src={require('../../assets/images/FooterApp/Group 711@2x.png')}
            />
            <img src={require('../../assets/images/FooterApp/Frame@2x.png')} />
            <img
              src={require('../../assets/images/FooterApp/Frame@2xbs.png')}
            />
          </div>
          {/* 导航 */}
          <div className={FooterApp_ls.FooterAppBox_Navigationbox}>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Basic</p>
              <span>Overview</span>
              <span>Architecture</span>
              <span>Subchain System</span>
              <span>Join WormholesChain</span>
            </div>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Technology</p>
              <span>Multi-Dimensional Chain</span>
              <span>DRE Consensus</span>
              <span>Test Wallet</span>
              <span>Test Explorer</span>
            </div>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Ecosystem</p>
              <span>Ecosystem Economy</span>
              <span>Mainnet Native ERB</span>
              <span>Mainnet Native S-NFT</span>
            </div>
            <div className={FooterApp_ls.FooterAppBox_Navigationbox_block}>
              <p>Dapps</p>
              <span>Meteorite Exchange</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
