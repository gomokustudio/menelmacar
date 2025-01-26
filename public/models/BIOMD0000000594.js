export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Tyr_init = internal.initial_EGFR_10UU + internal.initial_EGFR_10CU + internal.initial_EGFR_10LU + 1 * (internal.initial_EGFR_01UU + internal.initial_EGFR_01UG + internal.initial_EGFR_01UL) + 2 * (internal.initial_EGFR_11UU + internal.initial_EGFR_11CU + internal.initial_EGFR_11LU + internal.initial_EGFR_11UG + internal.initial_EGFR_11UL + internal.initial_EGFR_11CG + internal.initial_EGFR_11CC + internal.initial_EGFR_11LG) + 2 * (internal.initial_EGFR_02UU + internal.initial_EGFR_02UG + internal.initial_EGFR_02UL) + 3 * (internal.initial_EGFR_12UU + internal.initial_EGFR_12CU + internal.initial_EGFR_12LU + internal.initial_EGFR_12UG + internal.initial_EGFR_12UL + internal.initial_EGFR_12CG + internal.initial_EGFR_12CC + internal.initial_EGFR_12LG);
    var TyrNorm_init = internal.initial_Tyr / internal.PYMax;
    var Ub_init = internal.initial_EGFR_11CC + internal.initial_EGFR_12CC + internal.initial_EGFR_10CU + internal.initial_EGFR_11CU + internal.initial_EGFR_12CU + internal.initial_EGFR_10LU + internal.initial_EGFR_11LU + internal.initial_EGFR_12LU + internal.initial_EGFR_11CG + internal.initial_EGFR_12CG + internal.initial_EGFR_11LG + internal.initial_EGFR_12LG;
    var UbNorm_init = internal.initial_Ub / (internal.UbMax * internal.CblFactor);
    internal.initial_Tyr = Tyr_init;
    internal.initial_TyrNorm = TyrNorm_init;
    internal.initial_Ub = Ub_init;
    internal.initial_UbNorm = UbNorm_init;
    var state = Array(33).fill(0);
    state[0] = internal.initial_Cbl;
    state[1] = internal.initial_Grb2;
    state[2] = internal.initial_CG;
    state[3] = internal.initial_Tyr;
    state[4] = internal.initial_Ub;
    state[5] = internal.initial_TyrNorm;
    state[6] = internal.initial_UbNorm;
    state[7] = internal.initial_EGFR_00UU;
    state[8] = internal.initial_EGFR_10UU;
    state[9] = internal.initial_EGFR_10CU;
    state[10] = internal.initial_EGFR_10LU;
    state[11] = internal.initial_EGFR_01UU;
    state[12] = internal.initial_EGFR_01UG;
    state[13] = internal.initial_EGFR_01UL;
    state[14] = internal.initial_EGFR_11UU;
    state[15] = internal.initial_EGFR_11CU;
    state[16] = internal.initial_EGFR_11LU;
    state[17] = internal.initial_EGFR_11UG;
    state[18] = internal.initial_EGFR_11UL;
    state[19] = internal.initial_EGFR_11CG;
    state[20] = internal.initial_EGFR_11CC;
    state[21] = internal.initial_EGFR_11LG;
    state[22] = internal.initial_EGFR_02UU;
    state[23] = internal.initial_EGFR_02UG;
    state[24] = internal.initial_EGFR_02UL;
    state[25] = internal.initial_EGFR_12UU;
    state[26] = internal.initial_EGFR_12CU;
    state[27] = internal.initial_EGFR_12LU;
    state[28] = internal.initial_EGFR_12UG;
    state[29] = internal.initial_EGFR_12UL;
    state[30] = internal.initial_EGFR_12CG;
    state[31] = internal.initial_EGFR_12CC;
    state[32] = internal.initial_EGFR_12LG;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cbl_init", "CblFactor", "CblT", "CblWT", "CG_init", "EGFR_00UU_init", "EGFR_01UG_init", "EGFR_01UL_init", "EGFR_01UU_init", "EGFR_02UG_init", "EGFR_02UL_init", "EGFR_02UU_init", "EGFR_10CU_init", "EGFR_10LU_init", "EGFR_10UU_init", "EGFR_11CC_init", "EGFR_11CG_init", "EGFR_11CU_init", "EGFR_11LG_init", "EGFR_11LU_init", "EGFR_11UG_init", "EGFR_11UL_init", "EGFR_11UU_init", "EGFR_12CC_init", "EGFR_12CG_init", "EGFR_12CU_init", "EGFR_12LG_init", "EGFR_12LU_init", "EGFR_12UG_init", "EGFR_12UL_init", "EGFR_12UU_init", "floc", "Grb2_init", "Grb2T", "K45", "Kcg", "kkinbase", "kptp", "ku45", "kucg", "Ltot", "nH", "PYMax", "RT", "UbMax", "xT"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cbl_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CblFactor", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CblT", internal, 0.01464, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CblWT", internal, 0.01464, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_00UU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_01UG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_01UL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_01UU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_02UG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_02UL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_02UU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_10CU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_10LU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_10UU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11CC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11CG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11CU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11LG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11LU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11UG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11UL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_11UU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12CC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12CG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12CU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12LG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12LU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12UG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12UL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_12UU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "floc", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Grb2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Grb2T", internal, 3.3199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K45", internal, 0.20136100000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcg", internal, 0.0063559999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kkinbase", internal, 0.075915499999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kptp", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ku45", internal, 0.001011, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kucg", internal, 0.30927100000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ltot", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nH", internal, 1.1299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PYMax", internal, 2.2794932229999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RT", internal, 0.83299999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UbMax", internal, 0.014305999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xT", internal, 4.5918099999999997, -Infinity, Infinity, false);
    internal.initial_Cbl = internal.Cbl_init;
    internal.initial_CG = internal.CG_init;
    internal.initial_EGFR_00UU = internal.EGFR_00UU_init;
    internal.initial_EGFR_01UG = internal.EGFR_01UG_init;
    internal.initial_EGFR_01UL = internal.EGFR_01UL_init;
    internal.initial_EGFR_01UU = internal.EGFR_01UU_init;
    internal.initial_EGFR_02UG = internal.EGFR_02UG_init;
    internal.initial_EGFR_02UL = internal.EGFR_02UL_init;
    internal.initial_EGFR_02UU = internal.EGFR_02UU_init;
    internal.initial_EGFR_10CU = internal.EGFR_10CU_init;
    internal.initial_EGFR_10LU = internal.EGFR_10LU_init;
    internal.initial_EGFR_10UU = internal.EGFR_10UU_init;
    internal.initial_EGFR_11CC = internal.EGFR_11CC_init;
    internal.initial_EGFR_11CG = internal.EGFR_11CG_init;
    internal.initial_EGFR_11CU = internal.EGFR_11CU_init;
    internal.initial_EGFR_11LG = internal.EGFR_11LG_init;
    internal.initial_EGFR_11LU = internal.EGFR_11LU_init;
    internal.initial_EGFR_11UG = internal.EGFR_11UG_init;
    internal.initial_EGFR_11UL = internal.EGFR_11UL_init;
    internal.initial_EGFR_11UU = internal.EGFR_11UU_init;
    internal.initial_EGFR_12CC = internal.EGFR_12CC_init;
    internal.initial_EGFR_12CG = internal.EGFR_12CG_init;
    internal.initial_EGFR_12CU = internal.EGFR_12CU_init;
    internal.initial_EGFR_12LG = internal.EGFR_12LG_init;
    internal.initial_EGFR_12LU = internal.EGFR_12LU_init;
    internal.initial_EGFR_12UG = internal.EGFR_12UG_init;
    internal.initial_EGFR_12UL = internal.EGFR_12UL_init;
    internal.initial_EGFR_12UU = internal.EGFR_12UU_init;
    internal.initial_Grb2 = internal.Grb2_init;
    internal.K45P = internal.K45 / internal.floc;
    internal.kb45 = internal.ku45 / internal.K45;
    internal.kbcg = internal.kucg / internal.Kcg;
    internal.KcgP = internal.Kcg / internal.floc;
    internal.kkin = internal.kkinbase * (Math.pow((internal.Ltot), (internal.nH)) / (Math.pow((internal.Ltot), (internal.nH)) + Math.pow((internal.xT), (internal.nH))));
    internal.kptp68 = internal.kptp;
    internal.ku45M = internal.ku45;
    internal.ku68 = internal.ku45;
    internal.kucgM = internal.kucg;
    internal.kb45P = internal.ku45M / internal.K45P;
    internal.kb68 = internal.kb45;
    internal.kbcgP = internal.kucgM / internal.KcgP;
    internal.kkin68 = internal.kkin;
    internal.ku68M = internal.ku45M;
    internal.kb68P = internal.kb45P;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cbl = state[0];
    const Grb2 = state[1];
    const CG = state[2];
    const EGFR_00UU = state[7];
    const EGFR_10UU = state[8];
    const EGFR_10CU = state[9];
    const EGFR_10LU = state[10];
    const EGFR_01UU = state[11];
    const EGFR_01UG = state[12];
    const EGFR_01UL = state[13];
    const EGFR_11UU = state[14];
    const EGFR_11CU = state[15];
    const EGFR_11LU = state[16];
    const EGFR_11UG = state[17];
    const EGFR_11UL = state[18];
    const EGFR_11CG = state[19];
    const EGFR_11CC = state[20];
    const EGFR_11LG = state[21];
    const EGFR_02UU = state[22];
    const EGFR_02UG = state[23];
    const EGFR_02UL = state[24];
    const EGFR_12UU = state[25];
    const EGFR_12CU = state[26];
    const EGFR_12LU = state[27];
    const EGFR_12UG = state[28];
    const EGFR_12UL = state[29];
    const EGFR_12CG = state[30];
    const EGFR_12CC = state[31];
    const EGFR_12LG = state[32];
    dstatedt[3] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[4] = 0 + 0;
    dstatedt[6] = 0 + 0;
    dstatedt[0] = 0 - 1 * internal.kbcg * Cbl * Grb2 + 1 * internal.kucg * CG - 1 * internal.kb45 * Cbl * EGFR_10UU + 1 * internal.ku45 * EGFR_10CU - 1 * internal.kbcg * Cbl * EGFR_01UG + 1 * internal.kucg * EGFR_01UL - 1 * internal.kb45 * Cbl * EGFR_11UU + 1 * internal.ku45 * EGFR_11CU - 1 * internal.kb45 * Cbl * EGFR_11UG + 1 * internal.ku45 * EGFR_11CG - 1 * internal.kbcg * Cbl * EGFR_11UG + 1 * internal.kucg * EGFR_11UL - 1 * internal.kbcg * Cbl * EGFR_02UG + 1 * internal.kucg * EGFR_02UL - 1 * internal.kb45 * Cbl * EGFR_12UU + 1 * internal.ku45 * EGFR_12CU - 1 * internal.kb45 * Cbl * EGFR_12UG + 1 * internal.ku45 * EGFR_12CG - 1 * internal.kbcg * Cbl * EGFR_12UG + 1 * internal.kucg * EGFR_12UL;
    dstatedt[2] = 0 + 1 * internal.kbcg * Cbl * Grb2 - 1 * internal.kucg * CG - 1 * internal.kb45 * CG * EGFR_10UU + 1 * internal.ku45 * EGFR_10LU - 1 * internal.kb68 * CG * EGFR_01UU + 1 * internal.ku68 * EGFR_01UL - 1 * internal.kb45 * CG * EGFR_11UU + 1 * internal.ku45 * EGFR_11LU - 1 * internal.kb68 * CG * EGFR_11UU + 1 * internal.ku68 * EGFR_11UL - 1 * internal.kb45 * CG * EGFR_11UG + 1 * internal.ku45 * EGFR_11LG - 1 * 2 * internal.kb68 * CG * EGFR_02UU + 1 * internal.ku68 * EGFR_02UL - 1 * internal.kb45 * CG * EGFR_12UU + 1 * internal.ku45 * EGFR_12LU - 1 * 2 * internal.kb68 * CG * EGFR_12UU + 1 * internal.ku68 * EGFR_12UL - 1 * internal.kb45 * CG * EGFR_12UG + 1 * internal.ku45 * EGFR_12LG;
    dstatedt[7] = 0 + 1 * internal.kptp * EGFR_10UU + 1 * internal.kptp68 * EGFR_01UU - 1 * internal.kkin * EGFR_00UU - 1 * 2 * internal.kkin68 * EGFR_00UU;
    dstatedt[12] = 0 + 1 * internal.kptp * EGFR_11UG + 1 * internal.kptp68 * EGFR_02UG - 1 * internal.kkin * EGFR_01UG - 1 * internal.kkin68 * EGFR_01UG + 1 * internal.kb68 * Grb2 * EGFR_01UU - 1 * internal.ku68 * EGFR_01UG - 1 * internal.kbcg * Cbl * EGFR_01UG + 1 * internal.kucg * EGFR_01UL;
    dstatedt[13] = 0 + 1 * internal.kptp * EGFR_11UL + 1 * internal.kptp68 * EGFR_02UL - 1 * internal.kkin * EGFR_01UL - 1 * internal.kkin68 * EGFR_01UL + 1 * internal.kb68 * CG * EGFR_01UU - 1 * internal.ku68 * EGFR_01UL + 1 * internal.kbcg * Cbl * EGFR_01UG - 1 * internal.kucg * EGFR_01UL;
    dstatedt[11] = 0 - 1 * internal.kptp68 * EGFR_01UU + 1 * internal.kptp * EGFR_11UU + 1 * 2 * internal.kptp68 * EGFR_02UU + 1 * 2 * internal.kkin68 * EGFR_00UU - 1 * internal.kkin * EGFR_01UU - 1 * internal.kkin68 * EGFR_01UU - 1 * internal.kb68 * Grb2 * EGFR_01UU + 1 * internal.ku68 * EGFR_01UG - 1 * internal.kb68 * CG * EGFR_01UU + 1 * internal.ku68 * EGFR_01UL;
    dstatedt[23] = 0 - 1 * internal.kptp68 * EGFR_02UG + 1 * internal.kptp * EGFR_12UG + 1 * internal.kkin68 * EGFR_01UG - 1 * internal.kkin * EGFR_02UG + 1 * 2 * internal.kb68 * Grb2 * EGFR_02UU - 1 * internal.ku68 * EGFR_02UG - 1 * internal.kbcg * Cbl * EGFR_02UG + 1 * internal.kucg * EGFR_02UL;
    dstatedt[24] = 0 - 1 * internal.kptp68 * EGFR_02UL + 1 * internal.kptp * EGFR_12UL + 1 * internal.kkin68 * EGFR_01UL - 1 * internal.kkin * EGFR_02UL + 1 * 2 * internal.kb68 * CG * EGFR_02UU - 1 * internal.ku68 * EGFR_02UL + 1 * internal.kbcg * Cbl * EGFR_02UG - 1 * internal.kucg * EGFR_02UL;
    dstatedt[22] = 0 - 1 * 2 * internal.kptp68 * EGFR_02UU + 1 * internal.kptp * EGFR_12UU + 1 * internal.kkin68 * EGFR_01UU - 1 * internal.kkin * EGFR_02UU - 1 * 2 * internal.kb68 * Grb2 * EGFR_02UU + 1 * internal.ku68 * EGFR_02UG - 1 * 2 * internal.kb68 * CG * EGFR_02UU + 1 * internal.ku68 * EGFR_02UL;
    dstatedt[9] = 0 + 1 * internal.kptp68 * EGFR_11CU - 1 * 2 * internal.kkin68 * EGFR_10CU + 1 * internal.kb45 * Cbl * EGFR_10UU - 1 * internal.ku45 * EGFR_10CU - 1 * internal.kbcg * Grb2 * EGFR_10CU + 1 * internal.kucg * EGFR_10LU;
    dstatedt[10] = 0 + 1 * internal.kptp68 * EGFR_11LU - 1 * 2 * internal.kkin68 * EGFR_10LU + 1 * internal.kb45 * CG * EGFR_10UU - 1 * internal.ku45 * EGFR_10LU + 1 * internal.kbcg * Grb2 * EGFR_10CU - 1 * internal.kucg * EGFR_10LU;
    dstatedt[8] = 0 - 1 * internal.kptp * EGFR_10UU + 1 * internal.kptp68 * EGFR_11UU + 1 * internal.kkin * EGFR_00UU - 1 * 2 * internal.kkin68 * EGFR_10UU - 1 * internal.kb45 * Cbl * EGFR_10UU + 1 * internal.ku45 * EGFR_10CU - 1 * internal.kb45 * CG * EGFR_10UU + 1 * internal.ku45 * EGFR_10LU;
    dstatedt[19] = 0 + 1 * internal.kptp68 * EGFR_12CG - 1 * internal.kkin68 * EGFR_11CG + 1 * internal.kb68 * Grb2 * EGFR_11CU - 1 * internal.ku68 * EGFR_11CG + 1 * internal.kb45 * Cbl * EGFR_11UG - 1 * internal.ku45 * EGFR_11CG - 1 * internal.kbcgP * EGFR_11CG + 1 * internal.kucgM * EGFR_11CC - 1 * internal.kbcg * Grb2 * EGFR_11CG + 1 * internal.kucg * EGFR_11LG;
    dstatedt[15] = 0 - 1 * internal.kptp68 * EGFR_11CU + 1 * 2 * internal.kptp68 * EGFR_12CU + 1 * 2 * internal.kkin68 * EGFR_10CU - 1 * internal.kkin68 * EGFR_11CU + 1 * internal.kb45 * Cbl * EGFR_11UU - 1 * internal.ku45 * EGFR_11CU - 1 * internal.kbcg * Grb2 * EGFR_11CU + 1 * internal.kucg * EGFR_11LU - 1 * internal.kb68 * Grb2 * EGFR_11CU + 1 * internal.ku68 * EGFR_11CG;
    dstatedt[21] = 0 + 1 * internal.kptp68 * EGFR_12LG - 1 * internal.kkin68 * EGFR_11LG + 1 * internal.kb68 * Grb2 * EGFR_11LU - 1 * internal.ku68 * EGFR_11LG + 1 * internal.kb45 * CG * EGFR_11UG - 1 * internal.ku45 * EGFR_11LG + 1 * internal.kbcg * Grb2 * EGFR_11CG - 1 * internal.kucg * EGFR_11LG;
    dstatedt[17] = 0 - 1 * internal.kptp * EGFR_11UG + 1 * internal.kptp68 * EGFR_12UG + 1 * internal.kkin * EGFR_01UG - 1 * internal.kkin68 * EGFR_11UG + 1 * internal.kb68 * Grb2 * EGFR_11UU - 1 * internal.ku68 * EGFR_11UG - 1 * internal.kb45 * Cbl * EGFR_11UG + 1 * internal.ku45 * EGFR_11CG - 1 * internal.kb45 * CG * EGFR_11UG + 1 * internal.ku45 * EGFR_11LG - 1 * internal.kbcg * Cbl * EGFR_11UG + 1 * internal.kucg * EGFR_11UL;
    dstatedt[18] = 0 - 1 * internal.kptp * EGFR_11UL + 1 * internal.kptp68 * EGFR_12UL + 1 * internal.kkin * EGFR_01UL - 1 * internal.kkin68 * EGFR_11UL + 1 * internal.kb68 * CG * EGFR_11UU - 1 * internal.ku68 * EGFR_11UL + 1 * internal.kbcg * Cbl * EGFR_11UG - 1 * internal.kucg * EGFR_11UL - 1 * internal.kb45P * EGFR_11UL + 1 * internal.ku45M * EGFR_11CC;
    dstatedt[14] = 0 - 1 * internal.kptp * EGFR_11UU - 1 * internal.kptp68 * EGFR_11UU + 1 * 2 * internal.kptp68 * EGFR_12UU + 1 * 2 * internal.kkin68 * EGFR_10UU + 1 * internal.kkin * EGFR_01UU - 1 * internal.kkin68 * EGFR_11UU - 1 * internal.kb45 * Cbl * EGFR_11UU + 1 * internal.ku45 * EGFR_11CU - 1 * internal.kb45 * CG * EGFR_11UU + 1 * internal.ku45 * EGFR_11LU - 1 * internal.kb68 * Grb2 * EGFR_11UU + 1 * internal.ku68 * EGFR_11UG - 1 * internal.kb68 * CG * EGFR_11UU + 1 * internal.ku68 * EGFR_11UL;
    dstatedt[30] = 0 - 1 * internal.kptp68 * EGFR_12CG + 1 * internal.kkin68 * EGFR_11CG + 1 * 2 * internal.kb68 * Grb2 * EGFR_12CU - 1 * internal.ku68 * EGFR_12CG + 1 * internal.kb45 * Cbl * EGFR_12UG - 1 * internal.ku45 * EGFR_12CG - 1 * internal.kbcgP * EGFR_12CG + 1 * internal.kucgM * EGFR_12CC - 1 * internal.kbcg * Grb2 * EGFR_12CG + 1 * internal.kucg * EGFR_12LG;
    dstatedt[26] = 0 - 1 * 2 * internal.kptp68 * EGFR_12CU + 1 * internal.kkin68 * EGFR_11CU + 1 * internal.kb45 * Cbl * EGFR_12UU - 1 * internal.ku45 * EGFR_12CU - 1 * internal.kbcg * Grb2 * EGFR_12CU + 1 * internal.kucg * EGFR_12LU - 1 * 2 * internal.kb68 * Grb2 * EGFR_12CU + 1 * internal.ku68 * EGFR_12CG;
    dstatedt[32] = 0 - 1 * internal.kptp68 * EGFR_12LG + 1 * internal.kkin68 * EGFR_11LG + 1 * 2 * internal.kb68 * Grb2 * EGFR_12LU - 1 * internal.ku68 * EGFR_12LG + 1 * internal.kb45 * CG * EGFR_12UG - 1 * internal.ku45 * EGFR_12LG + 1 * internal.kbcg * Grb2 * EGFR_12CG - 1 * internal.kucg * EGFR_12LG;
    dstatedt[28] = 0 - 1 * internal.kptp * EGFR_12UG - 1 * internal.kptp68 * EGFR_12UG + 1 * internal.kkin68 * EGFR_11UG + 1 * internal.kkin * EGFR_02UG + 1 * 2 * internal.kb68 * Grb2 * EGFR_12UU - 1 * internal.ku68 * EGFR_12UG - 1 * internal.kb45 * Cbl * EGFR_12UG + 1 * internal.ku45 * EGFR_12CG - 1 * internal.kb45 * CG * EGFR_12UG + 1 * internal.ku45 * EGFR_12LG - 1 * internal.kbcg * Cbl * EGFR_12UG + 1 * internal.kucg * EGFR_12UL;
    dstatedt[29] = 0 - 1 * internal.kptp * EGFR_12UL - 1 * internal.kptp68 * EGFR_12UL + 1 * internal.kkin68 * EGFR_11UL + 1 * internal.kkin * EGFR_02UL + 1 * 2 * internal.kb68 * CG * EGFR_12UU - 1 * internal.ku68 * EGFR_12UL + 1 * internal.kbcg * Cbl * EGFR_12UG - 1 * internal.kucg * EGFR_12UL - 1 * internal.kb45P * EGFR_12UL + 1 * internal.ku45M * EGFR_12CC;
    dstatedt[25] = 0 - 1 * internal.kptp * EGFR_12UU - 1 * 2 * internal.kptp68 * EGFR_12UU + 1 * internal.kkin68 * EGFR_11UU + 1 * internal.kkin * EGFR_02UU - 1 * internal.kb45 * Cbl * EGFR_12UU + 1 * internal.ku45 * EGFR_12CU - 1 * internal.kb45 * CG * EGFR_12UU + 1 * internal.ku45 * EGFR_12LU - 1 * 2 * internal.kb68 * Grb2 * EGFR_12UU + 1 * internal.ku68 * EGFR_12UG - 1 * 2 * internal.kb68 * CG * EGFR_12UU + 1 * internal.ku68 * EGFR_12UL;
    dstatedt[1] = 0 - 1 * internal.kbcg * Cbl * Grb2 + 1 * internal.kucg * CG - 1 * internal.kbcg * Grb2 * EGFR_10CU + 1 * internal.kucg * EGFR_10LU - 1 * internal.kb68 * Grb2 * EGFR_01UU + 1 * internal.ku68 * EGFR_01UG - 1 * internal.kb68 * Grb2 * EGFR_11UU + 1 * internal.ku68 * EGFR_11UG - 1 * internal.kbcg * Grb2 * EGFR_11CU + 1 * internal.kucg * EGFR_11LU - 1 * internal.kb68 * Grb2 * EGFR_11CU + 1 * internal.ku68 * EGFR_11CG - 1 * internal.kb68 * Grb2 * EGFR_11LU + 1 * internal.ku68 * EGFR_11LG - 1 * internal.kbcg * Grb2 * EGFR_11CG + 1 * internal.kucg * EGFR_11LG - 1 * 2 * internal.kb68 * Grb2 * EGFR_02UU + 1 * internal.ku68 * EGFR_02UG - 1 * 2 * internal.kb68 * Grb2 * EGFR_12UU + 1 * internal.ku68 * EGFR_12UG - 1 * internal.kbcg * Grb2 * EGFR_12CU + 1 * internal.kucg * EGFR_12LU - 1 * 2 * internal.kb68 * Grb2 * EGFR_12CU + 1 * internal.ku68 * EGFR_12CG - 1 * 2 * internal.kb68 * Grb2 * EGFR_12LU + 1 * internal.ku68 * EGFR_12LG - 1 * internal.kbcg * Grb2 * EGFR_12CG + 1 * internal.kucg * EGFR_12LG;
    dstatedt[20] = 0 + 1 * internal.kptp68 * EGFR_12CC - 1 * internal.kkin68 * EGFR_11CC + 1 * internal.kb68P * EGFR_11LU - 1 * internal.ku68M * EGFR_11CC + 1 * internal.kb45P * EGFR_11UL - 1 * internal.ku45M * EGFR_11CC + 1 * internal.kbcgP * EGFR_11CG - 1 * internal.kucgM * EGFR_11CC;
    dstatedt[16] = 0 - 1 * internal.kptp68 * EGFR_11LU + 1 * 2 * internal.kptp68 * EGFR_12LU + 1 * 2 * internal.kkin68 * EGFR_10LU - 1 * internal.kkin68 * EGFR_11LU + 1 * internal.kb45 * CG * EGFR_11UU - 1 * internal.ku45 * EGFR_11LU + 1 * internal.kbcg * Grb2 * EGFR_11CU - 1 * internal.kucg * EGFR_11LU - 1 * internal.kb68 * Grb2 * EGFR_11LU + 1 * internal.ku68 * EGFR_11LG - 1 * internal.kb68P * EGFR_11LU + 1 * internal.ku68M * EGFR_11CC;
    dstatedt[31] = 0 - 1 * internal.kptp68 * EGFR_12CC + 1 * internal.kkin68 * EGFR_11CC + 1 * 2 * internal.kb68P * EGFR_12LU - 1 * internal.ku68M * EGFR_12CC + 1 * internal.kb45P * EGFR_12UL - 1 * internal.ku45M * EGFR_12CC + 1 * internal.kbcgP * EGFR_12CG - 1 * internal.kucgM * EGFR_12CC;
    dstatedt[27] = 0 - 1 * 2 * internal.kptp68 * EGFR_12LU + 1 * internal.kkin68 * EGFR_11LU + 1 * internal.kb45 * CG * EGFR_12UU - 1 * internal.ku45 * EGFR_12LU + 1 * internal.kbcg * Grb2 * EGFR_12CU - 1 * internal.kucg * EGFR_12LU - 1 * 2 * internal.kb68 * Grb2 * EGFR_12LU + 1 * internal.ku68 * EGFR_12LG - 1 * 2 * internal.kb68P * EGFR_12LU + 1 * internal.ku68M * EGFR_12CC;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cbl", "Grb2", "CG", "Tyr", "Ub", "TyrNorm", "UbNorm", "EGFR_00UU", "EGFR_10UU", "EGFR_10CU", "EGFR_10LU", "EGFR_01UU", "EGFR_01UG", "EGFR_01UL", "EGFR_11UU", "EGFR_11CU", "EGFR_11LU", "EGFR_11UG", "EGFR_11UL", "EGFR_11CG", "EGFR_11CC", "EGFR_11LG", "EGFR_02UU", "EGFR_02UG", "EGFR_02UL", "EGFR_12UU", "EGFR_12CU", "EGFR_12LU", "EGFR_12UG", "EGFR_12UL", "EGFR_12CG", "EGFR_12CC", "EGFR_12LG"];
    this.metadata.internalOrder = {Cbl_init: null, CblFactor: null, CblT: null, CblWT: null, cell: null, CG_init: null, EGFR_00UU_init: null, EGFR_01UG_init: null, EGFR_01UL_init: null, EGFR_01UU_init: null, EGFR_02UG_init: null, EGFR_02UL_init: null, EGFR_02UU_init: null, EGFR_10CU_init: null, EGFR_10LU_init: null, EGFR_10UU_init: null, EGFR_11CC_init: null, EGFR_11CG_init: null, EGFR_11CU_init: null, EGFR_11LG_init: null, EGFR_11LU_init: null, EGFR_11UG_init: null, EGFR_11UL_init: null, EGFR_11UU_init: null, EGFR_12CC_init: null, EGFR_12CG_init: null, EGFR_12CU_init: null, EGFR_12LG_init: null, EGFR_12LU_init: null, EGFR_12UG_init: null, EGFR_12UL_init: null, EGFR_12UU_init: null, floc: null, Grb2_init: null, Grb2T: null, initial_Cbl: null, initial_CG: null, initial_EGFR_00UU: null, initial_EGFR_01UG: null, initial_EGFR_01UL: null, initial_EGFR_01UU: null, initial_EGFR_02UG: null, initial_EGFR_02UL: null, initial_EGFR_02UU: null, initial_EGFR_10CU: null, initial_EGFR_10LU: null, initial_EGFR_10UU: null, initial_EGFR_11CC: null, initial_EGFR_11CG: null, initial_EGFR_11CU: null, initial_EGFR_11LG: null, initial_EGFR_11LU: null, initial_EGFR_11UG: null, initial_EGFR_11UL: null, initial_EGFR_11UU: null, initial_EGFR_12CC: null, initial_EGFR_12CG: null, initial_EGFR_12CU: null, initial_EGFR_12LG: null, initial_EGFR_12LU: null, initial_EGFR_12UG: null, initial_EGFR_12UL: null, initial_EGFR_12UU: null, initial_Grb2: null, initial_Tyr: null, initial_TyrNorm: null, initial_Ub: null, initial_UbNorm: null, K45: null, K45P: null, kb45: null, kb45P: null, kb68: null, kb68P: null, kbcg: null, kbcgP: null, Kcg: null, KcgP: null, kkin: null, kkin68: null, kkinbase: null, kptp: null, kptp68: null, ku45: null, ku45M: null, ku68: null, ku68M: null, kucg: null, kucgM: null, Ltot: null, nH: null, PYMax: null, RT: null, UbMax: null, xT: null};
    this.metadata.variableOrder = {Cbl: null, Grb2: null, CG: null, Tyr: null, Ub: null, TyrNorm: null, UbNorm: null, EGFR_00UU: null, EGFR_10UU: null, EGFR_10CU: null, EGFR_10LU: null, EGFR_01UU: null, EGFR_01UG: null, EGFR_01UL: null, EGFR_11UU: null, EGFR_11CU: null, EGFR_11LU: null, EGFR_11UG: null, EGFR_11UL: null, EGFR_11CG: null, EGFR_11CC: null, EGFR_11LG: null, EGFR_02UU: null, EGFR_02UG: null, EGFR_02UL: null, EGFR_12UU: null, EGFR_12CU: null, EGFR_12LU: null, EGFR_12UG: null, EGFR_12UL: null, EGFR_12CG: null, EGFR_12CC: null, EGFR_12LG: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}