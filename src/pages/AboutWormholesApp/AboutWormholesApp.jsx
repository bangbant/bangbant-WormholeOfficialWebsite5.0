import AboutWormholes_ls from './AboutWormholesApp.less';

export default function AboutWormholesApp() {
  return (
    <>
      <div className={AboutWormholes_ls.AboutWormholesBox}>
        <div className={AboutWormholes_ls.AboutWormholesBox_center}>
          <div className={AboutWormholes_ls.titlebox}>
            <img
              src={require('../../assets/images/AboutWormholes/Slice 869.png')}
              className={AboutWormholes_ls.number}
            />
            <div className={AboutWormholes_ls.title}>“Decentralized”</div>
          </div>

          <img
            src={require('../../assets/images/AboutWormholes/Slice 871.png')}
            className={AboutWormholes_ls.centerimg}
          />
          <div className={AboutWormholes_ls.text}>
            Wormholes is a multi-dimensional blockchain, in which parallel
            chains are coupled together to form the network, supporting
            parallelism as a way to linearly increase throughput with each
            additional chain added to the system. There is no upper bound on
            network size, and the network size is theoretically constrained only
            by the existing global IP infrastructure.
          </div>
          <div className={AboutWormholes_ls.titlebox}>
            <img
              src={require('../../assets/images/AboutWormholes/Slice 870.png')}
              className={AboutWormholes_ls.number}
            />
            <div className={AboutWormholes_ls.title}>“Secure”</div>
          </div>
          <div className={AboutWormholes_ls.text}>
            The Wormholes network consists of multiple independent peer
            blockchains. Each parallel blockchain is coupled with the previous
            blocks of other chains at the same or different block height. In a
            general blockchain data structure, ordered blocks are linked "back",
            each referring to the previous block on the chain. Each block
            contains the hash of its parent inside its own header. The sequence
            of hashes linking each block to its parent creates a chain going
            back all the way to the first block ever created, known as the
            genesis block.
          </div>
          <img
            src={require('../../assets/images/AboutWormholes/Slice 872.png')}
            className={AboutWormholes_ls.centerimg}
            style={{
              marginTop: '20px',
            }}
          />

          <div className={AboutWormholes_ls.titlebox}>
            <img
              src={require('../../assets/images/AboutWormholes/Slice 873.png')}
              className={AboutWormholes_ls.number}
            />
            <div className={AboutWormholes_ls.title}>“Multi-Dimensional”</div>
          </div>
          <div className={AboutWormholes_ls.text}>
            In a multi-dimensional chain, the chain interaction in the topology
            can be structured as an undirected base graph, which can be viewed
            as the orders for coupling the chains together. To make the
            multi-dimensional blockchain more efficient, increase the blockchain
            network throughput, and keep the computation power constant, many
            graphs from graph theory can be considered.
          </div>
          <img
            src={require('../../assets/images/AboutWormholes/Slice 874.png')}
            className={AboutWormholes_ls.centerimg}
            style={{
              width: '292px',
              marginTop: '20px',
            }}
          />
        </div>
      </div>
    </>
  );
}
