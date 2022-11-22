import HomePage_ls from './HomePage.less';

export default function HomePage() {
  return (
    <>
      <div className={HomePage_ls.HomePageBox}>
        <div className={HomePage_ls.HomePageBox_center}>
          <p>The First Truly Decentralized POS</p>
          <p>
            <span>Multi-Dimensional</span>
            Chain in
            <span>Web3</span>.
          </p>
        </div>
      </div>
    </>
  );
}
