export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k_14 = 0.00029999999999999997;
    internal.Kac_5 = 7;
    internal.Kaccoa_3 = 0.0080000000000000002;
    internal.Kaccoa_6 = 0.0070000000000000001;
    internal.Kacet_10 = 5;
    internal.Kacet_11 = 0.059999999999999998;
    internal.Kacet_9 = 100;
    internal.Kaclac_8 = 100;
    internal.Kaclac_9 = 10;
    internal.Kaco_6 = 10;
    internal.Kaco_7 = 0.029999999999999999;
    internal.Kacp_4 = 0.69999999999999996;
    internal.Kacp_5 = 0.16;
    internal.Kadp_1 = 0.046989999999999997;
    internal.Kadp_5 = 0.5;
    internal.Katp_1 = 0.018669999999999999;
    internal.Katp_12 = 6.1959999999999997;
    internal.Katp_5 = 0.070000000000000007;
    internal.Kbut_11 = 2.6000000000000001;
    internal.Kcoa_3 = 0.014;
    internal.Kcoa_6 = 0.0080000000000000002;
    internal.Keq_11 = 1400;
    internal.Keq_2 = 21120.689999999999;
    internal.Keq_4 = 0.0064999999999999997;
    internal.Keq_5 = 174.21700000000001;
    internal.Keq_6 = 1;
    internal.Keq_7 = 12354.9;
    internal.Keq_8 = 9000000000000;
    internal.Ketoh_7 = 1;
    internal.Kglc_1 = 0.10000000000000001;
    internal.Ki_3 = 46.415900000000001;
    internal.Kiaccoa_4 = 0.20000000000000001;
    internal.Kiacp_4 = 0.20000000000000001;
    internal.Kicoa_4 = 0.029000000000000001;
    internal.Kipi_4 = 2.6000000000000001;
    internal.Klac_2 = 100;
    internal.Knad_1 = 0.14119999999999999;
    internal.Knad_11 = 0.16;
    internal.Knad_13 = 1;
    internal.Knad_2 = 2.3999999999999999;
    internal.Knad_3 = 0.40000000000000002;
    internal.Knad_6 = 0.080000000000000002;
    internal.Knad_7 = 0.080000000000000002;
    internal.Knadh_1 = 0.089990000000000001;
    internal.Knadh_11 = 0.02;
    internal.Knadh_13 = 0.041000000000000002;
    internal.Knadh_2 = 0.080000000000000002;
    internal.Knadh_3 = 0.10000000000000001;
    internal.Knadh_6 = 0.025000000000000001;
    internal.Knadh_7 = 0.050000000000000003;
    internal.Ko_13 = 0.20000000000000001;
    internal.Kpi_4 = 2.6000000000000001;
    internal.Kpyr_1 = 2.5;
    internal.Kpyr_2 = 1.5;
    internal.Kpyr_3 = 1;
    internal.Kpyr_8 = 50;
    internal.n_12 = 2.5800000000000001;
    internal.n_8 = 2.3999999999999999;
    internal.pi = 3.1415929999999999;
    internal.V_1 = 2397;
    internal.V_10 = 200;
    internal.V_11 = 105;
    internal.V_12 = 900;
    internal.V_13 = 118;
    internal.V_2 = 5118;
    internal.V_3 = 259;
    internal.V_4 = 42;
    internal.V_5 = 2700;
    internal.V_6 = 97;
    internal.V_7 = 162;
    internal.V_8 = 600;
    internal.V_9 = 106;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_ADP;
    state[1] = internal.initial_NAD;
    state[2] = internal.initial_ATP;
    state[3] = internal.initial_NADH;
    state[4] = internal.initial_pyruvate;
    state[5] = internal.initial_lactate;
    state[6] = internal.initial_CoA;
    state[7] = internal.initial_halfglucose;
    state[8] = internal.initial_AcCoA;
    state[9] = internal.initial_AcP;
    state[10] = internal.initial_Ac;
    state[11] = internal.initial_AcO;
    state[12] = internal.initial_EtOH;
    state[13] = internal.initial_AcLac;
    state[14] = internal.initial_AcetoinIn;
    state[15] = internal.initial_AcetoinOut;
    state[16] = internal.initial_Butanediol;
    state[17] = internal.initial_O2;
    state[18] = internal.initial_PO4;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ac_init", "AcCoA_init", "AcetoinIn_init", "AcetoinOut_init", "AcLac_init", "AcO_init", "AcP_init", "ADP_init", "ATP_init", "Butanediol_init", "CoA_init", "EtOH_init", "halfglucose_init", "lactate_init", "NAD_init", "NADH_init", "O2_init", "PO4_init", "pyruvate_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ac_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcCoA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcetoinIn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcetoinOut_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcLac_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADP_init", internal, 4.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Butanediol_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CoA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EtOH_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "halfglucose_init", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lactate_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 6.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 3.6699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PO4_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pyruvate_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_Ac = internal.Ac_init;
    internal.initial_AcCoA = internal.AcCoA_init;
    internal.initial_AcetoinIn = internal.AcetoinIn_init;
    internal.initial_AcetoinOut = internal.AcetoinOut_init;
    internal.initial_AcLac = internal.AcLac_init;
    internal.initial_AcO = internal.AcO_init;
    internal.initial_AcP = internal.AcP_init;
    internal.initial_ADP = internal.ADP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Butanediol = internal.Butanediol_init;
    internal.initial_CoA = internal.CoA_init;
    internal.initial_EtOH = internal.EtOH_init;
    internal.initial_halfglucose = internal.halfglucose_init;
    internal.initial_lactate = internal.lactate_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_PO4 = internal.PO4_init;
    internal.initial_pyruvate = internal.pyruvate_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ADP = state[0];
    const NAD = state[1];
    const ATP = state[2];
    const NADH = state[3];
    const pyruvate = state[4];
    const lactate = state[5];
    const CoA = state[6];
    const halfglucose = state[7];
    const AcCoA = state[8];
    const AcP = state[9];
    const Ac = state[10];
    const AcO = state[11];
    const EtOH = state[12];
    const AcLac = state[13];
    const AcetoinIn = state[14];
    const Butanediol = state[16];
    const O2 = state[17];
    const PO4 = state[18];
    dstatedt[10] = 0;
    dstatedt[15] = 0;
    dstatedt[16] = 0;
    dstatedt[12] = 0;
    dstatedt[7] = 0;
    dstatedt[5] = 0;
    dstatedt[17] = 0;
    dstatedt[18] = 0;
    dstatedt[8] = 0 + 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) - 1 * internal.V_4 * ((AcCoA * PO4 - AcP * CoA / internal.Keq_4) / (internal.Kiaccoa_4 * internal.Kpi_4)) / (1 + AcCoA / internal.Kiaccoa_4 + PO4 / internal.Kipi_4 + AcP / internal.Kiacp_4 + CoA / internal.Kicoa_4 + AcCoA * PO4 / (internal.Kiaccoa_4 * internal.Kpi_4) + AcP * CoA / (internal.Kacp_4 * internal.Kicoa_4)) - 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6));
    dstatedt[14] = 0 + 1 * internal.V_9 * (AcLac / internal.Kaclac_9) / (1 + AcLac / internal.Kaclac_9 + AcetoinIn / internal.Kacet_9) - 1 * internal.V_10 * (AcetoinIn / internal.Kacet_10) / (1 + AcetoinIn / internal.Kacet_10) - 1 * internal.V_11 * ((AcetoinIn * NADH - Butanediol * NAD / internal.Keq_11) / (internal.Kacet_11 * internal.Knadh_11)) / ((1 + AcetoinIn / internal.Kacet_11 + Butanediol / internal.Kbut_11) * (1 + NADH / internal.Knadh_11 + NAD / internal.Knad_11)) + 1 * internal.k_14 * AcLac;
    dstatedt[13] = 0 + 1 * internal.V_8 * (pyruvate / internal.Kpyr_8) * (1 - AcLac / (pyruvate * internal.Keq_8)) * Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8 - 1)) / (1 + Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8))) - 1 * internal.V_9 * (AcLac / internal.Kaclac_9) / (1 + AcLac / internal.Kaclac_9 + AcetoinIn / internal.Kacet_9) - 1 * internal.k_14 * AcLac;
    dstatedt[11] = 0 + 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6)) - 1 * internal.V_7 * ((AcO * NADH - EtOH * NAD / internal.Keq_7) / (internal.Kaco_7 * internal.Knadh_7)) / ((1 + NAD / internal.Knad_7 + NADH / internal.Knadh_7) * (1 + AcO / internal.Kaco_7 + EtOH / internal.Ketoh_7));
    dstatedt[9] = 0 + 1 * internal.V_4 * ((AcCoA * PO4 - AcP * CoA / internal.Keq_4) / (internal.Kiaccoa_4 * internal.Kpi_4)) / (1 + AcCoA / internal.Kiaccoa_4 + PO4 / internal.Kipi_4 + AcP / internal.Kiacp_4 + CoA / internal.Kicoa_4 + AcCoA * PO4 / (internal.Kiaccoa_4 * internal.Kpi_4) + AcP * CoA / (internal.Kacp_4 * internal.Kicoa_4)) - 1 * internal.V_5 * ((AcP * ADP - Ac * ATP / internal.Keq_5) / (internal.Kadp_5 * internal.Kacp_5)) / ((1 + AcP / internal.Kacp_5 + Ac / internal.Kac_5) * (1 + ADP / internal.Kadp_5 + ATP / internal.Katp_5));
    dstatedt[0] = 0 - 1 * 2 * internal.V_1 * (halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) - 1 * internal.V_5 * ((AcP * ADP - Ac * ATP / internal.Keq_5) / (internal.Kadp_5 * internal.Kacp_5)) / ((1 + AcP / internal.Kacp_5 + Ac / internal.Kac_5) * (1 + ADP / internal.Kadp_5 + ATP / internal.Katp_5)) + 1 * internal.V_12 * Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)) / (1 + Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)));
    dstatedt[2] = 0 + 1 * 2 * internal.V_1 * (halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) + 1 * internal.V_5 * ((AcP * ADP - Ac * ATP / internal.Keq_5) / (internal.Kadp_5 * internal.Kacp_5)) / ((1 + AcP / internal.Kacp_5 + Ac / internal.Kac_5) * (1 + ADP / internal.Kadp_5 + ATP / internal.Katp_5)) - 1 * internal.V_12 * Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)) / (1 + Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)));
    dstatedt[6] = 0 - 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) + 1 * internal.V_4 * ((AcCoA * PO4 - AcP * CoA / internal.Keq_4) / (internal.Kiaccoa_4 * internal.Kpi_4)) / (1 + AcCoA / internal.Kiaccoa_4 + PO4 / internal.Kipi_4 + AcP / internal.Kiacp_4 + CoA / internal.Kicoa_4 + AcCoA * PO4 / (internal.Kiaccoa_4 * internal.Kpi_4) + AcP * CoA / (internal.Kacp_4 * internal.Kicoa_4)) + 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6));
    dstatedt[1] = 0 - 1 * 2 * internal.V_1 * (halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) + 1 * internal.V_2 * ((pyruvate * NADH - lactate * NAD / internal.Keq_2) / (internal.Kpyr_2 * internal.Knadh_2)) / ((1 + pyruvate / internal.Kpyr_2 + lactate / internal.Klac_2) * (1 + NADH / internal.Knadh_2 + NAD / internal.Knad_2)) - 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) + 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6)) + 1 * internal.V_7 * ((AcO * NADH - EtOH * NAD / internal.Keq_7) / (internal.Kaco_7 * internal.Knadh_7)) / ((1 + NAD / internal.Knad_7 + NADH / internal.Knadh_7) * (1 + AcO / internal.Kaco_7 + EtOH / internal.Ketoh_7)) + 1 * internal.V_11 * ((AcetoinIn * NADH - Butanediol * NAD / internal.Keq_11) / (internal.Kacet_11 * internal.Knadh_11)) / ((1 + AcetoinIn / internal.Kacet_11 + Butanediol / internal.Kbut_11) * (1 + NADH / internal.Knadh_11 + NAD / internal.Knad_11)) + 1 * internal.V_13 * (NADH * O2 / (internal.Knadh_13 * internal.Ko_13)) / ((1 + NADH / internal.Knadh_13 + NAD / internal.Knad_13) * (1 + O2 / internal.Ko_13));
    dstatedt[3] = 0 + 1 * 2 * internal.V_1 * (halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) - 1 * internal.V_2 * ((pyruvate * NADH - lactate * NAD / internal.Keq_2) / (internal.Kpyr_2 * internal.Knadh_2)) / ((1 + pyruvate / internal.Kpyr_2 + lactate / internal.Klac_2) * (1 + NADH / internal.Knadh_2 + NAD / internal.Knad_2)) + 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) - 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6)) - 1 * internal.V_7 * ((AcO * NADH - EtOH * NAD / internal.Keq_7) / (internal.Kaco_7 * internal.Knadh_7)) / ((1 + NAD / internal.Knad_7 + NADH / internal.Knadh_7) * (1 + AcO / internal.Kaco_7 + EtOH / internal.Ketoh_7)) - 1 * internal.V_11 * ((AcetoinIn * NADH - Butanediol * NAD / internal.Keq_11) / (internal.Kacet_11 * internal.Knadh_11)) / ((1 + AcetoinIn / internal.Kacet_11 + Butanediol / internal.Kbut_11) * (1 + NADH / internal.Knadh_11 + NAD / internal.Knad_11)) - 1 * internal.V_13 * (NADH * O2 / (internal.Knadh_13 * internal.Ko_13)) / ((1 + NADH / internal.Knadh_13 + NAD / internal.Knad_13) * (1 + O2 / internal.Ko_13));
    dstatedt[4] = 0 + 1 * 2 * internal.V_1 * (halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) - 1 * internal.V_2 * ((pyruvate * NADH - lactate * NAD / internal.Keq_2) / (internal.Kpyr_2 * internal.Knadh_2)) / ((1 + pyruvate / internal.Kpyr_2 + lactate / internal.Klac_2) * (1 + NADH / internal.Knadh_2 + NAD / internal.Knad_2)) - 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) - 2 * internal.V_8 * (pyruvate / internal.Kpyr_8) * (1 - AcLac / (pyruvate * internal.Keq_8)) * Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8 - 1)) / (1 + Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ADP", "NAD", "ATP", "NADH", "pyruvate", "lactate", "CoA", "halfglucose", "AcCoA", "AcP", "Ac", "AcO", "EtOH", "AcLac", "AcetoinIn", "AcetoinOut", "Butanediol", "O2", "PO4"];
    this.metadata.internalOrder = {Ac_init: null, AcCoA_init: null, AcetoinIn_init: null, AcetoinOut_init: null, AcLac_init: null, AcO_init: null, AcP_init: null, ADP_init: null, ATP_init: null, Butanediol_init: null, CoA_init: null, compartment: null, EtOH_init: null, halfglucose_init: null, initial_Ac: null, initial_AcCoA: null, initial_AcetoinIn: null, initial_AcetoinOut: null, initial_AcLac: null, initial_AcO: null, initial_AcP: null, initial_ADP: null, initial_ATP: null, initial_Butanediol: null, initial_CoA: null, initial_EtOH: null, initial_halfglucose: null, initial_lactate: null, initial_NAD: null, initial_NADH: null, initial_O2: null, initial_PO4: null, initial_pyruvate: null, k_14: null, Kac_5: null, Kaccoa_3: null, Kaccoa_6: null, Kacet_10: null, Kacet_11: null, Kacet_9: null, Kaclac_8: null, Kaclac_9: null, Kaco_6: null, Kaco_7: null, Kacp_4: null, Kacp_5: null, Kadp_1: null, Kadp_5: null, Katp_1: null, Katp_12: null, Katp_5: null, Kbut_11: null, Kcoa_3: null, Kcoa_6: null, Keq_11: null, Keq_2: null, Keq_4: null, Keq_5: null, Keq_6: null, Keq_7: null, Keq_8: null, Ketoh_7: null, Kglc_1: null, Ki_3: null, Kiaccoa_4: null, Kiacp_4: null, Kicoa_4: null, Kipi_4: null, Klac_2: null, Knad_1: null, Knad_11: null, Knad_13: null, Knad_2: null, Knad_3: null, Knad_6: null, Knad_7: null, Knadh_1: null, Knadh_11: null, Knadh_13: null, Knadh_2: null, Knadh_3: null, Knadh_6: null, Knadh_7: null, Ko_13: null, Kpi_4: null, Kpyr_1: null, Kpyr_2: null, Kpyr_3: null, Kpyr_8: null, lactate_init: null, n_12: null, n_8: null, NAD_init: null, NADH_init: null, O2_init: null, pi: null, PO4_init: null, pyruvate_init: null, V_1: null, V_10: null, V_11: null, V_12: null, V_13: null, V_2: null, V_3: null, V_4: null, V_5: null, V_6: null, V_7: null, V_8: null, V_9: null};
    this.metadata.variableOrder = {ADP: null, NAD: null, ATP: null, NADH: null, pyruvate: null, lactate: null, CoA: null, halfglucose: null, AcCoA: null, AcP: null, Ac: null, AcO: null, EtOH: null, AcLac: null, AcetoinIn: null, AcetoinOut: null, Butanediol: null, O2: null, PO4: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
