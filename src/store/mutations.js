import { Api, Rpc } from 'eosjs';
import { network } from '@/config';

/*
    Before any move 在作出修改之前
    Read more about VueX mutation: https://vuex.vuejs.org/zh/guide/mutation.html
    查阅更多关于 VueX 的 mutation: https://vuex.vuejs.org/zh/guide/mutation.html
*/

export default {
  setScatter(state, scatter) {
    state.scatter = scatter;
    const rpc = new Rpc.JsonRpc(`${network.protocol}://${network.host}:${network.port}`);
    state.rpc = rpc;
    state.eos = scatter.eos(network, Api, { rpc });
  },
  setBalance(state, { symbol, balance }) {
    state.balance[symbol] = balance || `0.0000 ${symbol.toUpperCase()}`;
  },
  setDataLoading(state, loading) {
    state.dataIsLoading = loading;
  },
  setGlobal(state, globalInfo) {
    state.globalInfo = globalInfo;
  },
  changeLang(state, code) {
    state.lang = code;
  },
};
