export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c0 = 1;
    internal.c1 = 1;
    internal.c2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var A2c_init = internal.Ac - internal.initial_A3c;
    var A2m_init = internal.Am - internal.initial_A3m;
    var N1_init = internal.N - internal.initial_N2;
    var S2_init = internal.S - internal.initial_S1;
    internal.initial_A2c = A2c_init;
    internal.initial_A2m = A2m_init;
    internal.initial_N1 = N1_init;
    internal.initial_S2 = S2_init;
    var state = Array(26).fill(0);
    state[0] = internal.initial_sul_ex;
    state[1] = internal.initial_eth_ex;
    state[2] = internal.initial_oxy_ex;
    state[3] = internal.initial_oxy;
    state[4] = internal.initial_H2O;
    state[5] = internal.initial_A3c;
    state[6] = internal.initial_aps;
    state[7] = internal.initial_PPi;
    state[8] = internal.initial_pap;
    state[9] = internal.initial_sul;
    state[10] = internal.initial_eth;
    state[11] = internal.initial_A2c;
    state[12] = internal.initial_hyd;
    state[13] = internal.initial_cys;
    state[14] = internal.initial_N2;
    state[15] = internal.initial_N1;
    state[16] = internal.initial_aco;
    state[17] = internal.initial_oah;
    state[18] = internal.initial_S1;
    state[19] = internal.initial_S2;
    state[20] = internal.initial_C1;
    state[21] = internal.initial_C2;
    state[22] = internal.initial_A2m;
    state[23] = internal.initial_A3m;
    state[24] = internal.initial_Ho;
    state[25] = internal.initial_Hm;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A3c_init", "A3m_init", "Ac", "aco_init", "Am", "aps_init", "C1_init", "C2_init", "cys_init", "eth_ex_init", "eth_init", "H2O_init", "Hm_init", "Ho_init", "hyd_init", "k_v0", "k_v10", "k_v13", "k11", "k12", "k14", "k15", "k16", "k17", "k18", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Ka", "Kc", "Kh", "m", "n", "N", "N2_init", "oah_init", "oxy_ex_init", "oxy_init", "pap_init", "PPi_init", "S", "S1_init", "sul_ex_init", "sul_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A3c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A3m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ac", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aco_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Am", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aps_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cys_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eth_ex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eth_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ho_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hyd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_v0", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_v10", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_v13", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kh", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oah_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oxy_ex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oxy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pap_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sul_ex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sul_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A3c = internal.A3c_init;
    internal.initial_A3m = internal.A3m_init;
    internal.initial_aco = internal.aco_init;
    internal.initial_aps = internal.aps_init;
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_cys = internal.cys_init;
    internal.initial_eth = internal.eth_init;
    internal.initial_eth_ex = internal.eth_ex_init;
    internal.initial_H2O = internal.H2O_init;
    internal.initial_Hm = internal.Hm_init;
    internal.initial_Ho = internal.Ho_init;
    internal.initial_hyd = internal.hyd_init;
    internal.initial_N2 = internal.N2_init;
    internal.initial_oah = internal.oah_init;
    internal.initial_oxy = internal.oxy_init;
    internal.initial_oxy_ex = internal.oxy_ex_init;
    internal.initial_pap = internal.pap_init;
    internal.initial_PPi = internal.PPi_init;
    internal.initial_S1 = internal.S1_init;
    internal.initial_sul = internal.sul_init;
    internal.initial_sul_ex = internal.sul_ex_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const oxy = state[3];
    const A3c = state[5];
    const aps = state[6];
    const pap = state[8];
    const sul = state[9];
    const eth = state[10];
    const A2c = state[11];
    const hyd = state[12];
    const cys = state[13];
    const N2 = state[14];
    const N1 = state[15];
    const aco = state[16];
    const oah = state[17];
    const S1 = state[18];
    const S2 = state[19];
    const A2m = state[22];
    const A3m = state[23];
    dstatedt[11] = 0 + 0;
    dstatedt[22] = 0 + 0;
    dstatedt[20] = 0;
    dstatedt[21] = 0;
    dstatedt[1] = 0;
    dstatedt[4] = 0;
    dstatedt[25] = 0;
    dstatedt[24] = 0;
    dstatedt[15] = 0 + 0;
    dstatedt[2] = 0;
    dstatedt[7] = 0;
    dstatedt[19] = 0 + 0;
    dstatedt[0] = 0;
    dstatedt[5] = 0 - 1 * internal.c1 * internal.k2 * sul * A3c - 1 * internal.c1 * internal.k3 * aps * A3c + 1 * internal.c2 * internal.k16 * A3m * A2c - 1 * internal.c1 * internal.k12 * A3c;
    dstatedt[23] = 0 - 1 * internal.c2 * internal.k16 * A3m * A2c + 1 * internal.c2 * 3 * internal.k11 * N2 * oxy / ((internal.a * N2 + oxy) * (1 + Math.pow((hyd / internal.Kh), (internal.m)))) * A2m / (internal.Ka + A2m);
    dstatedt[16] = 0 + 1 * internal.c1 * internal.k7 * eth * N1 - 1 * internal.c1 * internal.k15 * aco - 1 * internal.c2 * internal.k8 * aco * S2;
    dstatedt[6] = 0 + 1 * internal.c1 * internal.k2 * sul * A3c - 1 * internal.c1 * internal.k3 * aps * A3c;
    dstatedt[13] = 0 + 1 * internal.c1 * internal.k5 * hyd * oah - 1 * internal.c1 * internal.k6 * cys;
    dstatedt[10] = 0 + 1 * internal.c0 * internal.k_v13 - 1 * internal.c1 * internal.k7 * eth * N1;
    dstatedt[12] = 0 + 1 * internal.c1 * internal.k4 * pap * N2 - 1 * internal.c1 * internal.k5 * hyd * oah - 1 * internal.c1 * internal.k17 * hyd;
    dstatedt[14] = 0 - 3 * internal.c1 * internal.k4 * pap * N2 + 2 * internal.c1 * internal.k7 * eth * N1 + 4 * internal.c2 * internal.k9 * S1 * N1 - 1 * internal.c2 * internal.k11 * N2 * oxy / ((internal.a * N2 + oxy) * (1 + Math.pow((hyd / internal.Kh), (internal.m))));
    dstatedt[17] = 0 - 1 * internal.c1 * internal.k5 * hyd * oah + 1 * internal.c1 * internal.k15 * aco - 1 * internal.c1 * internal.k18 * oah;
    dstatedt[3] = 0 + 1 * internal.c0 * internal.k_v10 - 1 * internal.c2 * internal.k14 * oxy - 1 * internal.c2 * internal.k11 * N2 * oxy / ((internal.a * N2 + oxy) * (1 + Math.pow((hyd / internal.Kh), (internal.m))));
    dstatedt[8] = 0 + 1 * internal.c1 * internal.k3 * aps * A3c - 1 * internal.c1 * internal.k4 * pap * N2;
    dstatedt[18] = 0 + 1 * internal.c2 * internal.k8 * aco * S2 - 1 * internal.c2 * internal.k9 * S1 * N1;
    dstatedt[9] = 0 + 1 * internal.c0 * internal.k_v0 / (1 + Math.pow((cys / internal.Kc), (internal.n))) - 1 * internal.c1 * internal.k2 * sul * A3c;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "sul_ex", "eth_ex", "oxy_ex", "oxy", "H2O", "A3c", "aps", "PPi", "pap", "sul", "eth", "A2c", "hyd", "cys", "N2", "N1", "aco", "oah", "S1", "S2", "C1", "C2", "A2m", "A3m", "Ho", "Hm"];
    this.metadata.internalOrder = {a: null, A3c_init: null, A3m_init: null, Ac: null, aco_init: null, Am: null, aps_init: null, c0: null, c1: null, C1_init: null, c2: null, C2_init: null, cys_init: null, eth_ex_init: null, eth_init: null, H2O_init: null, Hm_init: null, Ho_init: null, hyd_init: null, initial_A2c: null, initial_A2m: null, initial_A3c: null, initial_A3m: null, initial_aco: null, initial_aps: null, initial_C1: null, initial_C2: null, initial_cys: null, initial_eth: null, initial_eth_ex: null, initial_H2O: null, initial_Hm: null, initial_Ho: null, initial_hyd: null, initial_N1: null, initial_N2: null, initial_oah: null, initial_oxy: null, initial_oxy_ex: null, initial_pap: null, initial_PPi: null, initial_S1: null, initial_S2: null, initial_sul: null, initial_sul_ex: null, k_v0: null, k_v10: null, k_v13: null, k11: null, k12: null, k14: null, k15: null, k16: null, k17: null, k18: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Ka: null, Kc: null, Kh: null, m: null, n: null, N: null, N2_init: null, oah_init: null, oxy_ex_init: null, oxy_init: null, pap_init: null, PPi_init: null, S: null, S1_init: null, sul_ex_init: null, sul_init: null};
    this.metadata.variableOrder = {sul_ex: null, eth_ex: null, oxy_ex: null, oxy: null, H2O: null, A3c: null, aps: null, PPi: null, pap: null, sul: null, eth: null, A2c: null, hyd: null, cys: null, N2: null, N1: null, aco: null, oah: null, S1: null, S2: null, C1: null, C2: null, A2m: null, A3m: null, Ho: null, Hm: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
