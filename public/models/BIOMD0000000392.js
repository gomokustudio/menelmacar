export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.cytosol = 1;
    internal.k1 = 50000;
    internal.K1 = 0.00061348999999999996;
    internal.K1s2 = 0.00027034999999999998;
    internal.k2 = 0.90000000000000002;
    internal.K2 = 0.00011438;
    internal.K2r1 = 0.00017677;
    internal.K2s1 = 0.00054069999999999997;
    internal.K2s2 = 9.0464000000000007e-05;
    internal.Kp = 9.6372000000000005e-05;
    internal.Kp1 = 0.00027034999999999998;
    internal.Kp2 = 0.00053012999999999997;
    internal.Kp3 = 0.0027396999999999999;
    internal.Kr1 = 0.00089212999999999998;
    internal.Kr11 = 0.0092024099999999994;
    internal.Kr12 = 0.0016432899999999999;
    internal.Kr2 = 9.8597000000000005e-05;
    internal.Kr3 = 0.00054107000000000005;
    internal.Kr4 = 9.4837e-05;
    internal.Ks = 9.3583000000000002e-05;
    internal.Ks1 = 0.0011122;
    internal.Ks2 = 0.00033070000000000002;
    internal.q = 1.18815;
    internal.Vm = 0.017045500000000002;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var ADP_init = internal.ADT - internal.initial_ATP;
    var ADPc_init = internal.ADTc - internal.initial_ATPc;
    var CO2_init = (1.2e-05 / (0.38 + 0.014999999999999999) + 8 * 4 * 0.00055000000000000003 * 3030.3000000000002 * internal.initial_ER * internal.initial_O2 / 2) / (1 / (0.38 + 0.014999999999999999) + 8 * 4 * 0.00055000000000000003 * 300000 * internal.initial_ER);
    var DHAP_init = 1.0007329 * internal.initial_TP / (1 + 1.0007329);
    var DHAPc_init = 1.0007329 * internal.initial_TPc / (1 + 1.0007329);
    var E_init = internal.Et - (internal.initial_ER + internal.initial_EPP + internal.initial_EPG + internal.initial_EP + internal.initial_EOP);
    var F6P_init = internal.initial_HeP * 0.99983699999999998 / (1 + 0.99983699999999998 + 0.99930799999999997);
    var F6Pc_init = internal.initial_HePc * 0.99983699999999998 / (1 + 0.99983699999999998 + 0.99930799999999997);
    var G1P_init = internal.initial_HeP * 0.99930799999999997 / (1 + 0.99983699999999998 + 0.99930799999999997);
    var G1Pc_init = internal.initial_HePc * 0.99930799999999997 / (1 + 0.99983699999999998 + 0.99930799999999997);
    var G6P_init = internal.initial_HeP / (1 + 0.99983699999999998 + 0.99930799999999997);
    var G6Pc_init = internal.initial_HePc / (1 + 0.99983699999999998 + 0.99930799999999997);
    var GAP_init = internal.initial_TP / (1 + 1.0007329);
    var GAPc_init = internal.initial_TPc / (1 + 1.0007329);
    var Pi_init = internal.PiT - 2 * (internal.initial_EPP + internal.initial_EPG + internal.initial_RuBP + internal.initial_FBP + internal.initial_SBP + internal.initial_ATP + internal.initial_PiPi) - (internal.initial_EP + internal.initial_PGA + internal.initial_TP + internal.initial_HeP + internal.initial_E4P + internal.initial_S7P + internal.initial_PeP + internal.initial_ADP + internal.initial_ADPG);
    var Pic_init = internal.PiTc - 2 * (internal.initial_FBPc + internal.initial_UTPc + internal.initial_ATPc + internal.initial_PiPic) - (internal.initial_PGAc + internal.initial_TPc + internal.initial_HePc + internal.initial_SucPc + internal.initial_UDPGc + internal.initial_UDPc + internal.initial_ADPc);
    var R5P_init = internal.initial_PeP / (1 + 0.99973999999999996 + 0.99973999999999996 / 1.0000530000000001);
    var Ru5P_init = internal.initial_PeP * 0.99973999999999996 / (1 + 0.99973999999999996 + 0.99973999999999996 / 1.0000530000000001);
    var X5P_init = internal.initial_PeP * (0.99973999999999996 / 1.0000530000000001) / (1 + 0.99973999999999996 + 0.99973999999999996 / 1.0000530000000001);
    internal.initial_ADP = ADP_init;
    internal.initial_ADPc = ADPc_init;
    internal.initial_CO2 = CO2_init;
    internal.initial_DHAP = DHAP_init;
    internal.initial_DHAPc = DHAPc_init;
    internal.initial_E = E_init;
    internal.initial_F6P = F6P_init;
    internal.initial_F6Pc = F6Pc_init;
    internal.initial_G1P = G1P_init;
    internal.initial_G1Pc = G1Pc_init;
    internal.initial_G6P = G6P_init;
    internal.initial_G6Pc = G6Pc_init;
    internal.initial_GAP = GAP_init;
    internal.initial_GAPc = GAPc_init;
    internal.initial_Pi = Pi_init;
    internal.initial_Pic = Pic_init;
    internal.initial_R5P = R5P_init;
    internal.initial_Ru5P = Ru5P_init;
    internal.initial_X5P = X5P_init;
    var state = Array(53).fill(0);
    state[0] = internal.initial_RuBP;
    state[1] = internal.initial_E;
    state[2] = internal.initial_ER;
    state[3] = internal.initial_EPP;
    state[4] = internal.initial_EPG;
    state[5] = internal.initial_EP;
    state[6] = internal.initial_EOP;
    state[7] = internal.initial_PGA;
    state[8] = internal.initial_TP;
    state[9] = internal.initial_GAP;
    state[10] = internal.initial_DHAP;
    state[11] = internal.initial_FBP;
    state[12] = internal.initial_HeP;
    state[13] = internal.initial_F6P;
    state[14] = internal.initial_G6P;
    state[15] = internal.initial_G1P;
    state[16] = internal.initial_E4P;
    state[17] = internal.initial_SBP;
    state[18] = internal.initial_S7P;
    state[19] = internal.initial_PeP;
    state[20] = internal.initial_X5P;
    state[21] = internal.initial_R5P;
    state[22] = internal.initial_Ru5P;
    state[23] = internal.initial_ADPG;
    state[24] = internal.initial_ATP;
    state[25] = internal.initial_ADP;
    state[26] = internal.initial_Pi;
    state[27] = internal.initial_PiPi;
    state[28] = internal.initial_H;
    state[29] = internal.initial_CO2;
    state[30] = internal.initial_O2;
    state[31] = internal.initial_NADPH;
    state[32] = internal.initial_NADP;
    state[33] = internal.initial_PGAc;
    state[34] = internal.initial_TPc;
    state[35] = internal.initial_GAPc;
    state[36] = internal.initial_DHAPc;
    state[37] = internal.initial_FBPc;
    state[38] = internal.initial_F26BPc;
    state[39] = internal.initial_HePc;
    state[40] = internal.initial_F6Pc;
    state[41] = internal.initial_G6Pc;
    state[42] = internal.initial_G1Pc;
    state[43] = internal.initial_UDPGc;
    state[44] = internal.initial_UTPc;
    state[45] = internal.initial_UDPc;
    state[46] = internal.initial_ATPc;
    state[47] = internal.initial_ADPc;
    state[48] = internal.initial_SucPc;
    state[49] = internal.initial_Succ;
    state[50] = internal.initial_Pic;
    state[51] = internal.initial_PiPic;
    state[52] = internal.initial_Hc;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADPG_init", "ADT", "ADTc", "ATP_init", "ATPc_init", "E4P_init", "EOP_init", "EP_init", "EPG_init", "EPP_init", "ER_init", "Et", "F26BPc_init", "FBP_init", "FBPc_init", "H_init", "Hc_init", "HeP_init", "HePc_init", "Kp12", "NADP_init", "NADPH_init", "NADPT", "O2_init", "PeP_init", "PGA_init", "PGAc_init", "PiPi_init", "PiPic_init", "PiT", "PiTc", "q1", "q12", "RuBP_init", "S7P_init", "SBP_init", "Succ_init", "SucPc_init", "TP_init", "TPc_init", "UDPc_init", "UDPGc_init", "UDTc", "UTPc_init", "V28"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADPG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADT", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADTc", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E4P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EOP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EPG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ER_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Et", internal, 0.0028030303030302998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F26BPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HeP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HePc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp12", internal, 224014.808032967, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPT", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PeP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGAc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PiPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PiPic_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PiT", internal, 0.028409090909090901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PiTc", internal, 0.017045454545454499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 0.12905306728027899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q12", internal, 2227862541257.3501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S7P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Succ_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SucPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UDPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UDPGc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UDTc", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UTPc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V28", internal, 7.3863639999999998e-05, -Infinity, Infinity, false);
    internal.initial_ADPG = internal.ADPG_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_ATPc = internal.ATPc_init;
    internal.initial_E4P = internal.E4P_init;
    internal.initial_EOP = internal.EOP_init;
    internal.initial_EP = internal.EP_init;
    internal.initial_EPG = internal.EPG_init;
    internal.initial_EPP = internal.EPP_init;
    internal.initial_ER = internal.ER_init;
    internal.initial_F26BPc = internal.F26BPc_init;
    internal.initial_FBP = internal.FBP_init;
    internal.initial_FBPc = internal.FBPc_init;
    internal.initial_H = internal.H_init;
    internal.initial_Hc = internal.Hc_init;
    internal.initial_HeP = internal.HeP_init;
    internal.initial_HePc = internal.HePc_init;
    internal.initial_NADP = internal.NADP_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_PeP = internal.PeP_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_PGAc = internal.PGAc_init;
    internal.initial_PiPi = internal.PiPi_init;
    internal.initial_PiPic = internal.PiPic_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.initial_S7P = internal.S7P_init;
    internal.initial_SBP = internal.SBP_init;
    internal.initial_Succ = internal.Succ_init;
    internal.initial_SucPc = internal.SucPc_init;
    internal.initial_TP = internal.TP_init;
    internal.initial_TPc = internal.TPc_init;
    internal.initial_UDPc = internal.UDPc_init;
    internal.initial_UDPGc = internal.UDPGc_init;
    internal.initial_UTPc = internal.UTPc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RuBP = state[0];
    const E = state[1];
    const ER = state[2];
    const EPP = state[3];
    const EPG = state[4];
    const EP = state[5];
    const EOP = state[6];
    const PGA = state[7];
    const TP = state[8];
    const GAP = state[9];
    const DHAP = state[10];
    const FBP = state[11];
    const F6P = state[13];
    const G1P = state[15];
    const E4P = state[16];
    const SBP = state[17];
    const S7P = state[18];
    const X5P = state[20];
    const R5P = state[21];
    const Ru5P = state[22];
    const ADPG = state[23];
    const ATP = state[24];
    const ADP = state[25];
    const Pi = state[26];
    const PiPi = state[27];
    const CO2 = state[29];
    const O2 = state[30];
    const PGAc = state[33];
    const TPc = state[34];
    const GAPc = state[35];
    const DHAPc = state[36];
    const FBPc = state[37];
    const F26BPc = state[38];
    const HePc = state[39];
    const F6Pc = state[40];
    const G1Pc = state[42];
    const UDPGc = state[43];
    const UTPc = state[44];
    const UDPc = state[45];
    const SucPc = state[48];
    const Succ = state[49];
    const Pic = state[50];
    const PiPic = state[51];
    const Hc = state[52];
    dstatedt[25] = 0 + 0;
    dstatedt[47] = 0 + 0;
    dstatedt[46] = 0;
    dstatedt[29] = 0 + 0;
    dstatedt[10] = 0 + 0;
    dstatedt[36] = 0 + 0;
    dstatedt[1] = 0 + 0;
    dstatedt[13] = 0 + 0;
    dstatedt[40] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[42] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[41] = 0 + 0;
    dstatedt[9] = 0 + 0;
    dstatedt[35] = 0 + 0;
    dstatedt[28] = 0;
    dstatedt[52] = 0;
    dstatedt[32] = 0;
    dstatedt[31] = 0;
    dstatedt[30] = 0;
    dstatedt[26] = 0 + 0;
    dstatedt[50] = 0 + 0;
    dstatedt[27] = 0;
    dstatedt[51] = 0;
    dstatedt[21] = 0 + 0;
    dstatedt[22] = 0 + 0;
    dstatedt[49] = 0;
    dstatedt[45] = 0;
    dstatedt[44] = 0;
    dstatedt[20] = 0 + 0;
    dstatedt[23] = 0 + 1 * internal.chloroplast * (internal.Vm * Math.pow((PGA / Pi), (2)) * (G1P * ATP - ADPG * PiPi / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + G1P / internal.Ks1) * (1 + ATP / internal.Ks2) + (1 + ADPG / internal.Kp1) * (1 + PiPi / internal.Kp2) - 1))) - 1 * internal.chloroplast * (internal.Vm * (ADPG - ADP / internal.q) / (internal.Ks1 * (1 + ADPG / internal.Ks1 + ADP / internal.Kp1)));
    dstatedt[24] = 0 - 0.5 * internal.chloroplast * internal.k1 * ER * O2 - 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - GAP * ADP * Pi / internal.q1) / (internal.Ks1 * internal.Ks2 * ((1 + PGA / internal.Ks1) * (1 + ATP / internal.Ks2) + GAP / internal.Kp1 + ADP / internal.Kp2 + Pi / internal.Kp3 + GAP * ADP * Pi / (internal.Kp1 * internal.Kp2 * internal.Kp3)))) - 1 * internal.chloroplast * (internal.Vm * (Ru5P * ATP - RuBP * ADP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + Ru5P / internal.Ks1) * (1 + ATP / internal.Ks2) + (1 + RuBP / internal.Kp1) * (1 + ADP / internal.Kp2) - 1))) + 1 * internal.chloroplast * (internal.Vm * (ADP * Pi - ATP / internal.q12) / (internal.Ks1 * internal.Ks2 * ((1 + ADP / internal.Ks1) * (1 + Pi / internal.Ks2) + ATP / internal.Kp12))) - 1 * internal.chloroplast * (internal.Vm * Math.pow((PGA / Pi), (2)) * (G1P * ATP - ADPG * PiPi / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + G1P / internal.Ks1) * (1 + ATP / internal.Ks2) + (1 + ADPG / internal.Kp1) * (1 + PiPi / internal.Kp2) - 1)));
    dstatedt[16] = 0 + 1 * internal.chloroplast * (internal.Vm * (internal.q * F6P * GAP - E4P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (F6P / internal.K2s1 + S7P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + E4P * R5P / internal.K1) + E4P + R5P)))) - 1 * internal.chloroplast * (internal.Vm * (E4P * DHAP - SBP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + E4P / internal.Ks1) * (1 + DHAP / internal.Ks2) + SBP / internal.Kp1)));
    dstatedt[5] = 0 + 1 * internal.chloroplast * (internal.k1 * EPP - internal.k2 * PGA * EP) - 1 * internal.chloroplast * (internal.k1 * EP - internal.k2 * PGA * E) + 1 * internal.chloroplast * internal.k1 * EPG;
    dstatedt[4] = 0 + 1 * internal.chloroplast * internal.k1 * ER * O2 - 1 * internal.chloroplast * internal.k1 * EPG;
    dstatedt[3] = 0 + 1 * internal.chloroplast * internal.k1 * ER * CO2 - 1 * internal.chloroplast * (internal.k1 * EPP - internal.k2 * PGA * EP);
    dstatedt[2] = 0 + 1 * internal.chloroplast * (internal.k1 * RuBP * E - internal.k2 * ER) - 1 * internal.chloroplast * internal.k1 * ER * CO2 - 1 * internal.chloroplast * internal.k1 * ER * O2;
    dstatedt[38] = 0 + 1 * internal.cytosol * (internal.Vm * F6Pc / internal.Ks1 * (1 + Pic / internal.Kr1) / (1 + (TPc + PGAc) / internal.Kr2)) - 1 * internal.cytosol * (internal.Vm * F26BPc / internal.Ks1 * (1 + (TPc + PGAc) / internal.Kr1) / (1 + Pic / internal.Kr3 + HePc / internal.Kr4));
    dstatedt[11] = 0 + 1 * internal.chloroplast * (internal.Vm * (GAP * DHAP - FBP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + GAP / internal.Ks1) * (1 + DHAP / internal.Ks2) + FBP / internal.Kp1))) - 1 * internal.chloroplast * (internal.Vm * (FBP - F6P * Pi / internal.q) / (internal.Ks1 * (1 + FBP / internal.Ks1 + F6P / internal.Kp1 + F6P * Pi / (internal.Kp1 * internal.Kp2))));
    dstatedt[37] = 0 + 1 * internal.cytosol * (internal.Vm * (GAPc * DHAPc - FBPc / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + GAPc / internal.Ks1) * (1 + DHAPc / internal.Ks2) + FBPc / internal.Kp1))) - 1 * internal.cytosol * (internal.Vm * FBPc * (FBPc - F6Pc * Pic / internal.q) / (Math.pow((internal.Ks1 * (1 + F26BPc / internal.Kr1)), (2)) * (Math.pow((FBPc / (internal.Ks1 * (1 + F26BPc / internal.Kr1))), (2)) + (1 + F6Pc / internal.Kp1) * (1 + Pic / internal.Kp2))));
    dstatedt[12] = 0 + 1 * internal.chloroplast * (internal.Vm * (FBP - F6P * Pi / internal.q) / (internal.Ks1 * (1 + FBP / internal.Ks1 + F6P / internal.Kp1 + F6P * Pi / (internal.Kp1 * internal.Kp2)))) - 1 * internal.chloroplast * (internal.Vm * (internal.q * F6P * GAP - E4P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (F6P / internal.K2s1 + S7P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + E4P * R5P / internal.K1) + E4P + R5P)))) - 1 * internal.chloroplast * (internal.Vm * Math.pow((PGA / Pi), (2)) * (G1P * ATP - ADPG * PiPi / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + G1P / internal.Ks1) * (1 + ATP / internal.Ks2) + (1 + ADPG / internal.Kp1) * (1 + PiPi / internal.Kp2) - 1)));
    dstatedt[39] = 0 + 1 * internal.cytosol * (internal.Vm * FBPc * (FBPc - F6Pc * Pic / internal.q) / (Math.pow((internal.Ks1 * (1 + F26BPc / internal.Kr1)), (2)) * (Math.pow((FBPc / (internal.Ks1 * (1 + F26BPc / internal.Kr1))), (2)) + (1 + F6Pc / internal.Kp1) * (1 + Pic / internal.Kp2)))) - 1 * internal.cytosol * (internal.Vm * (G1Pc * UTPc - UDPGc * PiPic / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + G1Pc / internal.Ks1) * (1 + UTPc / internal.Ks2) + (1 + UDPGc / internal.Kp1) * (1 + PiPic / internal.Kp2) - 1))) - 1 * internal.cytosol * (internal.Vm * F6Pc * (F6Pc * UDPGc - UDPc * SucPc * Hc / internal.q) / (Math.pow((internal.Ks1 * (1 + Pic / internal.Kr11)), (2)) * internal.Ks2 * ((1 + Math.pow((F6Pc / (internal.Ks1 * (1 + Pic / internal.Kr11))), (2))) * (1 + UDPGc / internal.Ks2) + (1 + UDPc / internal.Kp1) * (1 + SucPc / internal.Kp2) - 1 + Pic / internal.Kr12))) - 1 * internal.cytosol * (internal.Vm * F6Pc / internal.Ks1 * (1 + Pic / internal.Kr1) / (1 + (TPc + PGAc) / internal.Kr2)) + 1 * internal.cytosol * (internal.Vm * F26BPc / internal.Ks1 * (1 + (TPc + PGAc) / internal.Kr1) / (1 + Pic / internal.Kr3 + HePc / internal.Kr4));
    dstatedt[19] = 0 + 1 * internal.chloroplast * (internal.Vm * (internal.q * F6P * GAP - E4P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (F6P / internal.K2s1 + S7P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + E4P * R5P / internal.K1) + E4P + R5P)))) + 2 * internal.chloroplast * (internal.Vm * (internal.q * S7P * GAP - R5P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (S7P / internal.K2s1 + F6P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + R5P * E4P / internal.K1) + R5P + E4P)))) - 1 * internal.chloroplast * (internal.Vm * (Ru5P * ATP - RuBP * ADP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + Ru5P / internal.Ks1) * (1 + ATP / internal.Ks2) + (1 + RuBP / internal.Kp1) * (1 + ADP / internal.Kp2) - 1)));
    dstatedt[7] = 0 + 1 * internal.chloroplast * (internal.k1 * EPP - internal.k2 * PGA * EP) + 1 * internal.chloroplast * (internal.k1 * EP - internal.k2 * PGA * E) + 0.5 * internal.chloroplast * internal.k1 * ER * O2 - 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - GAP * ADP * Pi / internal.q1) / (internal.Ks1 * internal.Ks2 * ((1 + PGA / internal.Ks1) * (1 + ATP / internal.Ks2) + GAP / internal.Kp1 + ADP / internal.Kp2 + Pi / internal.Kp3 + GAP * ADP * Pi / (internal.Kp1 * internal.Kp2 * internal.Kp3)))) - 1 * (internal.Vm / (PGA / internal.Ks + TP / internal.Kr1 + Pi / internal.Kr2 + PGAc / internal.Kp + TPc / internal.Kr3 + Pic / internal.Kr4 + (PGA / internal.Ks + TP / internal.Kr1 + Pi / internal.Kr2) * (PGAc / internal.Kp + TPc / internal.Kr3 + Pic / internal.Kr4)) * (PGA * (PGAc / internal.Kp + TPc / internal.Kr3 + Pic / internal.Kr4) / internal.Ks - PGAc * (PGA / internal.Ks + TP / internal.Kr1 + Pi / internal.Kr2) / internal.Kp));
    dstatedt[33] = 0 + 1 * (internal.Vm / (PGA / internal.Ks + TP / internal.Kr1 + Pi / internal.Kr2 + PGAc / internal.Kp + TPc / internal.Kr3 + Pic / internal.Kr4 + (PGA / internal.Ks + TP / internal.Kr1 + Pi / internal.Kr2) * (PGAc / internal.Kp + TPc / internal.Kr3 + Pic / internal.Kr4)) * (PGA * (PGAc / internal.Kp + TPc / internal.Kr3 + Pic / internal.Kr4) / internal.Ks - PGAc * (PGA / internal.Ks + TP / internal.Kr1 + Pi / internal.Kr2) / internal.Kp));
    dstatedt[0] = 0 - 1 * internal.chloroplast * (internal.k1 * RuBP * E - internal.k2 * ER) + 1 * internal.chloroplast * (internal.Vm * (Ru5P * ATP - RuBP * ADP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + Ru5P / internal.Ks1) * (1 + ATP / internal.Ks2) + (1 + RuBP / internal.Kp1) * (1 + ADP / internal.Kp2) - 1)));
    dstatedt[18] = 0 + 1 * internal.chloroplast * (internal.Vm * (SBP - S7P * Pi / internal.q) / (internal.Ks1 * (SBP / internal.Ks1 + (1 + S7P / internal.Kp1) * (1 + Pi / internal.Kp2)))) - 1 * internal.chloroplast * (internal.Vm * (internal.q * S7P * GAP - R5P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (S7P / internal.K2s1 + F6P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + R5P * E4P / internal.K1) + R5P + E4P))));
    dstatedt[17] = 0 + 1 * internal.chloroplast * (internal.Vm * (E4P * DHAP - SBP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + E4P / internal.Ks1) * (1 + DHAP / internal.Ks2) + SBP / internal.Kp1))) - 1 * internal.chloroplast * (internal.Vm * (SBP - S7P * Pi / internal.q) / (internal.Ks1 * (SBP / internal.Ks1 + (1 + S7P / internal.Kp1) * (1 + Pi / internal.Kp2))));
    dstatedt[48] = 0 + 1 * internal.cytosol * (internal.Vm * F6Pc * (F6Pc * UDPGc - UDPc * SucPc * Hc / internal.q) / (Math.pow((internal.Ks1 * (1 + Pic / internal.Kr11)), (2)) * internal.Ks2 * ((1 + Math.pow((F6Pc / (internal.Ks1 * (1 + Pic / internal.Kr11))), (2))) * (1 + UDPGc / internal.Ks2) + (1 + UDPc / internal.Kp1) * (1 + SucPc / internal.Kp2) - 1 + Pic / internal.Kr12))) - 1 * internal.cytosol * (internal.Vm * (SucPc - Succ * Pic / internal.q) / (internal.Ks1 * (1 + SucPc / internal.Ks1 + Succ / internal.Kp1 + Succ * Pic / (internal.Kp1 * internal.Kp2))));
    dstatedt[8] = 0 + 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - GAP * ADP * Pi / internal.q1) / (internal.Ks1 * internal.Ks2 * ((1 + PGA / internal.Ks1) * (1 + ATP / internal.Ks2) + GAP / internal.Kp1 + ADP / internal.Kp2 + Pi / internal.Kp3 + GAP * ADP * Pi / (internal.Kp1 * internal.Kp2 * internal.Kp3)))) - 2 * internal.chloroplast * (internal.Vm * (GAP * DHAP - FBP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + GAP / internal.Ks1) * (1 + DHAP / internal.Ks2) + FBP / internal.Kp1))) - 1 * internal.chloroplast * (internal.Vm * (internal.q * F6P * GAP - E4P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (F6P / internal.K2s1 + S7P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + E4P * R5P / internal.K1) + E4P + R5P)))) - 1 * internal.chloroplast * (internal.Vm * (E4P * DHAP - SBP / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + E4P / internal.Ks1) * (1 + DHAP / internal.Ks2) + SBP / internal.Kp1))) - 1 * internal.chloroplast * (internal.Vm * (internal.q * S7P * GAP - R5P * X5P) / (internal.K1 * internal.K2 * (1 + (1 + GAP / internal.K1s2) * (S7P / internal.K2s1 + F6P / internal.K2r1) + GAP / internal.K2s2 + 1 / internal.K2 * (X5P * (1 + R5P * E4P / internal.K1) + R5P + E4P)))) - 1 * (internal.Vm / (TP / internal.Ks + PGA / internal.Kr1 + Pi / internal.Kr2 + TPc / internal.Kp + PGAc / internal.Kr3 + Pic / internal.Kr4 + (TP / internal.Ks + PGA / internal.Kr1 + Pi / internal.Kr2) * (TPc / internal.Kp + PGAc / internal.Kr3 + Pic / internal.Kr4)) * (TP * (TPc / internal.Kp + PGAc / internal.Kr3 + Pic / internal.Kr4) / internal.Ks - TPc * (TP / internal.Ks + PGA / internal.Kr1 + Pi / internal.Kr2) / internal.Kp));
    dstatedt[34] = 0 + 1 * (internal.Vm / (TP / internal.Ks + PGA / internal.Kr1 + Pi / internal.Kr2 + TPc / internal.Kp + PGAc / internal.Kr3 + Pic / internal.Kr4 + (TP / internal.Ks + PGA / internal.Kr1 + Pi / internal.Kr2) * (TPc / internal.Kp + PGAc / internal.Kr3 + Pic / internal.Kr4)) * (TP * (TPc / internal.Kp + PGAc / internal.Kr3 + Pic / internal.Kr4) / internal.Ks - TPc * (TP / internal.Ks + PGA / internal.Kr1 + Pi / internal.Kr2) / internal.Kp)) - 2 * internal.cytosol * (internal.Vm * (GAPc * DHAPc - FBPc / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + GAPc / internal.Ks1) * (1 + DHAPc / internal.Ks2) + FBPc / internal.Kp1)));
    dstatedt[43] = 0 + 1 * internal.cytosol * (internal.Vm * (G1Pc * UTPc - UDPGc * PiPic / internal.q) / (internal.Ks1 * internal.Ks2 * ((1 + G1Pc / internal.Ks1) * (1 + UTPc / internal.Ks2) + (1 + UDPGc / internal.Kp1) * (1 + PiPic / internal.Kp2) - 1))) - 1 * internal.cytosol * (internal.Vm * F6Pc * (F6Pc * UDPGc - UDPc * SucPc * Hc / internal.q) / (Math.pow((internal.Ks1 * (1 + Pic / internal.Kr11)), (2)) * internal.Ks2 * ((1 + Math.pow((F6Pc / (internal.Ks1 * (1 + Pic / internal.Kr11))), (2))) * (1 + UDPGc / internal.Ks2) + (1 + UDPc / internal.Kp1) * (1 + SucPc / internal.Kp2) - 1 + Pic / internal.Kr12)));
    var W4 = 6 * EOP - 70000 * Pi * E;
    dstatedt[6] = 0 - 1 * internal.chloroplast * (W4);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RuBP", "E", "ER", "EPP", "EPG", "EP", "EOP", "PGA", "TP", "GAP", "DHAP", "FBP", "HeP", "F6P", "G6P", "G1P", "E4P", "SBP", "S7P", "PeP", "X5P", "R5P", "Ru5P", "ADPG", "ATP", "ADP", "Pi", "PiPi", "H", "CO2", "O2", "NADPH", "NADP", "PGAc", "TPc", "GAPc", "DHAPc", "FBPc", "F26BPc", "HePc", "F6Pc", "G6Pc", "G1Pc", "UDPGc", "UTPc", "UDPc", "ATPc", "ADPc", "SucPc", "Succ", "Pic", "PiPic", "Hc"];
    this.metadata.internalOrder = {ADPG_init: null, ADT: null, ADTc: null, ATP_init: null, ATPc_init: null, chloroplast: null, cytosol: null, E4P_init: null, EOP_init: null, EP_init: null, EPG_init: null, EPP_init: null, ER_init: null, Et: null, F26BPc_init: null, FBP_init: null, FBPc_init: null, H_init: null, Hc_init: null, HeP_init: null, HePc_init: null, initial_ADP: null, initial_ADPc: null, initial_ADPG: null, initial_ATP: null, initial_ATPc: null, initial_CO2: null, initial_DHAP: null, initial_DHAPc: null, initial_E: null, initial_E4P: null, initial_EOP: null, initial_EP: null, initial_EPG: null, initial_EPP: null, initial_ER: null, initial_F26BPc: null, initial_F6P: null, initial_F6Pc: null, initial_FBP: null, initial_FBPc: null, initial_G1P: null, initial_G1Pc: null, initial_G6P: null, initial_G6Pc: null, initial_GAP: null, initial_GAPc: null, initial_H: null, initial_Hc: null, initial_HeP: null, initial_HePc: null, initial_NADP: null, initial_NADPH: null, initial_O2: null, initial_PeP: null, initial_PGA: null, initial_PGAc: null, initial_Pi: null, initial_Pic: null, initial_PiPi: null, initial_PiPic: null, initial_R5P: null, initial_Ru5P: null, initial_RuBP: null, initial_S7P: null, initial_SBP: null, initial_Succ: null, initial_SucPc: null, initial_TP: null, initial_TPc: null, initial_UDPc: null, initial_UDPGc: null, initial_UTPc: null, initial_X5P: null, k1: null, K1: null, K1s2: null, k2: null, K2: null, K2r1: null, K2s1: null, K2s2: null, Kp: null, Kp1: null, Kp12: null, Kp2: null, Kp3: null, Kr1: null, Kr11: null, Kr12: null, Kr2: null, Kr3: null, Kr4: null, Ks: null, Ks1: null, Ks2: null, NADP_init: null, NADPH_init: null, NADPT: null, O2_init: null, PeP_init: null, PGA_init: null, PGAc_init: null, PiPi_init: null, PiPic_init: null, PiT: null, PiTc: null, q: null, q1: null, q12: null, RuBP_init: null, S7P_init: null, SBP_init: null, Succ_init: null, SucPc_init: null, TP_init: null, TPc_init: null, UDPc_init: null, UDPGc_init: null, UDTc: null, UTPc_init: null, V28: null, Vm: null};
    this.metadata.variableOrder = {RuBP: null, E: null, ER: null, EPP: null, EPG: null, EP: null, EOP: null, PGA: null, TP: null, GAP: null, DHAP: null, FBP: null, HeP: null, F6P: null, G6P: null, G1P: null, E4P: null, SBP: null, S7P: null, PeP: null, X5P: null, R5P: null, Ru5P: null, ADPG: null, ATP: null, ADP: null, Pi: null, PiPi: null, H: null, CO2: null, O2: null, NADPH: null, NADP: null, PGAc: null, TPc: null, GAPc: null, DHAPc: null, FBPc: null, F26BPc: null, HePc: null, F6Pc: null, G6Pc: null, G1Pc: null, UDPGc: null, UTPc: null, UDPc: null, ATPc: null, ADPc: null, SucPc: null, Succ: null, Pic: null, PiPic: null, Hc: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}