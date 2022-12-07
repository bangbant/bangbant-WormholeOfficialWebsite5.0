import MandraCapital_ls from './MandraCapitalApp.less';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function MandraCapital(props) {
  const [capitaldata, setCapitaldata] = useState(props.location.state || 1);
  const [blockleft, setBlockleft] = useState(0);
  const [bottomboxcolor1, setBottomboxcolor1] = useState('#A486FA');
  const [bottomboxcolor2, setBottomboxcolor2] = useState('#B7B7B9');
  const [bottomboxcolor3, setBottomboxcolor3] = useState('#B7B7B9');
  const { current, setCurrent } = useState(0);
  const [blockArr, setBlockArr] = useState([
    {
      index: 0,
      active: true,
    },
    {
      index: 1,
      active: false,
    },
    {
      index: 2,
      active: false,
    },
    {
      index: 3,
      active: false,
    },
    {
      index: 4,
      active: false,
    },
    {
      index: 5,
      active: false,
    },
    {
      index: 6,
      active: false,
    },
  ]);
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
  const inputElement = useRef();
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      console.log('afterChange', index);
      let arr = [...blockArr];
      arr.forEach((item, Arrindex) => {
        if (Arrindex == index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
      setBlockArr(arr);
    },
  };
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
          src={require('../../assets/images/MandraCapital/crossApp1104.png')}
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
        </div>
        <div className={MandraCapital_ls.slideBoxOut}>
          <Slider ref={inputElement} {...settings}>
            <div className={MandraCapital_ls.boxItem1}>
              <div className={MandraCapital_ls.OKXBox}>
                <div className={MandraCapital_ls.left}>
                  OKCoin.com Inc. (the "Company") is one of the largest Bitcoin
                  (BTC) and Litecoin (LTC) online trading platforms in the
                  world. The Company also operates Bihang, an online secured
                  super wallet platform that enables cross-border and
                  cross-currency payments.
                </div>
                <div className={MandraCapital_ls.right}>
                  <img
                    src={require('../../assets/images/MandraCapital/Slice 749.png')}
                  />
                  <div className={MandraCapital_ls.text}>OKX</div>
                </div>
              </div>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo1.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Wormholes<br></br>Blockchain
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    The Wormholes Blockchain solves the blockchain trilemma,
                    which entails a necessary tradeoff between scalability,
                    security, and decentralization, by building the technology
                    to achieve the ideal balance between these three metrics,
                    creating a highly scalable and secure blockchain system that
                    doesn’t sacrifice decentralization.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRight}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo2.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Funshion<br></br>Networks
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Funshion Networks Co., Ltd. (the "Company") owns and
                    operates fun.tv, a rich media streaming and content delivery
                    internet platform in China.
                  </div>
                </div>
              </div>
            </div>
            <div className={MandraCapital_ls.boxItem2}>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo3.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Pintec<br></br>Technology<br></br>Holdings
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Pintec Technology Holdings Ltd. (formerly Lerong Technology
                    Holdings Ltd., the "Company") is an intelligent financial
                    services platform that utilises big data and digital
                    technologies to provide effective financial solutions to
                    consumers and small businesses. The Company drives new
                    financial product opportunities by expanding financial
                    services to consumers, mitigating risk by decreasing human
                    interference, and breaking down historical financial market
                    barriers.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRight}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo4.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Aurora Mobile<br></br>(listed on<br></br>NASDAQ)
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Aurora Mobile Ltd. (formerly KK Mobile Ltd., the "Company")
                    owns and operates JPush/JiGuang, a leading push platform in
                    China that allows mobile application developers to push
                    information and communicate real time with their installed
                    application base. The Company also operates a data mapping
                    platform and offers data analytics and targeted advertising
                    services.
                  </div>
                </div>
              </div>
            </div>
            <div className={MandraCapital_ls.boxItem2}>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo5.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>Athenex</div>
                  <div className={MandraCapital_ls.itemText}>
                    Athenex, Inc. (formerly Kinex Pharmaceuticals, Inc., the
                    "Company") is a specialty pharmaceutical company focused on
                    the development and commercialisation of next generation
                    therapies for cancer and immunomodulatory diseases. The
                    company has utilised the proprietary platform technologies
                    MimeticaTM, OpalTM and OrascoveryTM to discover new
                    compounds and to build a pipeline of drug candidates with
                    unique mechanisms that address unmet medical needs with
                    large market potential.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRight}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo6.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Avalon<br></br>Biomedical<br></br>Management
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Avalon Biomedical Management Ltd. (the "Company") holds
                    major stakes in several companies that focus on
                    biopharmaceutical development of biologics based on
                    PEGylation technology for second generation of biobetters,
                    genomics profiling, rapid diagnostic technologies, etc.
                  </div>
                </div>
              </div>
            </div>
            <div className={MandraCapital_ls.boxItem2}>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo7.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Guanhao<br></br>Biotech
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Grandhope Biotech Co. Ltd. (formerly Summit LifeSciences
                    Ltd., the "Company") develops and manufactures surgical
                    patches, wound dressings and skin grafts in China with
                    biological material for the treatment of damaged tissue and
                    organs.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRight}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo8.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    GCL-Poly<br></br>Energy<br></br>Holdings
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    GCL Solar Energy Technology Holdings Inc. (formerly GCL
                    Silicon Technology Holdings Inc., the "Company") is the
                    largest manufacturer of polysilicon and silicon wafers in
                    the world. As at the end of 2011, its operating subsidiaries
                    in China have total production capacity per annum of 65,000
                    metric tons of polysilicon and 8,000 megawatts of silicon
                    wafers.
                  </div>
                </div>
              </div>
            </div>
            <div className={MandraCapital_ls.boxItem2}>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo9.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    China Crystal<br></br>Technologies
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    China Crystal Technologies Co., Ltd. (the "Company") is one
                    of the largest manufacturers of gallium arsenide crystal and
                    substrates in the world. Its operating subsidiaries in China
                    have total production capacity per annum of over 5,000,000
                    pieces of two-inch equivalent substrates.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRight}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo10.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Sana<br></br>Technology<br></br>Holdings
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Sana Technology Holdings Ltd. (the "Company") develops
                    leading edge power amplifier modules (PAMs) to serve the
                    component requirements of the smart phone and wireless
                    devices markets.
                  </div>
                </div>
              </div>
            </div>
            <div className={MandraCapital_ls.boxItem2}>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo11.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Epi<br></br>Solutions
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Epi Solutions Inc. (the "Company") manufactures high quality
                    epi-wafers with molecular beam epitaxy (MBE) for the
                    compound semiconductor market. The Company has the
                    capability of producing 3" to 6" epi-wafers on GaAs or InP
                    substrates with n-doped or p-doped Al-Ga-In-P-As III-V
                    compound epitaxial layers.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRight}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo12.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Origin<br></br>Laboratories
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Origin Laboratories, Inc. (the "Company") develops leading
                    edge SLOA-SLA (Stereo-Lithography on Assembly) 3D printing
                    enhancement processes, built on Autodesk Ember/Spark's open
                    architecture, to enable the creation of inexpensive,
                    high-quality 3D printed products at massive scale.
                  </div>
                </div>
              </div>
            </div>
            <div className={MandraCapital_ls.boxItem2}>
              <div className={MandraCapital_ls.item}>
                <div className={MandraCapital_ls.itemLeft}>
                  <div className={MandraCapital_ls.itemtopimg}>
                    <img
                      src={require('../../assets/images/MandraCapital/logo13.png')}
                    ></img>
                  </div>
                  <div className={MandraCapital_ls.itemTitle}>
                    Dianji<br></br>Holdings
                  </div>
                  <div className={MandraCapital_ls.itemText}>
                    Dianji Holdings Ltd. (the "Company") owns and markets
                    GK-Express (GKE), a software platform in China for
                    multi-mode enterprise communication.
                  </div>
                </div>
                <div className={MandraCapital_ls.itemRightHide}></div>
              </div>
            </div>
          </Slider>
        </div>
        <div className={MandraCapital_ls.dotBox}>
          {blockArr.map((item, index) => {
            return (
              <div
                className={MandraCapital_ls.dot}
                style={{
                  background: item.active ? '#a486fa' : 'rgba(0,0,0,0.23)',
                }}
                onClick={(index) => {
                  console.log(item, inputElement.current);
                  inputElement.current.slickGoTo(item.index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
