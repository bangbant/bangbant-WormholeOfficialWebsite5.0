import Dapps_ls from './Dapps.less';
import { ArrowRightOutlined } from '@ant-design/icons';
export default function Dapps() {
  return (
    <>
      <div className={Dapps_ls.DappsBox}>
        <div className={Dapps_ls.DappsBox_center}>
          <img
            src={require('../../assets/images/Dapps/Slice 911.png')}
            className={Dapps_ls.DappsBox_titleimg}
          />
          <div className={Dapps_ls.DappsBox_titletextbox}>
            <div className={Dapps_ls.DappsBox_titletextbox_left}>
              <p className={Dapps_ls.DappsBox_titletextbox_left_text1}>
                Meteorite&nbsp;
                <span>NFT</span>&nbsp;Marketplace:
              </p>
              <div>{/* 线 */}</div>
              <p className={Dapps_ls.DappsBox_titletextbox_left_text2}>
                Collect and trade S-NFTs to exchange for more&nbsp;
                <span>WormholesChain</span>&nbsp; ecosystem rights.
              </p>
            </div>
            <div
              className={Dapps_ls.DappsBox_titletextbox_right}
              onClick={() => {
                window.open(
                  'https://hub.wormholes.com/c0x97807fd98c40e0237aa1f13cf3e7cedc5f37f23b/#/',
                );
              }}
            >
              {/* 箭头 */}
            </div>
          </div>
          {/* gif */}
          <div className={Dapps_ls.DappsBox_gifbox}>
            <img src={require('../../assets/gif/2.gif')} />
          </div>
        </div>
        <img
          src={require('../../assets/images/Dapps/Slice 877.png')}
          className={Dapps_ls.DappsBox_hx}
        />
        <div className={Dapps_ls.DappsBox_centerbottom}>
          <p className={Dapps_ls.DappsBox_centerbottom_title}>
            The&nbsp;<span>Ecosystem</span>
          </p>
          <div className={Dapps_ls.DappsBox_centerbottom_line}>{/* 线 */}</div>
          <div className={Dapps_ls.DappsBox_centerbottom_falotbox}>
            <div
              className={Dapps_ls.DappsBox_centerbottom_falotbox_d}
              style={{ float: 'left' }}
            >
              <img src={require('../../assets/images/Dapps/Slice 879.png')} />
              <div className={Dapps_ls.DappsBox_centerbottom_falotbox_dright}>
                <div
                  className={Dapps_ls.DappsBox_centerbottom_falotbox_dright_top}
                >
                  <p>Limino</p>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                </div>
                <p
                  className={
                    Dapps_ls.DappsBox_centerbottom_falotbox_dright_bottom
                  }
                >
                  The decentralized wallet
                </p>
              </div>
            </div>
            <div
              className={Dapps_ls.DappsBox_centerbottom_falotbox_d}
              style={{ float: 'right' }}
            >
              <img src={require('../../assets/images/Dapps/Slice 880.png')} />
              <div className={Dapps_ls.DappsBox_centerbottom_falotbox_dright}>
                <div
                  className={Dapps_ls.DappsBox_centerbottom_falotbox_dright_top}
                >
                  <p>Ceres Protocol</p>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                </div>
                <p
                  className={
                    Dapps_ls.DappsBox_centerbottom_falotbox_dright_bottom
                  }
                >
                  Algorithmic Stablecoin
                </p>
              </div>
            </div>
            <div
              className={Dapps_ls.DappsBox_centerbottom_falotbox_d}
              style={{ float: 'left' }}
            >
              <img src={require('../../assets/images/Dapps/Slice 881.png')} />
              <div className={Dapps_ls.DappsBox_centerbottom_falotbox_dright}>
                <div
                  className={Dapps_ls.DappsBox_centerbottom_falotbox_dright_top}
                >
                  <p>OpenRimSea</p>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                </div>
                <p
                  className={
                    Dapps_ls.DappsBox_centerbottom_falotbox_dright_bottom
                  }
                >
                  Casual blockchain game based
                  <br /> on NFTs
                </p>
              </div>
            </div>
            <div
              className={Dapps_ls.DappsBox_centerbottom_falotbox_d}
              style={{ float: 'right' }}
            >
              <img src={require('../../assets/images/Dapps/Slice 882.png')} />
              <div className={Dapps_ls.DappsBox_centerbottom_falotbox_dright}>
                <div
                  className={Dapps_ls.DappsBox_centerbottom_falotbox_dright_top}
                >
                  <p>Meteorite</p>
                  <span>
                    <ArrowRightOutlined />
                  </span>
                </div>
                <p
                  className={
                    Dapps_ls.DappsBox_centerbottom_falotbox_dright_bottom
                  }
                >
                  NFT Marketplace
                </p>
              </div>
            </div>
          </div>
          {/* 尾块 */}
          <div className={Dapps_ls.DappsBox_centerbottom_title1}>
            <div>{/* 线 */}</div>
            <p>Ecosystem Development</p>
          </div>
          <p className={Dapps_ls.DappsBox_centerbottom_title2}>
            <span>WormholesChain</span>&nbsp; Foundation <br />
            Ecosystem Fund
          </p>
          <p className={Dapps_ls.DappsBox_centerbottom_title3}>
            The WormholesChain Foundation Ecosystem Fund will provide
            development support for NFT ecosystem projects built on{' '}
            <span>(DeFi, NFT, GameFi, Metaverse)</span> WormholesChain.
          </p>
          <div className={Dapps_ls.DappsBox_centerbottom_blockbox}>
            <div className={Dapps_ls.DappsBox_centerbottom_blockbox_d1}>
              <img src={require('../../assets/images/Dapps/Slice 911.png')} />
              <p>
                If you want to join us in building WormholesChain and a Web3
                future for us all, the WormholesChain Ventures Fund will provide
                support to you and your team...
              </p>
            </div>
            <div className={Dapps_ls.DappsBox_centerbottom_blockbox_d2}>
              <p>
                Apply for a <span>WormholesChain</span> <br />
                Foundation Grant
              </p>
              <span>Let us know if you have any questions!</span>
              <div
                onClick={() => {
                  window.open(
                    'https://wormholes.com/websetForm/#/ecosystemDevelopment',
                  );
                }}
              >
                Apply for a Venture Grant
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
