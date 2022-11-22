import Header_ls from './Header.less';

export default function Header() {
  return (
    <>
      <div className={Header_ls.HeaderBox}>
        <img src={require('../../assets/images/Header/Slice 817.png')} />
        <span>Mirror universe public testnet No.2</span>
      </div>
      <div className={Header_ls.HeaderBox2}>
        <div className={Header_ls.HeaderBox2_center}>
          <span>Learn</span>
          <span>Docs</span>
          <span>Interfaces</span>
          <img src={require('../../assets/images/Header/Slice 908.png')} />
          <img src={require('../../assets/images/Header/Slice 909.png')} />
          <img src={require('../../assets/images/Header/Slice 910.png')} />
        </div>
      </div>
      <div className={Header_ls.HeaderBox3}></div>
    </>
  );
}
