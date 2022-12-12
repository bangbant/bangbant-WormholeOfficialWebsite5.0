import HeaderApp_ls from './HeaderApp.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
import {
  UnorderedListOutlined,
  CloseOutlined,
  DownOutlined,
} from '@ant-design/icons';
import PubSub from 'pubsub-js';
export default function HeaderApp(props) {
  const [icondata, setIcondata] = useState(0);
  const [basic, setBasic] = useState(0);
  const [technology, setTechnology] = useState(0);
  const [ecosystem, setEcosystem] = useState(0);
  const [dapps, setDapps] = useState(0);
  const [basicicon, setBasicicon] = useState(0);
  const [technologyicon, setTechnologyicon] = useState(0);
  const [ecosystemicon, setEcosystemicon] = useState(0);
  const [dappsicon, setDappsicon] = useState(0);
  useEffect(() => {
    setIcondata(0);
  }, [props.props.location.pathname]);
  useEffect(() => {
    PubSub.subscribe('NavigationStowdata', (msg, index) => {
      setIcondata(index);
    });
  }, []);
  function iconclick(data) {
    setIcondata(data);
  }
  function smiconclick(data) {
    if (data == 0) {
      if (basicicon == 0) {
        setBasicicon(1);
        setTechnologyicon(0);
        setEcosystemicon(0);
        setDappsicon(0);
      } else {
        setBasicicon(0);
      }
    } else if (data == 1) {
      if (technologyicon == 0) {
        setBasicicon(0);
        setTechnologyicon(1);
        setEcosystemicon(0);
        setDappsicon(0);
      } else {
        setTechnologyicon(0);
      }
    } else if (data == 2) {
      if (ecosystemicon == 0) {
        setBasicicon(0);
        setTechnologyicon(0);
        setEcosystemicon(1);
        setDappsicon(0);
      } else {
        setEcosystemicon(0);
      }
    } else if (data == 3) {
      if (dappsicon == 0) {
        setBasicicon(0);
        setTechnologyicon(0);
        setEcosystemicon(0);
        setDappsicon(1);
      } else {
        setDappsicon(0);
      }
    }
  }
  return (
    <>
      <div className={HeaderApp_ls.HeaderAppBox}>
        <div
          className={HeaderApp_ls.HeaderAppBox_Notice}
          style={{ height: icondata == 0 ? '28px' : '0px' }}
        >
          <img
            src={require('../../assets/images/HeaderApp/Slice 817@2x.png')}
          />
          <a className={HeaderApp_ls.HeaderAppBox_Notice_a} href="/#eventApp">
            Meteorite Effect Event NO.1
          </a>
        </div>
        <div className={HeaderApp_ls.HeaderAppBox_Navigation}>
          <div className={HeaderApp_ls.HeaderAppBox_Navigation_center}>
            <Link
              className={HeaderApp_ls.HeaderAppBox_Navigation_left}
              to={{ pathname: '/', state: '' }}
            >
              <img
                src={require('../../assets/images/HeaderApp/Frame@2x.png')}
              />
              <span>WormholesChain</span>
            </Link>
            {icondata == 0 ? (
              <span
                className={HeaderApp_ls.HeaderAppBox_Navigation_right}
                onClick={iconclick.bind(this, 1)}
              >
                <UnorderedListOutlined />
              </span>
            ) : (
              <span
                className={HeaderApp_ls.HeaderAppBox_Navigation_right}
                onClick={iconclick.bind(this, 0)}
              >
                <CloseOutlined />
              </span>
            )}
          </div>
        </div>
        {/* 下拉菜单 */}
        <div
          className={HeaderApp_ls.HeaderAppBox_dropdown}
          style={{ marginTop: icondata == 0 ? '-406px' : '0px' }}
        >
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={() => {
              window.open('https://www.wormholes.com/docs/economic/');
            }}
          >
            <p>Economics</p>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={() => {
              window.open('https://www.wormholes.com/docs/#/');
            }}
          >
            <p>Docs</p>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={() => {
              window.open('https://www.wormholes.com/docs/interface/');
            }}
          >
            <p>Interfaces</p>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={smiconclick.bind(this, 0)}
          >
            <p>Basic</p>
            <span
              style={{
                transform: basicicon == 0 ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
            >
              <DownOutlined />
            </span>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox}
            style={{
              height: basicicon == 0 || icondata == 0 ? '0px' : '188px',
            }}
          >
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/WormholesOverviewApp', state: '' }}
            >
              Overview
            </Link>
            <div
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              onClick={() => {
                window.open('https://www.wormholes.com/docs/Architecture/');
              }}
            >
              Architecture
            </div>
            {/* <div className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}>
              Subchain System
            </div> */}
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/PrivacyPolicyApp', state: '' }}
            >
              Privacy Policy
            </Link>
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/JoinApp', state: '' }}
            >
              Join WormholesChain
            </Link>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={smiconclick.bind(this, 1)}
          >
            <p>Technology</p>
            <span
              style={{
                transform:
                  technologyicon == 0 ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
            >
              <DownOutlined />
            </span>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox}
            style={{
              height: technologyicon == 0 || icondata == 0 ? '0px' : '188px',
            }}
          >
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/AboutWormholesApp', state: '' }}
            >
              Multi-Dimensional Chain
            </Link>
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/DREApp', state: '' }}
            >
              DRE Consensus
            </Link>
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/WalletApp', state: '' }}
            >
              Test Wallet
            </Link>
            <div
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              onClick={() => {
                window.open('https://www.wormholesscan.com/#/');
              }}
            >
              Test Explorer
            </div>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={smiconclick.bind(this, 2)}
          >
            <p>Ecosystem</p>
            <span
              style={{
                transform:
                  ecosystemicon == 0 ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
            >
              <DownOutlined />
            </span>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox}
            style={{
              height: ecosystemicon == 0 || icondata == 0 ? '0px' : '141px',
            }}
          >
            <Link
              to={{ pathname: '/EcosystemApp', state: '' }}
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
            >
              Ecosystem Economy
            </Link>
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/AboutERBApp', state: '' }}
            >
              Mainnet Native ERB
            </Link>
            <Link
              to={{ pathname: '/AboutSNFTApp', state: '' }}
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
            >
              Mainnet Native S-NFT
            </Link>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block}
            onClick={smiconclick.bind(this, 3)}
          >
            <p>Dapps</p>
            <span
              style={{
                transform: dappsicon == 0 ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
            >
              <DownOutlined />
            </span>
          </div>
          <div
            className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox}
            style={{ height: dappsicon == 0 || icondata == 0 ? '0px' : '47px' }}
          >
            <Link
              className={HeaderApp_ls.HeaderAppBox_dropdown_block_sbox_d}
              to={{ pathname: '/DappsApp', state: '' }}
            >
              Meteorite Exchange
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
