import HeaderApp_ls from './HeaderApp.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
import { UnorderedListOutlined, CloseOutlined } from '@ant-design/icons';
export default function HeaderApp() {
  return (
    <>
      <div className={HeaderApp_ls.HeaderAppBox}>
        <div className={HeaderApp_ls.HeaderAppBox_Notice}>
          <img
            src={require('../../assets/images/HeaderApp/Slice 817@2x.png')}
          />
          <span>Meteorite Effect Event NO.1</span>
        </div>
        <div className={HeaderApp_ls.HeaderAppBox_Navigation}>
          <div className={HeaderApp_ls.HeaderAppBox_Navigation_center}>
            <div className={HeaderApp_ls.HeaderAppBox_Navigation_left}>
              <img
                src={require('../../assets/images/HeaderApp/Frame@2x.png')}
              />
              <span>WormholesChain</span>
            </div>
            {}
            <span className={HeaderApp_ls.HeaderAppBox_Navigation_right}>
              <UnorderedListOutlined />
            </span>
            <span className={HeaderApp_ls.HeaderAppBox_Navigation_right}>
              <CloseOutlined />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
