import WormholesOverview_ls from './WormholesOverview.less';
import { ArrowRightOutlined } from '@ant-design/icons';
export default function WormholesOverview() {
  return (
    <>
      <div className={WormholesOverview_ls.WormholesOverviewBox}>
        <div className={WormholesOverview_ls.WormholesOverviewBox_center}>
          <p className={WormholesOverview_ls.WormholesOverviewBox_title}>
            WormholesChain&nbsp;<span>Overview</span>
          </p>
          <p className={WormholesOverview_ls.WormholesOverviewBox_text}>
            WormholesChain solves the blockchain trilemma, which entails a
            necessary tradeoff between scalability, security, and
            decentralization, by building the technology to achieve the ideal
            balance between these three metrics, creating a highly scalable and
            secure blockchain system that doesn’t sacrifice decentralization.
          </p>
          <div className={WormholesOverview_ls.WormholesOverviewBox_bockbox}>
            <div
              className={WormholesOverview_ls.WormholesOverviewBox_bockbox_d1}
            >
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtitle
                }
              >
                DRE Consensus Protocol
              </p>
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtext
                }
              >
                A Dynamic Random Election (DRE) consensus is a set of practical
                Byzantine fault-tolerant (BFT) protocols for completely
                asynchronous environments. A synchronous BFT system utilizes
                broadcast voting and asks all nodes to vote on the validity of
                each block while an asynchronous BFT system achieves a local
                view with a high probability of being a consistent global view
                according to the concepts of distributed common knowledge.
              </p>
              <div
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_button
                }
              >
                <p>More</p>
                <span>
                  <ArrowRightOutlined />
                </span>
              </div>
            </div>
            <div
              className={WormholesOverview_ls.WormholesOverviewBox_bockbox_d2}
            >
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtitle
                }
              >
                Scalable and Flexible Multi-chain and Multi-layer Structure
              </p>
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtext
                }
              >
                The multi-dimensional blockchain mechanism, being inherently
                flexible and scalable, supports many kinds of blockchain
                structures, including single layers, multiple layers, parallel
                independent chains, core chaining chains, homogenous chains,
                heterogeneous chains, mixed heterogeneous chains, or any
                combination of the above.
              </p>
              <div
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_button
                }
              >
                <p>More</p>
                <span>
                  <ArrowRightOutlined />
                </span>
              </div>
            </div>
            <div
              className={WormholesOverview_ls.WormholesOverviewBox_bockbox_d3}
            >
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtitle
                }
              >
                Efficient and Secure Layered Network
              </p>
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtext
                }
              >
                The WormholesChain Network is composed of multiple levels,
                consisting of the Transport Level, Blockchain Level, API Level,
                and Application Level. The Transport Level is for making
                efficient use of network connectivity. The Blockchain Level
                makes decentralization a reality and lays the foundation for the
                token economics that are inherent in most real
                blockchain-related projects. The Blockchain Level provides the
                token economics and provides the mechanism for and keeps track
                of the messages passing between nodes. The API Level is a
                programming abstraction separate from the lower levels and the
                Application Level. The Application Level is a placeholder for
                all applications.
              </p>
              <div
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_button
                }
              >
                <p>More</p>
                <span>
                  <ArrowRightOutlined />
                </span>
              </div>
            </div>
            <div
              className={WormholesOverview_ls.WormholesOverviewBox_bockbox_d4}
            >
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtitle
                }
              >
                Unique Blockchain Ecosystem
              </p>
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtext
                }
              >
                The WormholesChain economy is backed by a two-tier token model
                consisting of the WormholesChain fungible token ERB and
                non-fungible token S-NFT.
              </p>
              <div
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_button
                }
              >
                <p>More</p>
                <span>
                  <ArrowRightOutlined />
                </span>
              </div>
            </div>
            <div
              className={WormholesOverview_ls.WormholesOverviewBox_bockbox_d5}
            >
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtitle
                }
              >
                One-Click NFT Marketplace
              </p>
              <p
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_dtext
                }
              >
                This includes both a means for creators and organizations
                looking to rapidly deploy their own NFT Marketplace – a feature
                we have termed “One-Click NFT Marketplace” – as well as a way
                for game developers to quickly “GameFi” both new and existing
                titles, allowing them to harness the endless potential of the
                blockchain to enrich the experience for users.
              </p>
              <div
                className={
                  WormholesOverview_ls.WormholesOverviewBox_bockbox_button
                }
              >
                <p>More</p>
                <span>
                  <ArrowRightOutlined />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
