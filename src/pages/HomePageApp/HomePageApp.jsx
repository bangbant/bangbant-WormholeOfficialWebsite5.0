import React, { useState, useEffect } from 'react';
import { total } from '../../api/request_data/block_request';
import { history, Link } from 'umi';
import { comma } from '../../utils/methods/Methods';
import { message } from 'antd';
import HomePageApp_ls from './HomePageApp.less';
export default function HomePageApp() {
  //总数
  const [totaldata, setTotaldata] = useState({});
  useEffect(() => {
    total_q();
  }, []);
  //总数查询
  const total_q = async () => {
    const data = await total();
    console.log('总数查询');
    console.log(data);
    if (data) {
      setTotaldata(data);
    }
  };

  return (
    <>
      <div className={HomePageApp_ls.HomePageAppBox}>
        <div className={HomePageApp_ls.titlebox}>
          <p>
            The First Truly Decentralized POS <span>Multi-Dimensional</span>{' '}
            Chain in<span>&nbsp;Web3</span>
          </p>
        </div>
        <div className={HomePageApp_ls.centerbox}>
          <div className={HomePageApp_ls.centerbox_d1}>
            <div className={HomePageApp_ls.centerbox_d1_1}>
              Features and Innovations
            </div>
            <div className={HomePageApp_ls.centerbox_d1_2}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.centerbox_d1_3}>{/* 线 */}</div>
            <div className={HomePageApp_ls.centerbox_d1_4}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.centerbox_d1_5}>
              <div></div>
              <p>
                One-click coupling generates clone subchains and multiple
                subchain systems combined with the SWAP interaction scheme to
                complete the cross-chain interaction of different crypto assets.
              </p>
            </div>
            <div className={HomePageApp_ls.centerbox_d1_6}>
              <div></div>
              <p>
                Innovative native mainnet fragment S-NFT and high-performance
                decentralized infrastructure built around NFT full-stack
                solutions.
              </p>
            </div>
            <div className={HomePageApp_ls.centerbox_d1_7}>
              <div></div>
              <p>
                Fair and Secure, powered by PoS and Dynamic Random Election
                (DRE) consensus algorithm.
              </p>
            </div>
          </div>
          <div className={HomePageApp_ls.centerbox_d2}>
            <img src={require('../../assets/gif/4.gif')} />
          </div>
          <div
            className={HomePageApp_ls.centerbox_d3}
            onClick={() => {
              window.open(
                'https://medium.com/wormholeschain-network/mandatory-reading-for-validators-of-wormholeschain-d17c2b27a885',
              );
            }}
          >
            Learn about Validator
          </div>
          <div
            className={HomePageApp_ls.centerbox_d4}
            onClick={() => {
              window.open(
                'https://www.wormholes.com/docs/install/run/index.html#spin-up-your-own-wormholes-node',
              );
            }}
          >
            Become a Validator
          </div>
        </div>
        {/* 问题 */}
        <div className={HomePageApp_ls.bigimg2}>
          <div className={HomePageApp_ls.bigimg2_center}>
            <p className={HomePageApp_ls.bigimg2_title}>
              <span>S-NFT&nbsp;</span>
              Miner
            </p>
            <p className={HomePageApp_ls.bigimg2_text}>
              Distinct from smart-contract based NFTs, S-NFTs are a native
              chain-layer non-fungible asset on Wormholes. S-NFTs are rewarded
              to Wormholes S-NFT Miners; they receive 4/11 of the Mainnet block
              rewards.
            </p>
            <div
              className={HomePageApp_ls.bigimg2_button1}
              onClick={() => {
                window.open(
                  'https://medium.com/wormholeschain-network/mandatory-reading-for-s-nft-node-of-wormholeschain-a4c0c3254256',
                );
              }}
            >
              Mandatory reading for S-NFT Miners
            </div>
            <div
              className={HomePageApp_ls.bigimg2_button2}
              onClick={() => {
                window.open(
                  'https://market-2.gitbook.io/get-s-nft-by-staking-erb-on-wormholeschain/',
                );
              }}
            >
              Become a Wormholes S-NFT Miner
            </div>
            <div className={HomePageApp_ls.bigimg2_gif}>
              <img src={require('../../assets/gif/3.gif')} />
            </div>
          </div>
        </div>
        <div className={HomePageApp_ls.centerbox2}>
          <p className={HomePageApp_ls.centerbox2_title}>
            Advantages of
            <br />
            <span>Wormholes</span>
          </p>
          <div className={HomePageApp_ls.centerbox2_line}>{/* 线 */}</div>
          <div className={HomePageApp_ls.centerbox2_databox}>
            <div>
              <span>Infinite Scalability</span>
              <p>
                Wormholes is a multi-dimensional blockchain, in which parallel
                chains are coupled together to form the network, supporting
                parallelism as a way to linearly increase throughput with each
                additional chain added to the system.
              </p>
            </div>
            <div>
              <span style={{ color: '#A486FA' }}>
                Trusted Random Election Algorithms
              </span>
              <p style={{ color: '#000000' }}>
                Dynamic Random Election (DRE)-based Consensus Mechanism: A set
                of practical Byzantine fault-tolerant protocols for completely
                asynchronous environments. Safety properties of DRE are
                post-quantum secure.
              </p>
            </div>
            <div>
              <span style={{ color: '#A486FA' }}>
                Multi-Dimensional
                <br />
                Blockchain
                <br />
                Architecture
              </span>
              <p style={{ color: '#000000' }}>
                The Wormholes multi-dimensional blockchain architecture allows
                the realization of a linear increase in throughput with each
                additional chain and layer added to the system, allowing
                Wormholes to easily achieve high transactions per second (TPS).
              </p>
            </div>
            <div>
              <span>Diversified Developer Ecosystem</span>
              <p>
                Wormholes provides developers with a simple way to integrate
                their DApp and projects with Wormholes, allowing developers and
                creators to focus their time on what they do best – creating the
                best new DApps and products.
              </p>
            </div>
          </div>
        </div>
        <div className={HomePageApp_ls.bigbox3}>
          <div className={HomePageApp_ls.bigbox3_center}>
            <div className={HomePageApp_ls.bigbox3_block}>
              <div>{comma(totaldata.totalBlock - 1) || 0}</div>
              <p>Block Height</p>
            </div>
            <div className={HomePageApp_ls.bigbox3_block}>
              <div>{totaldata.avgBlockTime || 0} ms</div>
              <p>Block Time</p>
            </div>
            <div className={HomePageApp_ls.bigbox3_block}>
              <div>{comma(totaldata.totalSNFT) || 0}</div>
              <p>Number of S-NFT</p>
            </div>
            <div className={HomePageApp_ls.bigbox3_block}>
              <div>{comma(totaldata.totalTransaction) || 0}</div>
              <p>Total Transactions</p>
            </div>
          </div>
          <div
            className={HomePageApp_ls.bigbox3_button}
            onClick={() => {
              window.open('https://www.wormholesscan.com/#/');
            }}
          >
            View mainnet data
          </div>
        </div>
        <div className={HomePageApp_ls.centerbox3_databox}>
          <div>
            <span>
              Safe, Efficient, and
              <br /> Energy-Efficient
            </span>
            <p>
              The multi-level blockchain system structure: It consists of
              Transport, Blockchain, API, and Application levels, which make the
              Wormholes network secure and efficient.
            </p>
          </div>
          <div>
            <span style={{ color: '#A486FA' }}>
              Scalable and Flexible
              <br /> Architecture for
              <br /> Multiple Layers
            </span>
            <p style={{ color: '#000000' }}>
              The multi-dimensional blockchain mechanism, being inherently
              flexible and scalable, supports many kinds of blockchain
              structures, including single layer, multiple layers, parallel
              independent chains, core chaining chains, homogenous chains,
              heterogeneous chains, mixed heterogenous homogenous chains, or any
              combination of the above.
            </p>
          </div>
        </div>
        <div
          className={HomePageApp_ls.centerbox4}
          name="eventApp"
          id="eventApp"
        >
          <div className={HomePageApp_ls.centerbox4_titlebox}>
            <div>{/* 线 */}</div>
            <span>Wormholes Event</span>
          </div>
          <div className={HomePageApp_ls.centerbox4_databox}>
            <div className={HomePageApp_ls.centerbox4_databox_block1}>
              <p className={HomePageApp_ls.centerbox4_databox_block1_title}>
                Mirror Universe <br />
                Public Test NO.2
              </p>
              <p className={HomePageApp_ls.centerbox4_databox_block1_text}>
                Wormholes solves the security and fairness issue through Dynamic
                Random Election (DRE) Consensus, which implements the first
                genuinely decentralized POS public chain in Web3.
              </p>
              <span>Ended</span>
            </div>
            <div
              className={HomePageApp_ls.centerbox4_databox_block1}
              style={{ backgroundColor: '#A486FA' }}
            >
              <p
                className={HomePageApp_ls.centerbox4_databox_block1_title}
                style={{ color: '#FFFFFF' }}
              >
                Meteorite Effect <br />
                Event NO.2
              </p>
              <p
                className={HomePageApp_ls.centerbox4_databox_block1_text}
                style={{ color: '#E3E3E3' }}
              >
                ERB and S-NFT of Wormholes will take you to experience different
                economic models.
              </p>
              <span
                style={{ color: '#FFFFFF' }}
                onClick={() => {
                  window.open(
                    'https://market-2.gitbook.io/meteorite-effect-no.2-s-nft-miner/',
                  );
                }}
              >
                Ongoing
              </span>
            </div>
            <div
              className={HomePageApp_ls.centerbox4_databox_block1}
              style={{ backgroundColor: '#ffffff' }}
            >
              <p className={HomePageApp_ls.centerbox4_databox_block1_title}>
                Wormholes Lightyear
                <br /> Public Test NO.1
              </p>
              <p className={HomePageApp_ls.centerbox4_databox_block1_text}>
                Wormholes solves the security and fairness issue through Dynamic
                Random Election (DRE) Consensus, which implements the first
                genuinely decentralized POS public chain in Web3.
              </p>
              <span
                onClick={() => {
                  window.open(
                    'https://medium.com/wormholeschain-network/wormholes-lightyear-no-1-public-test-85e7082c6df1',
                  );
                }}
              >
                Ongoing
              </span>
            </div>
          </div>
        </div>
        <div className={HomePageApp_ls.MainPartners}>
          <p className={HomePageApp_ls.MainPartners_centertitle}>
            Main&nbsp;<span>Partners</span> and
            <br /> Team<span>&nbsp;Members</span>
          </p>
          <div className={HomePageApp_ls.MainPartners_line}>
            <div>
              {/* 线 */}
              <p></p>
            </div>
          </div>
          {/* 小滑动 */}
          <div className={HomePageApp_ls.MainPartners_smboxyc}>
            <div className={HomePageApp_ls.MainPartners_smbox}>
              <div className={HomePageApp_ls.MainPartners_smbox_long}>
                <Link
                  className={HomePageApp_ls.MainPartners_smbox_long_div}
                  to={{ pathname: '/MandraCapitalApp', state: '' }}
                >
                  <img
                    src={require('../../assets/images/HomePageApp/Group 766.png')}
                    style={{ width: '45.57px', height: '46.21px' }}
                  />
                  <p>
                    MANDRA
                    <br />
                    CAPITAL
                  </p>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 972.png')}
                  />
                </Link>
                <div
                  className={HomePageApp_ls.MainPartners_smbox_long_div}
                  onClick={() => {
                    window.open('https://www.emgroup.com/');
                  }}
                >
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 823.png')}
                    style={{ width: '35.58px', height: '36.31px' }}
                  />
                  <p>E/M GROUP</p>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 972.png')}
                  />
                </div>
                <div
                  className={HomePageApp_ls.MainPartners_smbox_long_div}
                  onClick={() => {
                    window.open('https://liquid2.vc/');
                  }}
                >
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 821.png')}
                    style={{ width: '28.73px', height: '36px' }}
                  />
                  <p>VENTURES</p>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 972.png')}
                  />
                </div>
                <div className={HomePageApp_ls.MainPartners_smbox_long_div}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 951.png')}
                    style={{ width: '40.43px', height: '36.18px' }}
                  />
                  <p>
                    TIMING
                    <br />
                    CAPITAL
                  </p>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 972.png')}
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 大滑动 */}
          <div className={HomePageApp_ls.MainPartners_bigboxyc}>
            <div className={HomePageApp_ls.MainPartners_bigbox}>
              <div className={HomePageApp_ls.MainPartners_bigbox_long}>
                {/* 1 */}
                <div className={HomePageApp_ls.MainPartners_bigbox_long_block}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 847@2x.png')}
                    className={HomePageApp_ls.MainPartners_bigbox_long_bimg}
                  />
                  <p className={HomePageApp_ls.MainPartners_bigbox_long_text}>
                    Co-Founder of Chronicled, Zanbato, CrossCoin Ventures, and
                    Elastic Path, Consulting Professor at Stanford University,
                    PhD, Stanford University.
                  </p>
                  <div
                    className={HomePageApp_ls.MainPartners_bigbox_long_bottom}
                  >
                    <img
                      src={require('../../assets/images/HomePageApp/Slice 796@2x.png')}
                    />
                    <p>
                      Dr. Ryan Orr
                      <br />
                      <span>Chairman</span>
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className={HomePageApp_ls.MainPartners_bigbox_long_block}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 847@2x.png')}
                    className={HomePageApp_ls.MainPartners_bigbox_long_bimg}
                  />
                  <p className={HomePageApp_ls.MainPartners_bigbox_long_text}>
                    Board Member of Mapletree Fund, National Museum of
                    Singapore, 30+ Years of Investment Banking and Law
                    Experience at Goldman Sachs, Milbank Tweed, and Paul Weiss,
                    BA, Cambridge University, LLM, Harvard University.
                  </p>
                  <div
                    className={HomePageApp_ls.MainPartners_bigbox_long_bottom}
                  >
                    <img
                      src={require('../../assets/images/HomePageApp/Slice 800@2x.png')}
                    />
                    <p>
                      John Koh
                      <br />
                      <span>Advisor</span>
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div className={HomePageApp_ls.MainPartners_bigbox_long_block}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 847@2x.png')}
                    className={HomePageApp_ls.MainPartners_bigbox_long_bimg}
                  />
                  <p className={HomePageApp_ls.MainPartners_bigbox_long_text}>
                    Managing Partner of PacBridge Capital, Board Member of E/M
                    Group, Linksys Technologies, 20+ Years of Investment Banking
                    Experience at Credit Suisse, Morgan Stanley, and Merrill
                    Lynch.
                  </p>
                  <div
                    className={HomePageApp_ls.MainPartners_bigbox_long_bottom}
                  >
                    <img
                      src={require('../../assets/images/HomePageApp/Slice 798@2x.png')}
                    />
                    <p>
                      Sheldon Trainor
                      <br />
                      <span>Strategy Advisor</span>
                    </p>
                  </div>
                </div>
                {/* 4 */}
                <div className={HomePageApp_ls.MainPartners_bigbox_long_block}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 847@2x.png')}
                    className={HomePageApp_ls.MainPartners_bigbox_long_bimg}
                  />
                  <p className={HomePageApp_ls.MainPartners_bigbox_long_text}>
                    Staff Scientist at Lawrence Berkeley National Laboratory,
                    PhD, Columbia University.
                  </p>
                  <div
                    className={HomePageApp_ls.MainPartners_bigbox_long_bottom}
                  >
                    <img
                      src={require('../../assets/images/HomePageApp/Slice 797@2x.png')}
                    />
                    <p>
                      Dr. Tai
                      <br />
                      <span>Chief Scientist</span>
                    </p>
                  </div>
                </div>
                {/* 5 */}
                <div className={HomePageApp_ls.MainPartners_bigbox_long_block}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 847@2x.png')}
                    className={HomePageApp_ls.MainPartners_bigbox_long_bimg}
                  />
                  <p className={HomePageApp_ls.MainPartners_bigbox_long_text}>
                    Founder and CEO of SANA Semiconductors, Co-Founder of
                    Tavanza, and Former CTO of Redwood Venture Partners,
                    Consulting Professor at Stanford University, PhD, Stanford
                    University.
                  </p>
                  <div
                    className={HomePageApp_ls.MainPartners_bigbox_long_bottom}
                  >
                    <img
                      src={require('../../assets/images/HomePageApp/Slice 79@2x.png')}
                    />
                    <p>
                      Dr. Mehdi Soltan
                      <br />
                      <span>Technical Advisor</span>
                    </p>
                  </div>
                </div>
                {/* 6 */}
                <div className={HomePageApp_ls.MainPartners_bigbox_long_block}>
                  <img
                    src={require('../../assets/images/HomePageApp/Slice 847@2x.png')}
                    className={HomePageApp_ls.MainPartners_bigbox_long_bimg}
                  />
                  <p className={HomePageApp_ls.MainPartners_bigbox_long_text}>
                    Professor at UESTC, PhD, Purdue University, Specialist in
                    Cybersecurity.
                  </p>
                  <div
                    className={HomePageApp_ls.MainPartners_bigbox_long_bottom}
                  >
                    <img
                      src={require('../../assets/images/HomePageApp/Slice 799@2x.png')}
                    />
                    <p>
                      Dr. Ting Chen
                      <br />
                      <span>Consulting Scientist</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={HomePageApp_ls.Roadmap}>
          <p className={HomePageApp_ls.Roadmap_title}>Roadmap</p>
          <div className={HomePageApp_ls.Roadmap_line}>{/* 线 */}</div>
          <div className={HomePageApp_ls.Roadmap_dwbox}>
            <div className={HomePageApp_ls.Roadmap_1}>Marketing Timeline</div>
            <div className={HomePageApp_ls.Roadmap_2}>Tech Dev Timeline</div>
            <div className={HomePageApp_ls.Roadmap_3}>2018</div>

            <div className={HomePageApp_ls.Roadmap_12}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>July 2022</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Wormholes Twitter, Medium, Discord
              </p>
            </div>
            <div className={HomePageApp_ls.Roadmap_13}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q3 2022</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Wormholes Testnet, One-Click NFT Marketplace, Wormholes Limino,
                Wormholes Scan
              </p>
            </div>
            <div className={HomePageApp_ls.Roadmap_14}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q4 2022</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Wormholes Cross Swap, Wormholes Faucet, Wormholes Evm Extend
              </p>
            </div>
            <div className={HomePageApp_ls.Roadmap_15}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>
                August
                <br />
                2022
              </span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Official Website, Events, Airdrops, NFT Competition
              </p>
            </div>
            <div className={HomePageApp_ls.Roadmap_16}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q1 2023</span>
              <p className={HomePageApp_ls.Roadmap_p}>Wormholes Limino</p>
            </div>
            <div className={HomePageApp_ls.Roadmap_17}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>
                September 2022
              </span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Testnet & Ecosystem Events
              </p>
            </div>
            <div className={HomePageApp_ls.Roadmap_18}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q4 2022</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                NFT Ecosystem Development, dApp Developer Events
              </p>
            </div>

            <div className={HomePageApp_ls.Roadmap_20}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q4 2023</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Metaverse Application Promotion & Events
              </p>
            </div>
            <div className={HomePageApp_ls.Roadmap_21}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q2 2023</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                Metaverse & NFT Tools, incl. Oculus Tools, Wormholes Metaverse
                APl
              </p>
            </div>
            <img
              className={HomePageApp_ls.Roadmap_4}
              src={require('../../assets/images/HomePageApp/Slice 977@2x.png')}
            />
            <div className={HomePageApp_ls.Roadmap_5}>{/* 圆 */}</div>
            <img
              className={HomePageApp_ls.Roadmap_6}
              src={require('../../assets/images/HomePageApp/Slice 985@2x.png')}
            />
            <div className={HomePageApp_ls.Roadmap_7}>{/* 圆 */}</div>
            <img
              className={HomePageApp_ls.Roadmap_8}
              src={require('../../assets/images/HomePageApp/Slice 986@2x.png')}
            />
            <div className={HomePageApp_ls.Roadmap_9}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.Roadmap_10}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.Roadmap_11}>{/* 圆 */}</div>
            <div className={HomePageApp_ls.Roadmap_19}>
              <div className={HomePageApp_ls.Roadmap_y}>{/* 圆 */}</div>
              <span className={HomePageApp_ls.Roadmap_span}>Q1 2023</span>
              <p className={HomePageApp_ls.Roadmap_p}>
                GameFi, Web3 Hackathon Event, Wormholes Foundation Ecosystem
                Fund
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
