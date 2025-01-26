export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var cdc14_init = internal.initial_cdc14_total - internal.initial_net1cdc14;
    var Cdc14x2_init = internal.initial_cdc14 * 2;
    var cdk_init = internal.initial_clb2 / (1 + internal.initial_Inh);
    var net1p_init = internal.initial_net1_total - internal.initial_net1 - internal.initial_net1cdc14;
    var pp2a_init = (1 + internal.kpp * internal.ki * internal.initial_separase) / (1 + internal.ki * internal.initial_separase) * internal.initial_pp2a_total;
    var securin_init = internal.initial_securin_total - internal.initial_securin_separase;
    var separase_init = internal.initial_separase_total - internal.initial_securin_separase;
    internal.initial_cdc14 = cdc14_init;
    internal.initial_Cdc14x2 = Cdc14x2_init;
    internal.initial_cdk = cdk_init;
    internal.initial_net1p = net1p_init;
    internal.initial_pp2a = pp2a_init;
    internal.initial_securin = securin_init;
    internal.initial_separase = separase_init;
    var state = Array(27).fill(0);
    state[0] = internal.initial_clb2;
    state[1] = internal.initial_cdc20;
    state[2] = internal.initial_cdh1;
    state[3] = internal.initial_securin_total;
    state[4] = internal.initial_separase_total;
    state[5] = internal.initial_securin_separase;
    state[6] = internal.initial_net1;
    state[7] = internal.initial_net1p;
    state[8] = internal.initial_cdc14;
    state[9] = internal.initial_net1cdc14;
    state[10] = internal.initial_polo_total;
    state[11] = internal.initial_cdk;
    state[12] = internal.initial_pp2a;
    state[13] = internal.initial_men;
    state[14] = internal.initial_polo;
    state[15] = internal.initial_tem1;
    state[16] = internal.initial_cdc15;
    state[17] = internal.initial_pp2a_total;
    state[18] = internal.initial_cdh1_total;
    state[19] = internal.initial_net1_total;
    state[20] = internal.initial_tem1_total;
    state[21] = internal.initial_cdc15_total;
    state[22] = internal.initial_securin;
    state[23] = internal.initial_separase;
    state[24] = internal.initial_Inh;
    state[25] = internal.initial_cdc14_total;
    state[26] = internal.initial_Cdc14x2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["cdc14_total_init", "cdc15_init", "cdc15_total_init", "cdc20_init", "cdh1_init", "cdh1_total_init", "clb2_init", "Inh_init", "J_cdc15", "J_cdh", "J_polo", "J_tem1", "Jnet", "ka_cdc15", "ka_cdc15_p", "ka_polo", "ka_polo_p", "ka_tem", "ka_tem_p", "kd", "kd_cdc20", "kd_cdc20_p", "kd_cdh", "kd_cdh_p", "kd_clb2", "kd_clb2_p", "kd_clb2_pp", "kd_p", "kd_polo", "kd_polo_p", "kd_securin", "kd_securin_p", "kd_separase", "ki", "ki_cdc15", "ki_cdc15_p", "ki_polo", "ki_tem", "kitem_p", "kp", "kp_cdh_p", "kp_p", "kpp", "ks_cdc20", "ks_clb2", "ks_polo", "ks_securin", "ks_separase", "l_a_net", "l_d_net", "la_men", "la_securin", "ld_men", "ld_securin", "men_init", "net1_init", "net1_total_init", "net1cdc14_init", "polo_init", "polo_total_init", "pp2a_total_init", "securin_separase_init", "securin_total_init", "separase_total_init", "tem1_init", "tem1_total_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "cdc14_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cdc15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cdc15_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cdc20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cdh1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cdh1_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "clb2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J_cdc15", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J_cdh", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J_polo", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J_tem1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jnet", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_cdc15", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_cdc15_p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_polo", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_polo_p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_tem", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_tem_p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_cdc20", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_cdc20_p", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_cdh", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_cdh_p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_clb2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_clb2_p", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_clb2_pp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_p", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_polo", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_polo_p", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_securin", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_securin_p", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_separase", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_cdc15", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_cdc15_p", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_polo", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_tem", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kitem_p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp_cdh_p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp_p", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpp", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks_cdc20", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks_clb2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks_polo", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks_securin", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks_separase", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_a_net", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_d_net", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "la_men", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "la_securin", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ld_men", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ld_securin", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "men_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "net1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "net1_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "net1cdc14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "polo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "polo_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp2a_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "securin_separase_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "securin_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "separase_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tem1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tem1_total_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_cdc14_total = internal.cdc14_total_init;
    internal.initial_cdc15 = internal.cdc15_init;
    internal.initial_cdc15_total = internal.cdc15_total_init;
    internal.initial_cdc20 = internal.cdc20_init;
    internal.initial_cdh1 = internal.cdh1_init;
    internal.initial_cdh1_total = internal.cdh1_total_init;
    internal.initial_clb2 = internal.clb2_init;
    internal.initial_Inh = internal.Inh_init;
    internal.initial_men = internal.men_init;
    internal.initial_net1 = internal.net1_init;
    internal.initial_net1_total = internal.net1_total_init;
    internal.initial_net1cdc14 = internal.net1cdc14_init;
    internal.initial_polo = internal.polo_init;
    internal.initial_polo_total = internal.polo_total_init;
    internal.initial_pp2a_total = internal.pp2a_total_init;
    internal.initial_securin_separase = internal.securin_separase_init;
    internal.initial_securin_total = internal.securin_total_init;
    internal.initial_separase_total = internal.separase_total_init;
    internal.initial_tem1 = internal.tem1_init;
    internal.initial_tem1_total = internal.tem1_total_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const clb2 = state[0];
    const cdc20 = state[1];
    const cdh1 = state[2];
    const securin_total = state[3];
    const separase_total = state[4];
    const securin_separase = state[5];
    const net1 = state[6];
    const net1p = state[7];
    const cdc14 = state[8];
    const net1cdc14 = state[9];
    const polo_total = state[10];
    const cdk = state[11];
    const pp2a = state[12];
    const men = state[13];
    const polo = state[14];
    const tem1 = state[15];
    const cdc15 = state[16];
    const cdh1_total = state[18];
    const tem1_total = state[20];
    const cdc15_total = state[21];
    const securin = state[22];
    const separase = state[23];
    dstatedt[8] = 0 + 0;
    dstatedt[25] = 0;
    dstatedt[26] = 0 + 0;
    dstatedt[21] = 0;
    dstatedt[18] = 0;
    dstatedt[11] = 0 + 0;
    dstatedt[24] = 0;
    dstatedt[19] = 0;
    dstatedt[7] = 0 + 0;
    dstatedt[12] = 0 + 0;
    dstatedt[17] = 0;
    dstatedt[22] = 0 + 0;
    dstatedt[23] = 0 + 0;
    dstatedt[20] = 0;
    dstatedt[16] = 0 + 1 * internal.nucleus * ((internal.ka_cdc15 + internal.ka_cdc15_p * cdc14) * (cdc15_total - cdc15) / (internal.J_cdc15 + cdc15_total - cdc15)) - 1 * internal.nucleus * ((internal.ki_cdc15 + internal.ki_cdc15_p * cdk) * cdc15 / (internal.J_cdc15 + cdc15));
    dstatedt[1] = 0 + 1 * internal.nucleus * (internal.ks_cdc20) - 1 * internal.nucleus * ((internal.kd_cdc20 + internal.kd_cdc20_p * cdh1) * cdc20);
    dstatedt[2] = 0 + 1 * internal.nucleus * ((internal.kd_cdh + internal.kd_cdh_p * cdc14) * (cdh1_total - cdh1) / (internal.J_cdh + cdh1_total - cdh1)) - 1 * internal.nucleus * (internal.kp_cdh_p * cdk * cdh1 / (internal.J_cdh + cdh1));
    dstatedt[0] = 0 + 1 * internal.nucleus * (internal.ks_clb2) - 1 * internal.nucleus * ((internal.kd_clb2 + internal.kd_clb2_p * cdc20 + internal.kd_clb2_pp * cdh1) * clb2);
    dstatedt[13] = 0 + 1 * internal.nucleus * (internal.la_men * (tem1 - men) * (cdc15 - men)) - 1 * internal.nucleus * (internal.ld_men * men) - 1 * internal.nucleus * ((internal.ki_tem + internal.kitem_p * pp2a) * men / (internal.J_tem1 + tem1)) - 1 * internal.nucleus * ((internal.ki_cdc15 + internal.ki_cdc15_p * cdk) * men / (internal.J_cdc15 + cdc15));
    dstatedt[6] = 0 + 1 * internal.nucleus * ((internal.kd_p * cdc14 + internal.kd * pp2a) * net1p / (internal.Jnet + net1p)) - 1 * internal.nucleus * ((internal.kp * cdk + internal.kp_p * men) * net1 / (internal.Jnet + net1 + net1cdc14)) - 1 * internal.nucleus * (internal.l_a_net * net1 * cdc14 - internal.l_d_net * net1cdc14);
    dstatedt[9] = 0 + 1 * internal.nucleus * (internal.l_a_net * net1 * cdc14 - internal.l_d_net * net1cdc14) - 1 * internal.nucleus * ((internal.kp * cdk + internal.kp_p * men) * net1cdc14 / (internal.Jnet + net1 + net1cdc14));
    dstatedt[14] = 0 + 1 * internal.nucleus * ((internal.ka_polo + internal.ka_polo_p * cdk) * (polo_total - polo) / (internal.J_polo + polo_total - polo)) - 1 * internal.nucleus * (internal.ki_polo * polo / (internal.J_polo + polo)) - 1 * internal.nucleus * ((internal.kd_polo + internal.kd_polo_p * cdh1) * polo);
    dstatedt[10] = 0 + 1 * internal.nucleus * (internal.ks_polo) - 1 * internal.nucleus * ((internal.kd_polo + internal.kd_polo_p * cdh1) * polo_total);
    dstatedt[5] = 0 + 1 * internal.nucleus * (internal.la_securin * securin * separase) - 1 * internal.nucleus * ((internal.ld_securin + internal.kd_separase + internal.kd_securin + internal.kd_securin_p * cdc20) * securin_separase);
    dstatedt[3] = 0 + 1 * internal.nucleus * (internal.ks_securin) - 1 * internal.nucleus * ((internal.kd_securin + internal.kd_securin_p * cdc20) * securin_total);
    dstatedt[4] = 0 + 1 * internal.nucleus * (internal.ks_separase) - 1 * internal.nucleus * internal.kd_separase * separase_total;
    dstatedt[15] = 0 + 1 * internal.nucleus * ((internal.ka_tem + internal.ka_tem_p * polo) * (tem1_total - tem1) / (internal.J_tem1 + tem1_total - tem1)) - 1 * internal.nucleus * ((internal.ki_tem + internal.kitem_p * pp2a) * tem1 / (internal.J_tem1 + tem1));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "clb2", "cdc20", "cdh1", "securin_total", "separase_total", "securin_separase", "net1", "net1p", "cdc14", "net1cdc14", "polo_total", "cdk", "pp2a", "men", "polo", "tem1", "cdc15", "pp2a_total", "cdh1_total", "net1_total", "tem1_total", "cdc15_total", "securin", "separase", "Inh", "cdc14_total", "Cdc14x2"];
    this.metadata.internalOrder = {cdc14_total_init: null, cdc15_init: null, cdc15_total_init: null, cdc20_init: null, cdh1_init: null, cdh1_total_init: null, clb2_init: null, Inh_init: null, initial_cdc14: null, initial_cdc14_total: null, initial_Cdc14x2: null, initial_cdc15: null, initial_cdc15_total: null, initial_cdc20: null, initial_cdh1: null, initial_cdh1_total: null, initial_cdk: null, initial_clb2: null, initial_Inh: null, initial_men: null, initial_net1: null, initial_net1_total: null, initial_net1cdc14: null, initial_net1p: null, initial_polo: null, initial_polo_total: null, initial_pp2a: null, initial_pp2a_total: null, initial_securin: null, initial_securin_separase: null, initial_securin_total: null, initial_separase: null, initial_separase_total: null, initial_tem1: null, initial_tem1_total: null, J_cdc15: null, J_cdh: null, J_polo: null, J_tem1: null, Jnet: null, ka_cdc15: null, ka_cdc15_p: null, ka_polo: null, ka_polo_p: null, ka_tem: null, ka_tem_p: null, kd: null, kd_cdc20: null, kd_cdc20_p: null, kd_cdh: null, kd_cdh_p: null, kd_clb2: null, kd_clb2_p: null, kd_clb2_pp: null, kd_p: null, kd_polo: null, kd_polo_p: null, kd_securin: null, kd_securin_p: null, kd_separase: null, ki: null, ki_cdc15: null, ki_cdc15_p: null, ki_polo: null, ki_tem: null, kitem_p: null, kp: null, kp_cdh_p: null, kp_p: null, kpp: null, ks_cdc20: null, ks_clb2: null, ks_polo: null, ks_securin: null, ks_separase: null, l_a_net: null, l_d_net: null, la_men: null, la_securin: null, ld_men: null, ld_securin: null, men_init: null, net1_init: null, net1_total_init: null, net1cdc14_init: null, nucleus: null, polo_init: null, polo_total_init: null, pp2a_total_init: null, securin_separase_init: null, securin_total_init: null, separase_total_init: null, tem1_init: null, tem1_total_init: null};
    this.metadata.variableOrder = {clb2: null, cdc20: null, cdh1: null, securin_total: null, separase_total: null, securin_separase: null, net1: null, net1p: null, cdc14: null, net1cdc14: null, polo_total: null, cdk: null, pp2a: null, men: null, polo: null, tem1: null, cdc15: null, pp2a_total: null, cdh1_total: null, net1_total: null, tem1_total: null, cdc15_total: null, securin: null, separase: null, Inh: null, cdc14_total: null, Cdc14x2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}