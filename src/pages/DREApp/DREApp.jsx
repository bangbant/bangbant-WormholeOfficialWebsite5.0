import React from 'react';
import styles from './DREApp.less';
export default function DREApp() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.titleBolder}>
          WormholesChain<br></br>
          <span>DRE Consensus</span>
        </div>
        <div className={styles.titleLight}>
          Dynamic Random Election (DRE)-based<br></br>Consensus Mechanism: A set
          of practical<br></br>Byzantine fault-tolerant protocolsfor completely
          <br></br>
          asynchronous environments. Safety properties<br></br>of DRE are
          post-quantum secure.
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.box1}>
          <div className={styles.titleNum}>01</div>
          <div className={styles.titleBolder}>First Round</div>
        </div>
        <div className={styles.box2}>
          <div className={styles.titleNum}>02</div>
          <div className={styles.titleBolder}>Random drop point</div>
          <div className={styles.titleLight}>
            The concatenation algorithm randomly obtains the information of
            three validators
          </div>
          <div className={styles.border}>
            <div className={styles.borderTitle}>
              <div className={styles.circleP}></div>
              <div className={styles.titleLight}>Selected</div>
              <div className={styles.circle}></div>
              <div className={styles.titleLight}>Unselected</div>
            </div>
            <div className={styles.img}>
              <img src={require('../../assets/images/DRE/box2.png')}></img>
              <div className={styles.center}>
                <div className={styles.titleBolder}>Random drop point</div>
                <div
                  className={styles.titleLight}
                  onClick={() => {
                    window.open(
                      'https://www.wormholes.com/docs/Architecture/wormhole.html#dre-consensus-protocol',
                    );
                  }}
                >
                  More Detail
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.titleNum}>03</div>
          <div className={styles.titleBolder}>Select Validator</div>
          <div className={styles.titleLight}>
            Pick the coolest 11 validators<br></br>based on the drop point
          </div>
        </div>
        <div className={styles.box4}>
          <div className={styles.titleNum}>04</div>
          <div className={styles.titleBolder}>Block of generation</div>
          <div className={styles.titleLight}>1. Package Transactions</div>
          <div className={styles.titleLight}>2. Distribute Rewards</div>
          <div className={styles.border}>
            <div className={styles.title}>Distribute Rewards Detail</div>
            <div className={styles.borderTitle}>
              <div className={styles.circle}></div>
              <div className={styles.titleLight}>
                Pick seven consensus<br></br>signers from the previous<br></br>
                block
              </div>
            </div>
            <div className={styles.flexBox}>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <br></br>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/man.png')}></img>
              <br></br>
              <img src={require('../../assets/images/DRE/man.png')}></img>
              <img src={require('../../assets/images/DRE/man.png')}></img>
              <img src={require('../../assets/images/DRE/man.png')}></img>
            </div>
            <div className={styles.borderTitle}>
              <div className={styles.circle}></div>
              <div className={styles.titleLight}>
                Select four exchanges<br></br>at random from the list<br></br>of
                exchanges
              </div>
            </div>
            <div className={styles.flexBox}>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
              <img src={require('../../assets/images/DRE/mansel.png')}></img>
            </div>
            <div className={styles.flexBox2}>
              <div className={styles.flexBox2Left}></div>
              <div className={styles.flexBox2Left}></div>
              <div className={styles.flexBox2Left}></div>
              <div className={styles.flexBox2Left}></div>
            </div>
            <div className={styles.flexBox3}>
              <img src={require('../../assets/images/DRE/chip.png')}></img>
              <img src={require('../../assets/images/DRE/chip.png')}></img>
              <img src={require('../../assets/images/DRE/chip.png')}></img>
              <img src={require('../../assets/images/DRE/chip.png')}></img>
            </div>
          </div>
        </div>
        <div className={styles.box5}>
          <div className={styles.titleNum}>05</div>
          <div className={styles.titleBolder}>Pre-prepared</div>
          <div className={styles.flexBox}>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
          </div>
        </div>

        <div className={styles.box6}>
          <div className={styles.titleNum}>06</div>
          <div className={styles.titleBolder}>Prepared</div>
          <div className={styles.flexBox}>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
          </div>
        </div>
        <div className={styles.box7}>
          <div className={styles.titleNum}>07</div>
          <div className={styles.titleBolder}>Committed</div>
          <div className={styles.flexBox}>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/mansel.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
            <img src={require('../../assets/images/DRE/man.png')}></img>
          </div>
        </div>
        <div className={styles.box8}>
          <div className={styles.titleNum}>08</div>
          <div className={styles.titleBolder}>Insert Block</div>
          <div className={styles.titleLight}>
            Insert success. Final Committed
          </div>
        </div>
        <div className={styles.box9}>
          <div className={styles.titleBolder}>New Round</div>
        </div>
        <div className={styles.box10}>
          <div className={styles.titleBolder}>Round Change</div>
        </div>
        <div className={styles.line1}>
          <img src={require('../../assets/images/DRE/line1.png')}></img>
        </div>
        <div className={styles.line2}>
          <img src={require('../../assets/images/DRE/line2.png')}></img>
        </div>
        <div className={styles.line3}>
          <img src={require('../../assets/images/DRE/line2.png')}></img>
        </div>
        <div className={styles.line4}>
          <img src={require('../../assets/images/DRE/line2.png')}></img>
        </div>
        <div className={styles.line5}>
          <img src={require('../../assets/images/DRE/line5.png')}></img>
        </div>
        <div className={styles.line6}>
          <img src={require('../../assets/images/DRE/line2.png')}></img>
        </div>
        <div className={styles.line7}>
          <img src={require('../../assets/images/DRE/line2.png')}></img>
        </div>
        <div className={styles.line8}>
          <img src={require('../../assets/images/DRE/line2.png')}></img>
        </div>
        <div className={styles.line9}>
          <img src={require('../../assets/images/DRE/line130.png')}></img>
        </div>
        <div className={styles.line10}>
          <img src={require('../../assets/images/DRE/line130.png')}></img>
        </div>
        <div className={styles.line11}>
          <img src={require('../../assets/images/DRE/line1093.png')}></img>
        </div>
        <div className={styles.line12}>
          <img src={require('../../assets/images/DRE/line1095.png')}></img>
        </div>
        <div className={styles.text1} id="fixtext">
          Proposer<br></br>broadcasts<br></br>PRE-PREPARE<br></br>message
        </div>
        <div className={styles.text3} id="fixtext">
          Time out
        </div>
        <div className={styles.text4} id="fixtext">
          Invalid Proposal
        </div>
        <div className={styles.text5} id="fixtext">
          Broadcasts<br></br>PREPARE<br></br>message
        </div>
        <div className={styles.text6} id="fixtext">
          Time out
        </div>
        <div className={styles.text9} id="fixtext">
          Time out
        </div>
        <div className={styles.text8} id="fixtext">
          Broadcasts<br></br>COMMIT<br></br>message
        </div>
        {/* <div className={styles.text7} id="fixtext">
          commit success
        </div> */}
      </div>
    </div>
  );
}
