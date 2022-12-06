import MandraCapital_ls from './MandraCapitalApp.less';
import React, { useState, useEffect } from 'react';
export default function MandraCapital(props) {
  const [capitaldata, setCapitaldata] = useState(props.location.state || 1);
  const [blockleft, setBlockleft] = useState(0);
  const [bottomboxcolor1, setBottomboxcolor1] = useState('#A486FA');
  const [bottomboxcolor2, setBottomboxcolor2] = useState('#B7B7B9');
  const [bottomboxcolor3, setBottomboxcolor3] = useState('#B7B7B9');
  console.log(props.location.state);
  useEffect(() => {
    if (blockleft == 0) {
      setBottomboxcolor1('#A486FA');
      setBottomboxcolor2('#B7B7B9');
      setBottomboxcolor3('#B7B7B9');
    } else if (blockleft == -1200) {
      setBottomboxcolor1('#B7B7B9');
      setBottomboxcolor2('#A486FA');
      setBottomboxcolor3('#B7B7B9');
    } else {
      setBottomboxcolor1('#B7B7B9');
      setBottomboxcolor2('#B7B7B9');
      setBottomboxcolor3('#A486FA');
    }
  }, [blockleft]);
  function bottomboxclick(data) {
    if (capitaldata == 1) {
      if (data == 1) {
        setBottomboxcolor1('#A486FA');
        setBottomboxcolor2('#B7B7B9');
        setBottomboxcolor3('#B7B7B9');
        setBlockleft(0);
      } else if (data == 2) {
        setBottomboxcolor1('#B7B7B9');
        setBottomboxcolor2('#A486FA');
        setBottomboxcolor3('#B7B7B9');
        setBlockleft(-1200);
      } else {
        setBottomboxcolor1('#B7B7B9');
        setBottomboxcolor2('#B7B7B9');
        setBottomboxcolor3('#A486FA');
        setBlockleft(-2400);
      }
    } else {
      if (data == 1) {
        setBottomboxcolor1('#A486FA');
        setBottomboxcolor2('#B7B7B9');
        setBottomboxcolor3('#B7B7B9');
        setBlockleft(0);
      } else if (data == 2) {
        setBottomboxcolor1('#B7B7B9');
        setBottomboxcolor2('#A486FA');
        setBottomboxcolor3('#B7B7B9');
        setBlockleft(-1200);
      }
    }
  }
  function Capitalclick(data) {
    setCapitaldata(data);
    setBlockleft(0);
  }
  //左翻
  function leftclick() {
    if (capitaldata == 1) {
      if (blockleft == -2400) {
        setBlockleft(-1200);
      } else if (blockleft == -1200) {
        setBlockleft(0);
      }
    } else {
      if (blockleft == -1200) {
        setBlockleft(0);
      }
    }
  }
  //右翻
  function rightclick() {
    if (capitaldata == 1) {
      if (blockleft == 0) {
        setBlockleft(-1200);
      } else if (blockleft == -1200) {
        setBlockleft(-2400);
      }
    } else {
      if (blockleft == 0) {
        setBlockleft(-1200);
      }
    }
  }
  return (
    <>
      <div className={MandraCapital_ls.MandraCapitalBox}>
        <div className={MandraCapital_ls.MandraCapitalBox_titlecenter}>
          <div className={MandraCapital_ls.MandraCapitalBox_titlecenter_left}>
            <img
              src={require('../../assets/images/MandraCapital/Group 766@2x.png')}
            />
            <span>
              MANDRA
              <br />
              CAPITAL
            </span>
          </div>
          <div className={MandraCapital_ls.MandraCapitalBox_titlecenter_right}>
            <div></div>
            <span>About us</span>
            <p>
              Mandra Capital is an investment holding company focused on early
              stage opportunities in information technology, life science,
              materials and technologies.
            </p>
          </div>
        </div>
        <img
          className={MandraCapital_ls.MandraCapitalBox_titleimg}
          src={require('../../assets/images/MandraCapital/Slice 1104.png')}
        />
        <div className={MandraCapital_ls.MandraCapitalBox_bottomcenter}>
          <div className={MandraCapital_ls.MandraCapitalBox_bottomcenter_line}>
            {/* 线 */}
          </div>
          <p className={MandraCapital_ls.MandraCapitalBox_bottomcenter_title}>
            Companies
          </p>
          <p className={MandraCapital_ls.MandraCapitalBox_bottomcenter_text}>
            We generally take significant minority stakes in companies.
          </p>
          <div className={MandraCapital_ls.CapitalBox_centerbox_center_rollBox}>
            <div
              onClick={leftclick}
              className={
                MandraCapital_ls.CapitalBox_centerbox_center_rollBox_leftimg
              }
            ></div>
            <div
              className={
                MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wbox
              }
            >
              <div
                className={
                  MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig
                }
                style={{ marginLeft: `${blockleft}px` }}
              >
                {/* 1 */}
                <div
                  className={
                    MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div
                  }
                >
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d1
                    }
                  >
                    <img
                      src={require('../../assets/images/MandraCapital/Slice 749.png')}
                    />
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d1imgtext
                      }
                    >
                      OKX
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_text
                      }
                    >
                      OKCoin.com Inc. (the "Company") is one of the largest
                      Bitcoin (BTC) and Litecoin (LTC) online trading platforms
                      in the world. The Company also operates Bihang, an online
                      secured super wallet platform that enables cross-border
                      and cross-currency payments.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 752.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Wormholes Blockchain
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      The Wormholes Blockchain solves the blockchain trilemma,
                      which entails a necessary tradeoff between scalability,
                      security, and decentralization, by building the technology
                      to achieve the ideal balance between these three metrics,
                      creating a highly scalable and secure blockchain system
                      that doesn’t sacrifice decentralization.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 777.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Funshion Networks
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Funshion Networks Co., Ltd. (the "Company") owns and
                      operates fun.tv, a rich media streaming and content
                      delivery internet platform in China.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 778.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Pintec Technology Holdings
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Pintec Technology Holdings Ltd. (formerly Lerong
                      Technology Holdings Ltd., the "Company") is an intelligent
                      financial services platform that utilises big data and
                      digital technologies to provide effective financial
                      solutions to consumers and small businesses. The Company
                      drives new financial product opportunities by expanding
                      financial services to consumers, mitigating risk by
                      decreasing human interference, and breaking down
                      historical financial market barriers.
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div
                  className={
                    MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div
                  }
                >
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 761.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Aurora Mobile (listed on NASDAQ)
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Aurora Mobile Ltd. (formerly KK Mobile Ltd., the
                      "Company") owns and operates JPush/JiGuang, a leading push
                      platform in China that allows mobile application
                      developers to push information and communicate real time
                      with their installed application base. The Company also
                      operates a data mapping platform and offers data analytics
                      and targeted advertising services.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 780.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Athenex
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Athenex, Inc. (formerly Kinex Pharmaceuticals, Inc., the
                      "Company") is a specialty pharmaceutical company focused
                      on the development and commercialisation of next
                      generation therapies for cancer and immunomodulatory
                      diseases. The company has utilised the proprietary
                      platform technologies MimeticaTM, OpalTM and OrascoveryTM
                      to discover new compounds and to build a pipeline of drug
                      candidates with unique mechanisms that address unmet
                      medical needs with large market potential.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 789.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Avalon Biomedical Management
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Avalon Biomedical Management Ltd. (the "Company") holds
                      major stakes in several companies that focus on
                      biopharmaceutical development of biologics based on
                      PEGylation technology for second generation of biobetters,
                      genomics profiling, rapid diagnostic technologies, etc.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 781.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Guanhao Biotech
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Grandhope Biotech Co. Ltd. (formerly Summit LifeSciences
                      Ltd., the "Company") develops and manufactures surgical
                      patches, wound dressings and skin grafts in China with
                      biological material for the treatment of damaged tissue
                      and organs.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 782.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      GCL-Poly Energy Holdings
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      GCL Solar Energy Technology Holdings Inc. (formerly GCL
                      Silicon Technology Holdings Inc., the "Company") is the
                      largest manufacturer of polysilicon and silicon wafers in
                      the world. As at the end of 2011, its operating
                      subsidiaries in China have total production capacity per
                      annum of 65,000 metric tons of polysilicon and 8,000
                      megawatts of silicon wafers.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 783.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      China Crystal Technologies
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      China Crystal Technologies Co., Ltd. (the "Company") is
                      one of the largest manufacturers of gallium arsenide
                      crystal and substrates in the world. Its operating
                      subsidiaries in China have total production capacity per
                      annum of over 5,000,000 pieces of two-inch equivalent
                      substrates.
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div
                  className={
                    MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div
                  }
                >
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 784.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Sana Technology Holdings
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Sana Technology Holdings Ltd. (the "Company") develops
                      leading edge power amplifier modules (PAMs) to serve the
                      component requirements of the smart phone and wireless
                      devices markets.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 785.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Epi Solutions
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Epi Solutions Inc. (the "Company") manufactures high
                      quality epi-wafers with molecular beam epitaxy (MBE) for
                      the compound semiconductor market. The Company has the
                      capability of producing 3" to 6" epi-wafers on GaAs or InP
                      substrates with n-doped or p-doped Al-Ga-In-P-As III-V
                      compound epitaxial layers.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 786.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Origin Laboratories
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Origin Laboratories, Inc. (the "Company") develops leading
                      edge SLOA-SLA (Stereo-Lithography on Assembly) 3D printing
                      enhancement processes, built on Autodesk Ember/Spark's
                      open architecture, to enable the creation of inexpensive,
                      high-quality 3D printed products at massive scale.
                    </p>
                  </div>
                  <div
                    className={
                      MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2
                    }
                  >
                    <div style={{ minHeight: '60px' }}>
                      <img
                        src={require('../../assets/images/MandraCapital/Slice 787.png')}
                      />
                    </div>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_name
                      }
                    >
                      Dianji Holdings
                    </p>
                    <p
                      className={
                        MandraCapital_ls.CapitalBox_centerbox_center_rollBox_wboxbig_div_d2_text
                      }
                    >
                      Dianji Holdings Ltd. (the "Company") owns and markets
                      GK-Express (GKE), a software platform in China for
                      multi-mode enterprise communication.
                    </p>
                  </div>
                  <div style={{ width: '340px', height: '305px' }}></div>
                  <div style={{ width: '340px', height: '305px' }}></div>
                </div>
              </div>
            </div>
            <div
              onClick={rightclick}
              className={
                MandraCapital_ls.CapitalBox_centerbox_center_rollBox_rightimg
              }
            ></div>
          </div>
          <div
            className={
              MandraCapital_ls.CapitalBox_centerbox_center_rollBox_bottombox
            }
          >
            <div
              className={
                MandraCapital_ls.CapitalBox_centerbox_center_rollBox_bottombox_d
              }
              onClick={bottomboxclick.bind(this, 1)}
              style={{ backgroundColor: bottomboxcolor1 }}
            ></div>
            <div
              className={
                MandraCapital_ls.CapitalBox_centerbox_center_rollBox_bottombox_d
              }
              onClick={bottomboxclick.bind(this, 2)}
              style={{ backgroundColor: bottomboxcolor2 }}
            ></div>
            <div
              className={
                MandraCapital_ls.CapitalBox_centerbox_center_rollBox_bottombox_d
              }
              onClick={bottomboxclick.bind(this, 3)}
              style={{ backgroundColor: bottomboxcolor3 }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
