import Notification_ls from './Notification.less';
import { CloseOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
export default function Notification() {
  const [blocktop, setBlocktop] = useState('-320px');
  useEffect(() => {
    let timebs = String(new Date().getTime());
    timebs = timebs.slice(0, 10);
    if (
      Number(timebs) > Number(localStorage.getItem('WormholesChainstorageTime'))
    ) {
      setBlocktop('20px');
    }
  }, []);
  function close() {
    let time = String(new Date().getTime());
    time = time.slice(0, 10);
    time = String(Number(time) + 259200);
    localStorage.setItem('WormholesChainstorageTime', time);
    setBlocktop('-320px');
  }
  function PrivacyPolicy() {
    let time = String(new Date().getTime());
    time = time.slice(0, 10);
    time = String(Number(time) + 25920000000);
    localStorage.setItem('WormholesChainstorageTime', time);
    setBlocktop('-320px');
  }
  return (
    <>
      <div
        className={Notification_ls.NotificationBox}
        style={{ bottom: blocktop }}
      >
        <span className={Notification_ls.NotificationBox_icon} onClick={close}>
          <CloseOutlined />
        </span>
        <p className={Notification_ls.NotificationBox_text}>
          We use cookies to give you the best possible exprience on our website.
          For more details please read our{' '}
          <span
            onClick={() => {
              history.push('/PrivacyPolicy');
            }}
          >
            Cookies
          </span>
        </p>
        <div
          className={Notification_ls.NotificationBox_button}
          onClick={PrivacyPolicy}
        >
          Accept All Cookies
        </div>
      </div>
    </>
  );
}
