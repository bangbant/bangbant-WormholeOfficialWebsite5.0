import HeaderApp_ls from './HeaderApp.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
import { UnorderedListOutlined, CloseOutlined } from '@ant-design/icons';
export default function HeaderApp() {
  const [icondata, setIcondata] = useState(0);
  function iconclick(data) {
    setIcondata(data);
  }
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
      </div>
    </>
  );
}
