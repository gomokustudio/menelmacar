export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.extracellular = 1;
    internal.KATPASE = 33.700000000000003;
    internal.KeqADH = 6.8999999999999997e-05;
    internal.KeqALD = 0.069000000000000006;
    internal.KeqENO = 6.7000000000000002;
    internal.KeqG3PDH = 4300;
    internal.KeqGLK = 3800;
    internal.KeqGLT = 1;
    internal.KeqPGI_2 = 0.314;
    internal.KeqPGK = 3200;
    internal.KeqPGM = 0.19;
    internal.KeqPYK = 6500;
    internal.KGLYCOGEN_3 = 6;
    internal.KiADHACE = 1.1000000000000001;
    internal.KiADHETOH = 90;
    internal.KiADHNAD = 0.92000000000000004;
    internal.KiADHNADH = 0.031;
    internal.KmADHACE = 1.1100000000000001;
    internal.KmADHETOH = 17;
    internal.KmADHNAD = 0.17000000000000001;
    internal.KmADHNADH = 0.11;
    internal.KmALDDHAP = 2.3999999999999999;
    internal.KmALDF16P = 0.29999999999999999;
    internal.KmALDGAP = 2;
    internal.KmALDGAPi = 10;
    internal.KmENOP2G = 0.040000000000000001;
    internal.KmENOPEP = 0.5;
    internal.KmG3PDHDHAP = 0.40000000000000002;
    internal.KmG3PDHGLY = 1;
    internal.KmG3PDHNAD = 0.93000000000000005;
    internal.KmG3PDHNADH = 0.023;
    internal.KmGAPDHBPG = 0.0097999999999999997;
    internal.KmGAPDHGAP = 0.20999999999999999;
    internal.KmGAPDHNAD = 0.089999999999999997;
    internal.KmGAPDHNADH = 0.059999999999999998;
    internal.KmGLKADP = 0.23000000000000001;
    internal.KmGLKATP = 0.14999999999999999;
    internal.KmGLKG6P = 30;
    internal.KmGLKGLCi = 0.080000000000000002;
    internal.KmGLTGLCi = 1.1918;
    internal.KmGLTGLCo = 1.1918;
    internal.KmPDCPYR = 4.3300000000000001;
    internal.KmPGIF6P_2 = 0.29999999999999999;
    internal.KmPGIG6P_2 = 1.3999999999999999;
    internal.KmPGKADP = 0.20000000000000001;
    internal.KmPGKATP = 0.29999999999999999;
    internal.KmPGKBPG = 0.0030000000000000001;
    internal.KmPGKP3G = 0.53000000000000003;
    internal.KmPGMP2G = 0.080000000000000002;
    internal.KmPGMP3G = 1.2;
    internal.KmPYKADP = 0.53000000000000003;
    internal.KmPYKATP = 1.5;
    internal.KmPYKPEP = 0.14000000000000001;
    internal.KmPYKPYR = 21;
    internal.KSUCC = 21.399999999999999;
    internal.KTREHALOSE = 2.3999999999999999;
    internal.nPDC = 1.8999999999999999;
    internal.VmADH = 810;
    internal.VmALD = 322.25799999999998;
    internal.VmENO = 365.80599999999998;
    internal.VmG3PDH = 70.150000000000006;
    internal.VmGAPDHf = 1184.52;
    internal.VmGAPDHr = 6549.8000000000002;
    internal.VmGLK = 226.452;
    internal.VmGLT = 97.263999999999996;
    internal.VmPDC = 174.19399999999999;
    internal.VmPFK = 182.90299999999999;
    internal.VmPGI_2 = 339.67700000000002;
    internal.VmPGK = 1306.45;
    internal.VmPGM = 2525.8099999999999;
    internal.VmPYK = 1088.71;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var ADP_init = (internal.initial_SUM_P - Math.pow((Math.pow((internal.initial_P), (2)) * (1 - 4 * internal.KeqAK) + 2 * internal.initial_SUM_P * internal.initial_P * (4 * internal.KeqAK - 1) + Math.pow((internal.initial_SUM_P), (2))), (0.5))) / (1 - 4 * internal.KeqAK);
    var AMP_init = internal.initial_SUM_P - internal.initial_ATP - internal.initial_ADP;
    var ATP_init = (internal.initial_P - internal.initial_ADP) / 2;
    internal.initial_ADP = ADP_init;
    internal.initial_AMP = AMP_init;
    internal.initial_ATP = ATP_init;
    var state = Array(26).fill(0);
    state[0] = internal.initial_GLCi;
    state[1] = internal.initial_G6P;
    state[2] = internal.initial_F6P;
    state[3] = internal.initial_F16P;
    state[4] = internal.initial_TRIO;
    state[5] = internal.initial_BPG;
    state[6] = internal.initial_P3G;
    state[7] = internal.initial_P2G;
    state[8] = internal.initial_PEP;
    state[9] = internal.initial_PYR;
    state[10] = internal.initial_ACE;
    state[11] = internal.initial_P;
    state[12] = internal.initial_NAD;
    state[13] = internal.initial_NADH;
    state[14] = internal.initial_Glyc;
    state[15] = internal.initial_Trh;
    state[16] = internal.initial_CO2;
    state[17] = internal.initial_SUCC;
    state[18] = internal.initial_GLCo;
    state[19] = internal.initial_ETOH;
    state[20] = internal.initial_GLY;
    state[21] = internal.initial_ATP;
    state[22] = internal.initial_ADP;
    state[23] = internal.initial_AMP;
    state[24] = internal.initial_SUM_P;
    state[25] = internal.initial_F26BP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ACE_init", "BPG_init", "CiPFKATP", "CO2_init", "CPFKAMP", "CPFKATP", "CPFKF16BP", "CPFKF26BP", "ETOH_init", "F16P_init", "F26BP_init", "F6P_init", "G6P_init", "GLCi_init", "GLCo_init", "GLY_init", "Glyc_init", "gR", "KeqAK", "KeqTPI", "KiPFKATP", "KmPFKATP", "KmPFKF6P", "KPFKAMP", "KPFKF16BP", "KPFKF26BP", "Lzero", "NAD_init", "NADH_init", "P_init", "P2G_init", "P3G_init", "PEP_init", "PYR_init", "SUCC_init", "SUM_P_init", "Trh_init", "TRIO_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ACE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BPG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CiPFKATP", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CO2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CPFKAMP", internal, 0.084500000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CPFKATP", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CPFKF16BP", internal, 0.39700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CPFKF26BP", internal, 0.017399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ETOH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F16P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F26BP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLCi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLCo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLY_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glyc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gR", internal, 5.1200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KeqAK", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KeqTPI", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KiPFKATP", internal, 0.65000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmPFKATP", internal, 0.70999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmPFKF6P", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KPFKAMP", internal, 0.099500000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KPFKF16BP", internal, 0.111, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KPFKF26BP", internal, 0.00068199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lzero", internal, 0.66000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2G_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P3G_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PEP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PYR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SUCC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SUM_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trh_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TRIO_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ACE = internal.ACE_init;
    internal.initial_BPG = internal.BPG_init;
    internal.initial_CO2 = internal.CO2_init;
    internal.initial_ETOH = internal.ETOH_init;
    internal.initial_F16P = internal.F16P_init;
    internal.initial_F26BP = internal.F26BP_init;
    internal.initial_F6P = internal.F6P_init;
    internal.initial_G6P = internal.G6P_init;
    internal.initial_GLCi = internal.GLCi_init;
    internal.initial_GLCo = internal.GLCo_init;
    internal.initial_GLY = internal.GLY_init;
    internal.initial_Glyc = internal.Glyc_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_P = internal.P_init;
    internal.initial_P2G = internal.P2G_init;
    internal.initial_P3G = internal.P3G_init;
    internal.initial_PEP = internal.PEP_init;
    internal.initial_PYR = internal.PYR_init;
    internal.initial_SUCC = internal.SUCC_init;
    internal.initial_SUM_P = internal.SUM_P_init;
    internal.initial_Trh = internal.Trh_init;
    internal.initial_TRIO = internal.TRIO_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const GLCi = state[0];
    const G6P = state[1];
    const F6P = state[2];
    const F16P = state[3];
    const TRIO = state[4];
    const BPG = state[5];
    const P3G = state[6];
    const P2G = state[7];
    const PEP = state[8];
    const PYR = state[9];
    const ACE = state[10];
    const NAD = state[12];
    const NADH = state[13];
    const GLCo = state[18];
    const ETOH = state[19];
    const GLY = state[20];
    const ATP = state[21];
    const ADP = state[22];
    const AMP = state[23];
    const F26BP = state[25];
    dstatedt[22] = 0 + 0;
    dstatedt[23] = 0 + 0;
    dstatedt[21] = 0 + 0;
    dstatedt[16] = 0;
    dstatedt[19] = 0;
    dstatedt[25] = 0;
    dstatedt[18] = 0;
    dstatedt[20] = 0;
    dstatedt[14] = 0;
    dstatedt[17] = 0;
    dstatedt[24] = 0;
    dstatedt[15] = 0;
    dstatedt[10] = 0 + 1 * internal.cytosol * internal.VmPDC * (Math.pow((PYR), (internal.nPDC)) / Math.pow((internal.KmPDCPYR), (internal.nPDC))) / (1 + Math.pow((PYR), (internal.nPDC)) / Math.pow((internal.KmPDCPYR), (internal.nPDC))) - 2 * internal.cytosol * internal.KSUCC * ACE - 1 * - internal.cytosol * (internal.VmADH / (internal.KiADHNAD * internal.KmADHETOH) * (NAD * ETOH - NADH * ACE / internal.KeqADH) / (1 + NAD / internal.KiADHNAD + internal.KmADHNAD * ETOH / (internal.KiADHNAD * internal.KmADHETOH) + internal.KmADHNADH * ACE / (internal.KiADHNADH * internal.KmADHACE) + NADH / internal.KiADHNADH + NAD * ETOH / (internal.KiADHNAD * internal.KmADHETOH) + internal.KmADHNADH * NAD * ACE / (internal.KiADHNAD * internal.KiADHNADH * internal.KmADHACE) + internal.KmADHNAD * ETOH * NADH / (internal.KiADHNAD * internal.KmADHETOH * internal.KiADHNADH) + NADH * ACE / (internal.KiADHNADH * internal.KmADHACE) + NAD * ETOH * ACE / (internal.KiADHNAD * internal.KmADHETOH * internal.KiADHACE) + ETOH * NADH * ACE / (internal.KiADHETOH * internal.KiADHNADH * internal.KmADHACE)));
    dstatedt[5] = 0 + 1 * internal.cytosol * (internal.VmGAPDHf * (internal.KeqTPI / (1 + internal.KeqTPI)) * TRIO * NAD / (internal.KmGAPDHGAP * internal.KmGAPDHNAD) - internal.VmGAPDHr * BPG * NADH / (internal.KmGAPDHBPG * internal.KmGAPDHNADH)) / ((1 + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO / internal.KmGAPDHGAP + BPG / internal.KmGAPDHBPG) * (1 + NAD / internal.KmGAPDHNAD + NADH / internal.KmGAPDHNADH)) - 1 * internal.cytosol * internal.VmPGK / (internal.KmPGKP3G * internal.KmPGKATP) * (internal.KeqPGK * BPG * ADP - P3G * ATP) / ((1 + BPG / internal.KmPGKBPG + P3G / internal.KmPGKP3G) * (1 + ATP / internal.KmPGKATP + ADP / internal.KmPGKADP));
    dstatedt[3] = 0 + 1 * internal.cytosol * internal.VmPFK * internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP) * (1 + F6P / internal.KmPFKF6P + ATP / internal.KmPFKATP + internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP)) / (Math.pow(((1 + F6P / internal.KmPFKF6P + ATP / internal.KmPFKATP + internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP))), (2)) + (internal.Lzero * Math.pow(((1 + internal.CiPFKATP * (ATP / internal.KiPFKATP)) / (1 + ATP / internal.KiPFKATP)), (2)) * Math.pow(((1 + internal.CPFKAMP * (AMP / internal.KPFKAMP)) / (1 + AMP / internal.KPFKAMP)), (2)) * Math.pow(((1 + internal.CPFKF26BP * F26BP / internal.KPFKF26BP + internal.CPFKF16BP * F16P / internal.KPFKF16BP) / (1 + F26BP / internal.KPFKF26BP + F16P / internal.KPFKF16BP)), (2))) * Math.pow(((1 + internal.CPFKATP * (ATP / internal.KmPFKATP))), (2))) - 1 * internal.cytosol * internal.VmALD / internal.KmALDF16P * (F16P - internal.KeqTPI / (1 + internal.KeqTPI) * TRIO * (1 / (1 + internal.KeqTPI)) * TRIO / internal.KeqALD) / (1 + F16P / internal.KmALDF16P + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO / internal.KmALDGAP + 1 / (1 + internal.KeqTPI) * TRIO / internal.KmALDDHAP + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO * (1 / (1 + internal.KeqTPI)) * TRIO / (internal.KmALDGAP * internal.KmALDDHAP) + F16P * (internal.KeqTPI / (1 + internal.KeqTPI)) * TRIO / (internal.KmALDGAPi * internal.KmALDF16P));
    dstatedt[2] = 0 + 1 * internal.cytosol * internal.VmPGI_2 / internal.KmPGIG6P_2 * (G6P - F6P / internal.KeqPGI_2) / (1 + G6P / internal.KmPGIG6P_2 + F6P / internal.KmPGIF6P_2) - 1 * internal.cytosol * internal.VmPFK * internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP) * (1 + F6P / internal.KmPFKF6P + ATP / internal.KmPFKATP + internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP)) / (Math.pow(((1 + F6P / internal.KmPFKF6P + ATP / internal.KmPFKATP + internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP))), (2)) + (internal.Lzero * Math.pow(((1 + internal.CiPFKATP * (ATP / internal.KiPFKATP)) / (1 + ATP / internal.KiPFKATP)), (2)) * Math.pow(((1 + internal.CPFKAMP * (AMP / internal.KPFKAMP)) / (1 + AMP / internal.KPFKAMP)), (2)) * Math.pow(((1 + internal.CPFKF26BP * F26BP / internal.KPFKF26BP + internal.CPFKF16BP * F16P / internal.KPFKF16BP) / (1 + F26BP / internal.KPFKF26BP + F16P / internal.KPFKF16BP)), (2))) * Math.pow(((1 + internal.CPFKATP * (ATP / internal.KmPFKATP))), (2)));
    dstatedt[1] = 0 + 1 * internal.cytosol * internal.VmGLK / (internal.KmGLKGLCi * internal.KmGLKATP) * (GLCi * ATP - G6P * ADP / internal.KeqGLK) / ((1 + GLCi / internal.KmGLKGLCi + G6P / internal.KmGLKG6P) * (1 + ATP / internal.KmGLKATP + ADP / internal.KmGLKADP)) - 1 * internal.cytosol * internal.VmPGI_2 / internal.KmPGIG6P_2 * (G6P - F6P / internal.KeqPGI_2) / (1 + G6P / internal.KmPGIG6P_2 + F6P / internal.KmPGIF6P_2) - 1 * internal.cytosol * internal.KGLYCOGEN_3 - 2 * internal.cytosol * internal.KTREHALOSE;
    dstatedt[0] = 0 - 1 * internal.cytosol * internal.VmGLK / (internal.KmGLKGLCi * internal.KmGLKATP) * (GLCi * ATP - G6P * ADP / internal.KeqGLK) / ((1 + GLCi / internal.KmGLKGLCi + G6P / internal.KmGLKG6P) * (1 + ATP / internal.KmGLKATP + ADP / internal.KmGLKADP)) + 1 * internal.VmGLT / internal.KmGLTGLCo * (GLCo - GLCi / internal.KeqGLT) / (1 + GLCo / internal.KmGLTGLCo + GLCi / internal.KmGLTGLCi + 0.91000000000000003 * GLCo * GLCi / (internal.KmGLTGLCo * internal.KmGLTGLCi));
    dstatedt[12] = 0 - 1 * internal.cytosol * (internal.VmGAPDHf * (internal.KeqTPI / (1 + internal.KeqTPI)) * TRIO * NAD / (internal.KmGAPDHGAP * internal.KmGAPDHNAD) - internal.VmGAPDHr * BPG * NADH / (internal.KmGAPDHBPG * internal.KmGAPDHNADH)) / ((1 + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO / internal.KmGAPDHGAP + BPG / internal.KmGAPDHBPG) * (1 + NAD / internal.KmGAPDHNAD + NADH / internal.KmGAPDHNADH)) - 3 * internal.cytosol * internal.KSUCC * ACE + 1 * - internal.cytosol * (internal.VmADH / (internal.KiADHNAD * internal.KmADHETOH) * (NAD * ETOH - NADH * ACE / internal.KeqADH) / (1 + NAD / internal.KiADHNAD + internal.KmADHNAD * ETOH / (internal.KiADHNAD * internal.KmADHETOH) + internal.KmADHNADH * ACE / (internal.KiADHNADH * internal.KmADHACE) + NADH / internal.KiADHNADH + NAD * ETOH / (internal.KiADHNAD * internal.KmADHETOH) + internal.KmADHNADH * NAD * ACE / (internal.KiADHNAD * internal.KiADHNADH * internal.KmADHACE) + internal.KmADHNAD * ETOH * NADH / (internal.KiADHNAD * internal.KmADHETOH * internal.KiADHNADH) + NADH * ACE / (internal.KiADHNADH * internal.KmADHACE) + NAD * ETOH * ACE / (internal.KiADHNAD * internal.KmADHETOH * internal.KiADHACE) + ETOH * NADH * ACE / (internal.KiADHETOH * internal.KiADHNADH * internal.KmADHACE))) + 1 * internal.cytosol * internal.VmG3PDH / (internal.KmG3PDHDHAP * internal.KmG3PDHNADH) * (1 / (1 + internal.KeqTPI) * TRIO * NADH - GLY * NAD / internal.KeqG3PDH) / ((1 + 1 / (1 + internal.KeqTPI) * TRIO / internal.KmG3PDHDHAP + GLY / internal.KmG3PDHGLY) * (1 + NADH / internal.KmG3PDHNADH + NAD / internal.KmG3PDHNAD));
    dstatedt[13] = 0 + 1 * internal.cytosol * (internal.VmGAPDHf * (internal.KeqTPI / (1 + internal.KeqTPI)) * TRIO * NAD / (internal.KmGAPDHGAP * internal.KmGAPDHNAD) - internal.VmGAPDHr * BPG * NADH / (internal.KmGAPDHBPG * internal.KmGAPDHNADH)) / ((1 + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO / internal.KmGAPDHGAP + BPG / internal.KmGAPDHBPG) * (1 + NAD / internal.KmGAPDHNAD + NADH / internal.KmGAPDHNADH)) + 3 * internal.cytosol * internal.KSUCC * ACE - 1 * - internal.cytosol * (internal.VmADH / (internal.KiADHNAD * internal.KmADHETOH) * (NAD * ETOH - NADH * ACE / internal.KeqADH) / (1 + NAD / internal.KiADHNAD + internal.KmADHNAD * ETOH / (internal.KiADHNAD * internal.KmADHETOH) + internal.KmADHNADH * ACE / (internal.KiADHNADH * internal.KmADHACE) + NADH / internal.KiADHNADH + NAD * ETOH / (internal.KiADHNAD * internal.KmADHETOH) + internal.KmADHNADH * NAD * ACE / (internal.KiADHNAD * internal.KiADHNADH * internal.KmADHACE) + internal.KmADHNAD * ETOH * NADH / (internal.KiADHNAD * internal.KmADHETOH * internal.KiADHNADH) + NADH * ACE / (internal.KiADHNADH * internal.KmADHACE) + NAD * ETOH * ACE / (internal.KiADHNAD * internal.KmADHETOH * internal.KiADHACE) + ETOH * NADH * ACE / (internal.KiADHETOH * internal.KiADHNADH * internal.KmADHACE))) - 1 * internal.cytosol * internal.VmG3PDH / (internal.KmG3PDHDHAP * internal.KmG3PDHNADH) * (1 / (1 + internal.KeqTPI) * TRIO * NADH - GLY * NAD / internal.KeqG3PDH) / ((1 + 1 / (1 + internal.KeqTPI) * TRIO / internal.KmG3PDHDHAP + GLY / internal.KmG3PDHGLY) * (1 + NADH / internal.KmG3PDHNADH + NAD / internal.KmG3PDHNAD));
    dstatedt[11] = 0 - 1 * internal.cytosol * internal.VmGLK / (internal.KmGLKGLCi * internal.KmGLKATP) * (GLCi * ATP - G6P * ADP / internal.KeqGLK) / ((1 + GLCi / internal.KmGLKGLCi + G6P / internal.KmGLKG6P) * (1 + ATP / internal.KmGLKATP + ADP / internal.KmGLKADP)) - 1 * internal.cytosol * internal.KGLYCOGEN_3 - 1 * internal.cytosol * internal.KTREHALOSE - 1 * internal.cytosol * internal.VmPFK * internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP) * (1 + F6P / internal.KmPFKF6P + ATP / internal.KmPFKATP + internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP)) / (Math.pow(((1 + F6P / internal.KmPFKF6P + ATP / internal.KmPFKATP + internal.gR * (F6P / internal.KmPFKF6P) * (ATP / internal.KmPFKATP))), (2)) + (internal.Lzero * Math.pow(((1 + internal.CiPFKATP * (ATP / internal.KiPFKATP)) / (1 + ATP / internal.KiPFKATP)), (2)) * Math.pow(((1 + internal.CPFKAMP * (AMP / internal.KPFKAMP)) / (1 + AMP / internal.KPFKAMP)), (2)) * Math.pow(((1 + internal.CPFKF26BP * F26BP / internal.KPFKF26BP + internal.CPFKF16BP * F16P / internal.KPFKF16BP) / (1 + F26BP / internal.KPFKF26BP + F16P / internal.KPFKF16BP)), (2))) * Math.pow(((1 + internal.CPFKATP * (ATP / internal.KmPFKATP))), (2))) + 1 * internal.cytosol * internal.VmPGK / (internal.KmPGKP3G * internal.KmPGKATP) * (internal.KeqPGK * BPG * ADP - P3G * ATP) / ((1 + BPG / internal.KmPGKBPG + P3G / internal.KmPGKP3G) * (1 + ATP / internal.KmPGKATP + ADP / internal.KmPGKADP)) + 1 * internal.cytosol * internal.VmPYK / (internal.KmPYKPEP * internal.KmPYKADP) * (PEP * ADP - PYR * ATP / internal.KeqPYK) / ((1 + PEP / internal.KmPYKPEP + PYR / internal.KmPYKPYR) * (1 + ATP / internal.KmPYKATP + ADP / internal.KmPYKADP)) - 4 * internal.cytosol * internal.KSUCC * ACE - 1 * internal.cytosol * internal.KATPASE * ATP;
    dstatedt[7] = 0 + 1 * internal.cytosol * internal.VmPGM / internal.KmPGMP3G * (P3G - P2G / internal.KeqPGM) / (1 + P3G / internal.KmPGMP3G + P2G / internal.KmPGMP2G) - 1 * internal.cytosol * internal.VmENO / internal.KmENOP2G * (P2G - PEP / internal.KeqENO) / (1 + P2G / internal.KmENOP2G + PEP / internal.KmENOPEP);
    dstatedt[6] = 0 + 1 * internal.cytosol * internal.VmPGK / (internal.KmPGKP3G * internal.KmPGKATP) * (internal.KeqPGK * BPG * ADP - P3G * ATP) / ((1 + BPG / internal.KmPGKBPG + P3G / internal.KmPGKP3G) * (1 + ATP / internal.KmPGKATP + ADP / internal.KmPGKADP)) - 1 * internal.cytosol * internal.VmPGM / internal.KmPGMP3G * (P3G - P2G / internal.KeqPGM) / (1 + P3G / internal.KmPGMP3G + P2G / internal.KmPGMP2G);
    dstatedt[8] = 0 + 1 * internal.cytosol * internal.VmENO / internal.KmENOP2G * (P2G - PEP / internal.KeqENO) / (1 + P2G / internal.KmENOP2G + PEP / internal.KmENOPEP) - 1 * internal.cytosol * internal.VmPYK / (internal.KmPYKPEP * internal.KmPYKADP) * (PEP * ADP - PYR * ATP / internal.KeqPYK) / ((1 + PEP / internal.KmPYKPEP + PYR / internal.KmPYKPYR) * (1 + ATP / internal.KmPYKATP + ADP / internal.KmPYKADP));
    dstatedt[9] = 0 + 1 * internal.cytosol * internal.VmPYK / (internal.KmPYKPEP * internal.KmPYKADP) * (PEP * ADP - PYR * ATP / internal.KeqPYK) / ((1 + PEP / internal.KmPYKPEP + PYR / internal.KmPYKPYR) * (1 + ATP / internal.KmPYKATP + ADP / internal.KmPYKADP)) - 1 * internal.cytosol * internal.VmPDC * (Math.pow((PYR), (internal.nPDC)) / Math.pow((internal.KmPDCPYR), (internal.nPDC))) / (1 + Math.pow((PYR), (internal.nPDC)) / Math.pow((internal.KmPDCPYR), (internal.nPDC)));
    dstatedt[4] = 0 + 2 * internal.cytosol * internal.VmALD / internal.KmALDF16P * (F16P - internal.KeqTPI / (1 + internal.KeqTPI) * TRIO * (1 / (1 + internal.KeqTPI)) * TRIO / internal.KeqALD) / (1 + F16P / internal.KmALDF16P + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO / internal.KmALDGAP + 1 / (1 + internal.KeqTPI) * TRIO / internal.KmALDDHAP + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO * (1 / (1 + internal.KeqTPI)) * TRIO / (internal.KmALDGAP * internal.KmALDDHAP) + F16P * (internal.KeqTPI / (1 + internal.KeqTPI)) * TRIO / (internal.KmALDGAPi * internal.KmALDF16P)) - 1 * internal.cytosol * (internal.VmGAPDHf * (internal.KeqTPI / (1 + internal.KeqTPI)) * TRIO * NAD / (internal.KmGAPDHGAP * internal.KmGAPDHNAD) - internal.VmGAPDHr * BPG * NADH / (internal.KmGAPDHBPG * internal.KmGAPDHNADH)) / ((1 + internal.KeqTPI / (1 + internal.KeqTPI) * TRIO / internal.KmGAPDHGAP + BPG / internal.KmGAPDHBPG) * (1 + NAD / internal.KmGAPDHNAD + NADH / internal.KmGAPDHNADH)) - 1 * internal.cytosol * internal.VmG3PDH / (internal.KmG3PDHDHAP * internal.KmG3PDHNADH) * (1 / (1 + internal.KeqTPI) * TRIO * NADH - GLY * NAD / internal.KeqG3PDH) / ((1 + 1 / (1 + internal.KeqTPI) * TRIO / internal.KmG3PDHDHAP + GLY / internal.KmG3PDHGLY) * (1 + NADH / internal.KmG3PDHNADH + NAD / internal.KmG3PDHNAD));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "GLCi", "G6P", "F6P", "F16P", "TRIO", "BPG", "P3G", "P2G", "PEP", "PYR", "ACE", "P", "NAD", "NADH", "Glyc", "Trh", "CO2", "SUCC", "GLCo", "ETOH", "GLY", "ATP", "ADP", "AMP", "SUM_P", "F26BP"];
    this.metadata.internalOrder = {ACE_init: null, BPG_init: null, CiPFKATP: null, CO2_init: null, CPFKAMP: null, CPFKATP: null, CPFKF16BP: null, CPFKF26BP: null, cytosol: null, ETOH_init: null, extracellular: null, F16P_init: null, F26BP_init: null, F6P_init: null, G6P_init: null, GLCi_init: null, GLCo_init: null, GLY_init: null, Glyc_init: null, gR: null, initial_ACE: null, initial_ADP: null, initial_AMP: null, initial_ATP: null, initial_BPG: null, initial_CO2: null, initial_ETOH: null, initial_F16P: null, initial_F26BP: null, initial_F6P: null, initial_G6P: null, initial_GLCi: null, initial_GLCo: null, initial_GLY: null, initial_Glyc: null, initial_NAD: null, initial_NADH: null, initial_P: null, initial_P2G: null, initial_P3G: null, initial_PEP: null, initial_PYR: null, initial_SUCC: null, initial_SUM_P: null, initial_Trh: null, initial_TRIO: null, KATPASE: null, KeqADH: null, KeqAK: null, KeqALD: null, KeqENO: null, KeqG3PDH: null, KeqGLK: null, KeqGLT: null, KeqPGI_2: null, KeqPGK: null, KeqPGM: null, KeqPYK: null, KeqTPI: null, KGLYCOGEN_3: null, KiADHACE: null, KiADHETOH: null, KiADHNAD: null, KiADHNADH: null, KiPFKATP: null, KmADHACE: null, KmADHETOH: null, KmADHNAD: null, KmADHNADH: null, KmALDDHAP: null, KmALDF16P: null, KmALDGAP: null, KmALDGAPi: null, KmENOP2G: null, KmENOPEP: null, KmG3PDHDHAP: null, KmG3PDHGLY: null, KmG3PDHNAD: null, KmG3PDHNADH: null, KmGAPDHBPG: null, KmGAPDHGAP: null, KmGAPDHNAD: null, KmGAPDHNADH: null, KmGLKADP: null, KmGLKATP: null, KmGLKG6P: null, KmGLKGLCi: null, KmGLTGLCi: null, KmGLTGLCo: null, KmPDCPYR: null, KmPFKATP: null, KmPFKF6P: null, KmPGIF6P_2: null, KmPGIG6P_2: null, KmPGKADP: null, KmPGKATP: null, KmPGKBPG: null, KmPGKP3G: null, KmPGMP2G: null, KmPGMP3G: null, KmPYKADP: null, KmPYKATP: null, KmPYKPEP: null, KmPYKPYR: null, KPFKAMP: null, KPFKF16BP: null, KPFKF26BP: null, KSUCC: null, KTREHALOSE: null, Lzero: null, NAD_init: null, NADH_init: null, nPDC: null, P_init: null, P2G_init: null, P3G_init: null, PEP_init: null, PYR_init: null, SUCC_init: null, SUM_P_init: null, Trh_init: null, TRIO_init: null, VmADH: null, VmALD: null, VmENO: null, VmG3PDH: null, VmGAPDHf: null, VmGAPDHr: null, VmGLK: null, VmGLT: null, VmPDC: null, VmPFK: null, VmPGI_2: null, VmPGK: null, VmPGM: null, VmPYK: null};
    this.metadata.variableOrder = {GLCi: null, G6P: null, F6P: null, F16P: null, TRIO: null, BPG: null, P3G: null, P2G: null, PEP: null, PYR: null, ACE: null, P: null, NAD: null, NADH: null, Glyc: null, Trh: null, CO2: null, SUCC: null, GLCo: null, ETOH: null, GLY: null, ATP: null, ADP: null, AMP: null, SUM_P: null, F26BP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
