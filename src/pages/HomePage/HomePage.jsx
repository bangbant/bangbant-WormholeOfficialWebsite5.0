import HomePage_ls from './HomePage.less';
import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
export default function HomePage() {
  const [imgsomrewidth, setImgsomrewidth] = useState('0px');
  const [imgbigwidth, setImgbigwidth] = useState('0px');
  function imgsomre(data) {
    if (data == 1) {
      setImgsomrewidth('0px');
    } else {
      setImgsomrewidth('-1220px');
    }
  }
  function imgbig(data) {
    if (data == 1) {
      if (imgbigwidth == '-2440px') {
        setImgbigwidth('-1220px');
      } else {
        setImgbigwidth('0px');
      }
    } else {
      if (imgbigwidth == '0px') {
        setImgbigwidth('-1220px');
      } else {
        setImgbigwidth('-2440px');
      }
    }
  }
  return (
    <div className={HomePage_ls.HomePage}>
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
      <div className={HomePage_ls.HomePageBox_Featuresbox}>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div1}>
          Features and Innovations
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div2}>
          {/* 圆 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div3}>
          <div></div>
          <p>
            One-click coupling generates clone sub-chains and multiple sub-chain
            systems combined with the SWAP interaction scheme to complete the
            cross-chain interaction of different crypto assets.
          </p>
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div4}>
          {/* 线 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div5}>
          <div></div>
          <p>
            Innovative native mainnet fragment S-NFT and high-performance
            decentralized infrastructure built around NFT full-stack solutions.
          </p>
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div6}>
          {/* 圆 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_div7}>
          {/* 紫色图片 */}
        </div>
        <div className={HomePage_ls.HomePageBox_Featuresbox_divviodebox}>
          <div className={HomePage_ls.HomePageBox_Featuresbox_divviode}>
            <img src={require('../../assets/gif/1.gif')} />
          </div>
          <div className={HomePage_ls.HomePageBox_Featuresbox_divbuttonbox}>
            <div
              className={HomePage_ls.HomePageBox_Featuresbox_divbuttonbox_top2}
            >
              <p>Learn about becoming a Validator</p>
            </div>
            <div
              className={HomePage_ls.HomePageBox_Featuresbox_divbuttonbox_top1}
            >
              <p>Become a Wormholes Validator</p>
            </div>
          </div>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox2}>
        <div className={HomePage_ls.HomePageBox2_center}>
          <p className={HomePage_ls.HomePageBox2_title}>
            <span>S - NFT</span> Nodes
          </p>
          <div className={HomePage_ls.HomePageBox2_box}>
            <p className={HomePage_ls.HomePageBox2_box_data}>
              Distinct from smart-contract based NFTs, S-NFTs are a native
              chain-layer non-fungible asset on the WormholesChain. S-NFTs are
              rewarded to Wormholes SNFT Validators; they receive 4/11 of the
              Mainnet block rewards.
            </p>
            <div className={HomePage_ls.HomePageBox2_box_button1}>
              Mandatory reading for S-NFT Miner
            </div>
            <div className={HomePage_ls.HomePageBox2_box_button2}>
              Become Wormholes S-NFT Miner
            </div>
            <div className={HomePage_ls.HomePageBox2_box_gifbox}>
              <img src={require('../../assets/gif/3.gif')} />
            </div>
          </div>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox3}>
        <div className={HomePage_ls.HomePageBox3_center}>
          <p className={HomePage_ls.HomePageBox3_title}>
            Advantages of&nbsp;
            <span>Wormholes</span>
          </p>
          <div className={HomePage_ls.HomePageBox3_line}>{/* 线 */}</div>
          <div className={HomePage_ls.HomePageBox3_databox}>
            <div className={HomePage_ls.HomePageBox3_databox_block1}>
              <p className={HomePage_ls.HomePageBox3_databox_block_title}>
                Infinite Scalability
              </p>
              <p className={HomePage_ls.HomePageBox3_databox_block_text}>
                The Wormholes Blockchain is a multi-dimensional blockchain, in
                which parallel chains are coupled together to form the network,
                supporting parallelism as a way to linearly increase throughput
                with each additional chain added to the system.
              </p>
            </div>
            <div className={HomePage_ls.HomePageBox3_databox_block2}>
              <p className={HomePage_ls.HomePageBox3_databox_block_title}>
                Trusted Random Election Algorithms
              </p>
              <p className={HomePage_ls.HomePageBox3_databox_block_text}>
                Dynamic Random Election (DRE)-based Consensus Mechanism: A set
                of practical Byzantine fault-tolerant protocols for completely
                asynchronous environments. Safety properties of DRE are
                post-quantum secure.
              </p>
            </div>
            <div className={HomePage_ls.HomePageBox3_databox_block1}>
              <p className={HomePage_ls.HomePageBox3_databox_block_title}>
                Multi-Dimensional Blockchain Architecture
              </p>
              <p className={HomePage_ls.HomePageBox3_databox_block_text}>
                The Wormholes multi-dimensional blockchain architecture allows
                the realization of a linear increase in throughput with each
                additional chain and layer added to the system, allowing the
                Wormholes Blockchain to easily achieve high transactions per
                second (TPS).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox4}>
        <div className={HomePage_ls.HomePageBox4_center}>
          <div className={HomePage_ls.HomePageBox4_databox}>
            <div className={HomePage_ls.HomePageBox4_databox_block}>
              <div className={HomePage_ls.HomePageBox4_databox_blockimg}>
                119,703,333
              </div>
              <p>Block Height</p>
            </div>
            <div className={HomePage_ls.HomePageBox4_databox_block}>
              <div className={HomePage_ls.HomePageBox4_databox_blockimg}>
                119,703,333
              </div>
              <p>Block Time </p>
            </div>
            <div className={HomePage_ls.HomePageBox4_databox_block}>
              <div className={HomePage_ls.HomePageBox4_databox_blockimg}>
                119,703,333
              </div>
              <p>Number of S-NFTs</p>
            </div>
            <div className={HomePage_ls.HomePageBox4_databox_block}>
              <div className={HomePage_ls.HomePageBox4_databox_blockimg}>
                119,703,333
              </div>
              <p>Total Transactions</p>
            </div>
          </div>
          <div className={HomePage_ls.HomePageBox4_button}>
            View mainnet data
          </div>
          <img
            className={HomePage_ls.HomePageBox4_img1}
            src={require('../../assets/images/HomePage/Slice 837.png')}
          />
          <img
            className={HomePage_ls.HomePageBox4_img2}
            src={require('../../assets/images/HomePage/Slice 838.png')}
          />
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox5}>
        <div className={HomePage_ls.HomePageBox3_databox}>
          <div className={HomePage_ls.HomePageBox3_databox_block2}>
            <p className={HomePage_ls.HomePageBox3_databox_block_title}>
              Diversified Developer Ecosystem
            </p>
            <p className={HomePage_ls.HomePageBox3_databox_block_text}>
              Wormholes provides developers with a simple way to integrate their
              DApp and projects with the Wormholes Chain, allowing developers
              and creators to focus their time on what they do best – creating
              the best new DApps and products.
            </p>
          </div>
          <div className={HomePage_ls.HomePageBox3_databox_block1}>
            <p className={HomePage_ls.HomePageBox3_databox_block_title}>
              Safe, Efficient, and Energy-Efficient
            </p>
            <p className={HomePage_ls.HomePageBox3_databox_block_text}>
              The multi-level blockchain system structure: It consists of
              Transport, Blockchain, API, and Application levels, which make the
              Wormholes Chain network secure and efficient.
            </p>
          </div>
          <div className={HomePage_ls.HomePageBox3_databox_block2}>
            <p className={HomePage_ls.HomePageBox3_databox_block_title}>
              Scalable and Flexible Architecture for Multiple Layers
            </p>
            <p className={HomePage_ls.HomePageBox3_databox_block_text}>
              The multi-dimensional blockchain mechanism, being inherently
              flexible and scalable, supports many kinds of blockchain
              structures, including single layer, multiple layers, parallel
              independent chains, core chaining chains, homogenous chains,
              heterogeneous chains, mixed heterogenous homogenous chains, or any
              combination of the above.
            </p>
          </div>
        </div>
        <div className={HomePage_ls.HomePageBox3_videobox}>
          <div className={HomePage_ls.HomePageBox3_videobox_title}>
            <div className={HomePage_ls.HomePageBox3_videobox_line}>
              {/* 线 */}
            </div>
            <p>
              WormholesChain&nbsp;
              <span>Event</span>
            </p>
            <div className={HomePage_ls.HomePageBox3_videobox_button}>Join</div>
          </div>
          <div className={HomePage_ls.HomePageBox3_video}>
            <img src={require('../../assets/gif/4.gif')} />
          </div>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox6}>
        <div className={HomePage_ls.HomePageBox6_center}>
          <img
            src={require('../../assets/images/HomePage/Slice 838.png')}
            className={HomePage_ls.HomePageBox6_leftimg}
          />
          <img
            src={require('../../assets/images/HomePage/Slice 837.png')}
            className={HomePage_ls.HomePageBox6_rightimg}
          />
          <p className={HomePage_ls.HomePageBox6_title}>
            <span>Main</span>&nbsp; Partners and&nbsp;
            <span>Team</span> Members
          </p>
          <div className={HomePage_ls.HomePageBox6_line}>{/* 线 */}</div>
          {/* 小轮播 */}
          <div className={HomePage_ls.HomePageBox6_Carouselbox1}>
            <div
              className={HomePage_ls.HomePageBox6_Carouselbox1_left}
              onClick={imgsomre.bind(this, 1)}
            >
              {/* 左 */}
            </div>
            <div className={HomePage_ls.HomePageBox6_Carouselbox1_centerbox}>
              <div
                className={HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong}
                style={{ marginLeft: imgsomrewidth }}
              >
                {/* 1页 */}
                <div
                  className={
                    HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block
                  }
                >
                  {/* 1 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg1
                      }
                      src={require('../../assets/images/HomePage/Slice 843.png')}
                    />
                    <p>
                      MANDRA <br />
                      CAPITAL
                    </p>
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg2
                      }
                      src={require('../../assets/images/HomePage/Slice 844.png')}
                    />
                  </div>
                  {/* 2 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg1
                      }
                      src={require('../../assets/images/HomePage/Slice 845.png')}
                    />
                    <p>E/M GROUP</p>
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg2
                      }
                      src={require('../../assets/images/HomePage/Slice 844.png')}
                    />
                  </div>
                  {/* 3 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg1
                      }
                      src={require('../../assets/images/HomePage/Slice 846.png')}
                    />
                    <p>VENTURES</p>
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg2
                      }
                      src={require('../../assets/images/HomePage/Slice 844.png')}
                    />
                  </div>
                </div>
                {/* 2页 */}
                <div
                  className={
                    HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block
                  }
                >
                  {/* 1 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg1
                      }
                      src={require('../../assets/images/HomePage/Slice 951.png')}
                    />
                    <p>
                      TIMING <br />
                      CAPITAL
                    </p>
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox1_centerboxlong_block_dimg2
                      }
                      src={require('../../assets/images/HomePage/Slice 844.png')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={HomePage_ls.HomePageBox6_Carouselbox1_right}
              onClick={imgsomre.bind(this, 2)}
            >
              {/* 右 */}
            </div>
          </div>
          {/* 大轮播 */}
          <div className={HomePage_ls.HomePageBox6_Carouselbox2}>
            <div
              className={HomePage_ls.HomePageBox6_Carouselbox2_left}
              onClick={imgbig.bind(this, 1)}
            >
              {/* 左 */}
            </div>
            <div className={HomePage_ls.HomePageBox6_Carouselbox2_centerbox}>
              <div
                className={HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong}
                style={{ marginLeft: imgbigwidth }}
              >
                {/* 1页 */}
                <div
                  className={
                    HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block
                  }
                >
                  {/* 1 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_dh
                      }
                      src={require('../../assets/images/HomePage/Slice 847.png')}
                    />
                    <p
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_data
                      }
                    >
                      Co-Founder of Chronicled, Zanbato, CrossCoin Ventures, and
                      Elastic Path Consulting Professor at Stanford University
                      PhD, Stanford University.
                    </p>
                    <div
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottombox
                      }
                    >
                      <img
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottomboximg
                        }
                        src={require('../../assets/images/HomePage/img1.png')}
                      />
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span1
                        }
                      >
                        Dr. Ryan Orr
                      </p>
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span2
                        }
                      >
                        Chairman
                      </p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_dh
                      }
                      src={require('../../assets/images/HomePage/Slice 847.png')}
                    />
                    <p
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_data
                      }
                    >
                      Board Member of Mapletree Fund, National Museum of
                      Singapore, 30+ Years of Investment Banking and Law
                      Experience at Goldman Sachs, Milbank Tweed, and Paul Weiss
                      BA, Cambridge University, LLM, Harvard University.
                    </p>
                    <div
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottombox
                      }
                    >
                      <img
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottomboximg
                        }
                        src={require('../../assets/images/HomePage/img2.png')}
                      />
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span1
                        }
                      >
                        John Koh
                      </p>
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span2
                        }
                      >
                        Operations Advisor
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2页 */}
                <div
                  className={
                    HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block
                  }
                >
                  {/* 1 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_dh
                      }
                      src={require('../../assets/images/HomePage/Slice 847.png')}
                    />
                    <p
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_data
                      }
                    >
                      Managing Partner of PacBridge Capital Partners, Board
                      Member of Imagia Health, E/M Group, and Linksys
                      Technologies, 20+ years of investment banking experience
                      with Credit Suisse, Morgan Stanley, and Merrill Lynch.
                    </p>
                    <div
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottombox
                      }
                    >
                      <img
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottomboximg
                        }
                        src={require('../../assets/images/HomePage/img3.png')}
                      />
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span1
                        }
                      >
                        Sheldon Trainor
                      </p>
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span2
                        }
                      >
                        Strategy Advisor
                      </p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_dh
                      }
                      src={require('../../assets/images/HomePage/Slice 847.png')}
                    />
                    <p
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_data
                      }
                    >
                      Staff scientist at Lawrence Berkeley National Laboratory,
                      PhD, Columbia University, specialized in cryptography and
                      cybersecurity.
                    </p>
                    <div
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottombox
                      }
                    >
                      <img
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottomboximg
                        }
                        src={require('../../assets/images/HomePage/img4.png')}
                      />
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span1
                        }
                      >
                        Dr. Tai
                      </p>
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span2
                        }
                      >
                        Co-Founder & Chief Scientist
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3页 */}
                <div
                  className={
                    HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block
                  }
                >
                  {/* 1 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_dh
                      }
                      src={require('../../assets/images/HomePage/Slice 847.png')}
                    />
                    <p
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_data
                      }
                    >
                      Founder and CEO of Sana Semiconductors, Co-Founder of
                      Tavanza, Former CTO of Redwood Venture Partners, PhD and
                      Consulting Professor, Stanford University.
                    </p>
                    <div
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottombox
                      }
                    >
                      <img
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottomboximg
                        }
                        src={require('../../assets/images/HomePage/img5.png')}
                      />
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span1
                        }
                      >
                        Dr. Mehdi Soltan
                      </p>
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span2
                        }
                      >
                        Technical Advisor
                      </p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div
                    className={
                      HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d
                    }
                  >
                    <img
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_dh
                      }
                      src={require('../../assets/images/HomePage/Slice 847.png')}
                    />
                    <p
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_data
                      }
                    >
                      Professor at UESTC, PhD, Purdue University, specialized in
                      cybersecurity.
                    </p>
                    <div
                      className={
                        HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottombox
                      }
                    >
                      <img
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_bottomboximg
                        }
                        src={require('../../assets/images/HomePage/img6.png')}
                      />
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span1
                        }
                      >
                        Dr. Ting Chen
                      </p>
                      <p
                        className={
                          HomePage_ls.HomePageBox6_Carouselbox2_centerboxlong_block_d_span2
                        }
                      >
                        Consulting Scientist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={HomePage_ls.HomePageBox6_Carouselbox2_right}
              onClick={imgbig.bind(this, 2)}
            >
              {/* 右 */}
            </div>
          </div>
        </div>
      </div>
      <div className={HomePage_ls.HomePageBox7}>
        <p className={HomePage_ls.HomePageBox7_title}>Roadmap</p>
        <div className={HomePage_ls.HomePageBox7_line}>{/* 线 */}</div>
        <div className={HomePage_ls.HomePageBox7_databox}>
          <div className={HomePage_ls.HomePageBox7_databox_d1}>2018</div>
          <div className={HomePage_ls.HomePageBox7_databox_d2}>
            Marketing Timeline
          </div>
          <div className={HomePage_ls.HomePageBox7_databox_d3}>
            Tech Dev Timeline
          </div>
          <div className={HomePage_ls.HomePageBox7_databox_d4}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>July 2022</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              WormholesChain Twitter, Medium, Discord
            </p>
          </div>
          <div className={HomePage_ls.HomePageBox7_databox_d5}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q3 2022</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              WWormholesChain Testnet, One-Click NFT Marketplace WormholesChain
              Limino,WormholesChain Scan
            </p>
          </div>
          <img
            src={require('../../assets/images/HomePage/Slice 863.png')}
            className={HomePage_ls.HomePageBox7_databox_d6}
          />
          <img
            src={require('../../assets/images/HomePage/Slice 857.png')}
            className={HomePage_ls.HomePageBox7_databox_d7}
          />
          <div className={HomePage_ls.HomePageBox7_databox_d8}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q4 2022</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              WormholesChain Cross Swap, WormholesChain Faucet WormholesChain
              Evm Extend
            </p>
          </div>
          <div className={HomePage_ls.HomePageBox7_databox_d9}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>
              August 2022
            </p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              Official Website, Events, Airdrops, NFT Competition
            </p>
          </div>
          <img
            src={require('../../assets/images/HomePage/Slice 864.png')}
            className={HomePage_ls.HomePageBox7_databox_d10}
          />
          <img
            src={require('../../assets/images/HomePage/Slice 857.png')}
            className={HomePage_ls.HomePageBox7_databox_d11}
          />
          <div className={HomePage_ls.HomePageBox7_databox_d12}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q1 2023</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              WormholesChain Limino
            </p>
          </div>
          <div className={HomePage_ls.HomePageBox7_databox_d13}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>
              September 2022
            </p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              Testnet & Ecosystem Events
            </p>
          </div>
          <img
            src={require('../../assets/images/HomePage/Slice 865.png')}
            className={HomePage_ls.HomePageBox7_databox_d14}
          />
          <img
            src={require('../../assets/images/HomePage/Slice 857.png')}
            className={HomePage_ls.HomePageBox7_databox_d15}
          />
          <div className={HomePage_ls.HomePageBox7_databox_d16}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q4 2022</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              NFT Ecosystem Development, dApp Developer Events
            </p>
          </div>
          <img
            src={require('../../assets/images/HomePage/Slice 857.png')}
            className={HomePage_ls.HomePageBox7_databox_d17}
          />
          <div className={HomePage_ls.HomePageBox7_databox_d18}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q1 2023</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              GameFi, Web3 Hackathon Event WormholesChain Foundation Ecosystem
              Fund
            </p>
          </div>
          <img
            src={require('../../assets/images/HomePage/Slice 857.png')}
            className={HomePage_ls.HomePageBox7_databox_d19}
          />
          <div className={HomePage_ls.HomePageBox7_databox_d20}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q2 2023</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              Metaverse & NFT Tools, incl. Oculus Tools, WormholesChain
              Metaverse APl
            </p>
          </div>
          <div className={HomePage_ls.HomePageBox7_databox_d21}>
            <div className={HomePage_ls.HomePageBox7_databox_dy}>
              {/* 圆 */}
            </div>
            <p className={HomePage_ls.HomePageBox7_databox_dname}>Q4 2023</p>
            <p className={HomePage_ls.HomePageBox7_databox_dtext}>
              Metaverse Application Promotion &<br /> Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
