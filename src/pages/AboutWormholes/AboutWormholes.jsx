import AboutWormholes_ls from './AboutWormholes.less';

export default function AboutWormholes() {
  return (
    <>
      <div className={AboutWormholes_ls.AboutWormholesBox}>
        <div className={AboutWormholes_ls.AboutWormholesBox_center}>
          <div className={AboutWormholes_ls.AboutWormholesBox_titlebox}>
            <img
              src={require('../../assets/images/AboutWormholes/Slice 869.png')}
              className={AboutWormholes_ls.AboutWormholesBox_titlebox_imgmath}
            />
            <img
              src={require('../../assets/images/AboutWormholes/Slice 871.png')}
              className={AboutWormholes_ls.AboutWormholesBox_titlebox_imgy}
            />
            <p className={AboutWormholes_ls.AboutWormholesBox_titlebox_text}>
              WormholesChain is a multi-dimensional blockchain, in which
              parallel chains are coupled together to form the network,
              supporting parallelism as a way to linearly increase throughput
              with each additional chain added to the system. There is no upper
              bound on network size, and the network size is theoretically
              constrained only by the existing global IP infrastructure.
            </p>
            <span>“Decentralized”</span>
          </div>
        </div>
        <div className={AboutWormholes_ls.AboutWormholesBox_centerbox}>
          <div className={AboutWormholes_ls.AboutWormholesBox_centerbox_center}>
            <img
              src={require('../../assets/images/AboutWormholes/Slice 872.png')}
              className={AboutWormholes_ls.AboutWormholesBox_centerbox_imgy}
            />
            <p className={AboutWormholes_ls.AboutWormholesBox_centerbox_text}>
              The WormholesChain network consists of multiple independent peer
              blockchains. Each parallel blockchain is coupled with the previous
              blocks of other chains at the same or different block height. In a
              general blockchain data structure, ordered blocks are linked
              "back", each referring to the previous block on the chain. Each
              block contains the hash of its parent inside its own header. The
              sequence of hashes linking each block to its parent creates a
              chain going back all the way to the first block ever created,
              known as the genesis block.
            </p>
            <img
              src={require('../../assets/images/AboutWormholes/Slice 870.png')}
              className={AboutWormholes_ls.AboutWormholesBox_centerbox_imgmath}
            />
            <span>“Secure”</span>
          </div>
        </div>
        <div className={AboutWormholes_ls.AboutWormholesBox_bottombox}>
          <p className={AboutWormholes_ls.AboutWormholesBox_bottombox_text}>
            In a multi-dimensional chain, the chain interaction in the topology
            can be structured as an undirected base graph, which can be viewed
            as the orders for coupling the chains together. To make the
            multi-dimensional blockchain more efficient, increase the blockchain
            network throughput, and keep the computation power constant, many
            graphs from graph theory can be considered.
          </p>
          <img
            src={require('../../assets/images/AboutWormholes/Slice 874.png')}
            className={AboutWormholes_ls.AboutWormholesBox_bottombox_imgy}
          />
          <img
            src={require('../../assets/images/AboutWormholes/Slice 873.png')}
            className={AboutWormholes_ls.AboutWormholesBox_bottombox_imgmath}
          />
          <span>
            “Multi-
            <br />
            Dimensional”
          </span>
        </div>
      </div>
    </>
  );
}
