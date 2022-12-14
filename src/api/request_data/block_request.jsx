import request from '../request';
let host = 'https://api.wormholesscan.com';
// let host = 'http://43.132.176.185:3001'
// export const erbprice = (data) =>{
//     return request.get(`${host}/erb_price`,
//         {params:{
//             block_number:data
//         }}
//     )
// }
//订阅
export const subscriptionPost = (data) => {
  return request.post(`${host}/subscription`, {
    body: JSON.stringify({
      email: data,
    }),
  });
};

//邮箱订阅列表查询
export const subscriptionGet = (data) => {
  return request.get(`${host}/subscription`, {
    params: {
      page: data.page,
      page_size: data.page_size,
    },
  });
};
//erb价格查询
export const erbprice = () => {
  return request.get(`${host}/erb_price`);
};
//总数查询
export const total = () => {
  return request.get(`${host}/totals`);
};
//查询系统NFT周期
export const epoch = () => {
  return request.get(`${host}/epoch/current`);
};
//区块查询
export const block = (data) => {
  return request.get(`${host}/block/page`, {
    params: {
      page: data.page,
      page_size: data.page_size,
    },
  });
};
//单个区块查询
export const soloblock = (data) => {
  return request.get(`${host}/block/${data}`);
};
//单个区块交易列表查询
export const soloblocktransaction = (data) => {
  return request.get(`${host}/transaction/page`, {
    params: {
      page: data.page,
      page_size: data.page_size,
      number: data.number,
    },
  });
};
//奖励人查询
export const rewardperson = () => {
  return request.get(`${host}/reward`, {
    params: {
      page: 1,
      page_size: 11,
    },
  });
};
// 区块奖励人查询
export const blockrewardperson = (data) => {
  return request.get(`${host}/reward/${data}`);
};

//NFT查询
export const nft = (data) => {
  return request.get(`${host}/nft/page`, {
    params: {
      exchanger: data.exchanger,
      owner: data.owner,
      collection_id: data.collection_id,
      page: data.page,
      page_size: data.page_size,
    },
  });
};
//SNFT查询
export const snft = (data) => {
  return request.get(`${host}/snft_meta/page`, {
    params: {
      collection_id: data.collection_id,
      owner: data.owner,
      page: data.page,
      page_size: data.page_size,
      exchanger: data.exchanger,
    },
  });
};
//NFT详情查询
export const nftdetails = (data) => {
  return request.get(`${host}/nft/${data}`);
};
//SNFT详情查询
export const snftdetails = (data) => {
  return request.get(`${host}/snft/${data}`);
};
//SNFT、NFT交易历史查询
export const snft_nft_tx = (data) => {
  return request.get(`${host}/nft/tx/page`, {
    params: {
      address: data.address,
      exchanger: data.exchanger,
      account: data.account,
      page: data.page,
      page_size: data.page_size,
    },
  });
};
//meta查询
export const metainformation = (data) => {
  console.log(data);
  return request.get(`${data}`);
  // return request.get(`${host}${data}`)
};
//交易所查询
export const exchanger = (data) => {
  return request.get(`${host}/exchangers`, {
    params: {
      name: data.name,
      page: data.page,
      page_size: data.page_size,
      order: data.order,
    },
  });
};
//单个交易所查询
export const soloexchanger = (data) => {
  return request.get(`${host}/exchanger/${data}`);
};
//交易所柱状图查询
export const exchangermap = (data) => {
  return request.get(`${host}/exchanger/tx_count/${data}`);
};
//首页折线图查询
export const homepagechart = () => {
  return request.get(`${host}/chart/line`);
};
//NFT折线图查询
export const nftchart = () => {
  return request.get(`${host}/chart/nft`);
};
//validators查询
export const validators = (data) => {
  return request.get(`${host}/validators`, {
    params: {
      page: data.page,
      page_size: data.page_size,
    },
  });
};
