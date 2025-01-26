export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.cytosol = 1;
    internal.E_Aldo_v = 500000000;
    internal.F_Aldo_v = 500000000;
    internal.F_TKL_v = 500000000;
    internal.FBPase_ch_KiF6P = 0.69999999999999996;
    internal.FBPase_ch_KiPi = 12;
    internal.FBPase_ch_km = 0.029999999999999999;
    internal.FBPase_ch_vm = 200;
    internal.G_TKL_v = 500000000;
    internal.G3Pdh_v = 500000000;
    internal.LR_kmADP = 0.014;
    internal.LR_kmPi = 0.29999999999999999;
    internal.LR_vm = 3500;
    internal.PGA_xpMult = 0.75;
    internal.PGI_v = 500000000;
    internal.PGK_v = 500000000;
    internal.PGM_v = 500000000;
    internal.pi = 3.1415929999999999;
    internal.q10 = 0.84999999999999998;
    internal.q11 = 0.40000000000000002;
    internal.q12 = 0.67000000000000004;
    internal.q14 = 2.2999999999999998;
    internal.q15 = 0.058000000000000003;
    internal.q2 = 0.00031;
    internal.q3 = 16000000;
    internal.q4 = 22;
    internal.q5 = 7.0999999999999996;
    internal.q7 = 0.084000000000000005;
    internal.q8 = 13;
    internal.R5Piso_v = 500000000;
    internal.Rbco_KiFBP = 0.040000000000000001;
    internal.Rbco_KiNADPH = 0.070000000000000007;
    internal.Rbco_KiPGA = 0.83999999999999997;
    internal.Rbco_KiPi = 0.90000000000000002;
    internal.Rbco_KiSBP = 0.074999999999999997;
    internal.Rbco_km = 0.02;
    internal.Rbco_vm = 340;
    internal.Ru5Pk_ch_KiADP1 = 2.5;
    internal.Ru5Pk_ch_KiADP2 = 0.40000000000000002;
    internal.Ru5Pk_ch_KiPGA = 2;
    internal.Ru5Pk_ch_KiPi = 4;
    internal.Ru5Pk_ch_KiRuBP = 0.69999999999999996;
    internal.Ru5Pk_ch_km1 = 0.050000000000000003;
    internal.Ru5Pk_ch_km2 = 0.050000000000000003;
    internal.Ru5Pk_ch_vm = 10000;
    internal.SBPase_ch_KiPi = 12;
    internal.SBPase_ch_km = 0.012999999999999999;
    internal.SBPase_ch_vm = 40;
    internal.StPase_kiG1P = 0.050000000000000003;
    internal.StPase_km = 0.10000000000000001;
    internal.StPase_Vm = 40;
    internal.stsyn_ch_ka1 = 0.10000000000000001;
    internal.stsyn_ch_ka2 = 0.02;
    internal.stsyn_ch_ka3 = 0.02;
    internal.stsyn_ch_Ki = 10;
    internal.stsyn_ch_km1 = 0.080000000000000002;
    internal.stsyn_ch_km2 = 0.080000000000000002;
    internal.StSyn_vm = 40;
    internal.TP_Piap_kDHAP_ch = 0.076999999999999999;
    internal.TP_Piap_kGAP_ch = 0.074999999999999997;
    internal.TP_Piap_kPGA_ch = 0.25;
    internal.TP_Piap_kPi_ch = 0.63;
    internal.TP_Piap_kPi_cyt = 0.73999999999999999;
    internal.TP_Piap_vm = 250;
    internal.TPI_v = 500000000;
    internal.X5Pepi_v = 500000000;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(27).fill(0);
    state[0] = internal.initial_x_CO2;
    state[1] = internal.initial_RuBP_ch;
    state[2] = internal.initial_PGA_ch;
    state[3] = internal.initial_ATP_ch;
    state[4] = internal.initial_BPGA_ch;
    state[5] = internal.initial_x_NADPH_ch;
    state[6] = internal.initial_GAP_ch;
    state[7] = internal.initial_Pi_ch;
    state[8] = internal.initial_DHAP_ch;
    state[9] = internal.initial_FBP_ch;
    state[10] = internal.initial_F6P_ch;
    state[11] = internal.initial_E4P_ch;
    state[12] = internal.initial_X5P_ch;
    state[13] = internal.initial_SBP_ch;
    state[14] = internal.initial_S7P_ch;
    state[15] = internal.initial_R5P_ch;
    state[16] = internal.initial_Ru5P_ch;
    state[17] = internal.initial_x_Pi_cyt;
    state[18] = internal.initial_x_GAP_cyt;
    state[19] = internal.initial_G6P_ch;
    state[20] = internal.initial_x_NADP_ch;
    state[21] = internal.initial_x_PGA_cyt;
    state[22] = internal.initial_ADP_ch;
    state[23] = internal.initial_x_DHAP_cyt;
    state[24] = internal.initial_x_Proton_ch;
    state[25] = internal.initial_G1P_ch;
    state[26] = internal.initial_x_Starch_ch;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_ch_init", "ATP_ch_init", "BPGA_ch_init", "DHAP_ch_init", "E4P_ch_init", "F6P_ch_init", "FBP_ch_init", "G1P_ch_init", "G6P_ch_init", "GAP_ch_init", "Light_on", "PGA_ch_init", "Pi_ch_init", "R5P_ch_init", "Ru5P_ch_init", "RuBP_ch_init", "S7P_ch_init", "SBP_ch_init", "x_CO2_init", "x_DHAP_cyt_init", "x_GAP_cyt_init", "x_NADP_ch_init", "x_NADPH_ch_init", "x_PGA_cyt_init", "x_Pi_cyt_init", "x_Proton_ch_init", "x_Starch_ch_init", "X5P_ch_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BPGA_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHAP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E4P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F6P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G1P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GAP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Light_on", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R5P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ru5P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S7P_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_CO2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_DHAP_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_GAP_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_NADP_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_NADPH_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_PGA_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Pi_cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Proton_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Starch_ch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X5P_ch_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ADP_ch = internal.ADP_ch_init;
    internal.initial_ATP_ch = internal.ATP_ch_init;
    internal.initial_BPGA_ch = internal.BPGA_ch_init;
    internal.initial_DHAP_ch = internal.DHAP_ch_init;
    internal.initial_E4P_ch = internal.E4P_ch_init;
    internal.initial_F6P_ch = internal.F6P_ch_init;
    internal.initial_FBP_ch = internal.FBP_ch_init;
    internal.initial_G1P_ch = internal.G1P_ch_init;
    internal.initial_G6P_ch = internal.G6P_ch_init;
    internal.initial_GAP_ch = internal.GAP_ch_init;
    internal.initial_PGA_ch = internal.PGA_ch_init;
    internal.initial_Pi_ch = internal.Pi_ch_init;
    internal.initial_R5P_ch = internal.R5P_ch_init;
    internal.initial_Ru5P_ch = internal.Ru5P_ch_init;
    internal.initial_RuBP_ch = internal.RuBP_ch_init;
    internal.initial_S7P_ch = internal.S7P_ch_init;
    internal.initial_SBP_ch = internal.SBP_ch_init;
    internal.initial_x_CO2 = internal.x_CO2_init;
    internal.initial_x_DHAP_cyt = internal.x_DHAP_cyt_init;
    internal.initial_x_GAP_cyt = internal.x_GAP_cyt_init;
    internal.initial_x_NADP_ch = internal.x_NADP_ch_init;
    internal.initial_x_NADPH_ch = internal.x_NADPH_ch_init;
    internal.initial_x_PGA_cyt = internal.x_PGA_cyt_init;
    internal.initial_x_Pi_cyt = internal.x_Pi_cyt_init;
    internal.initial_x_Proton_ch = internal.x_Proton_ch_init;
    internal.initial_x_Starch_ch = internal.x_Starch_ch_init;
    internal.initial_X5P_ch = internal.X5P_ch_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RuBP_ch = state[1];
    const PGA_ch = state[2];
    const ATP_ch = state[3];
    const BPGA_ch = state[4];
    const x_NADPH_ch = state[5];
    const GAP_ch = state[6];
    const Pi_ch = state[7];
    const DHAP_ch = state[8];
    const FBP_ch = state[9];
    const F6P_ch = state[10];
    const E4P_ch = state[11];
    const X5P_ch = state[12];
    const SBP_ch = state[13];
    const S7P_ch = state[14];
    const R5P_ch = state[15];
    const Ru5P_ch = state[16];
    const x_Pi_cyt = state[17];
    const G6P_ch = state[19];
    const x_NADP_ch = state[20];
    const ADP_ch = state[22];
    const x_Proton_ch = state[24];
    const G1P_ch = state[25];
    dstatedt[0] = 0;
    dstatedt[23] = 0;
    dstatedt[18] = 0;
    dstatedt[20] = 0;
    dstatedt[5] = 0;
    dstatedt[21] = 0;
    dstatedt[17] = 0;
    dstatedt[24] = 0;
    dstatedt[26] = 0;
    dstatedt[22] = 0 + 1 * internal.Light_on * internal.PGK_v * internal.chloroplast * (PGA_ch * ATP_ch - BPGA_ch * ADP_ch / internal.q2) + 1 * internal.Light_on * internal.Ru5Pk_ch_vm * Ru5P_ch * internal.chloroplast * ATP_ch / ((Ru5P_ch + internal.Ru5Pk_ch_km1 * (1 + PGA_ch / internal.Ru5Pk_ch_KiPGA + RuBP_ch / internal.Ru5Pk_ch_KiRuBP + Pi_ch / internal.Ru5Pk_ch_KiPi)) * (ATP_ch * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP1) + internal.Ru5Pk_ch_km2 * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP2))) - 1 * internal.Light_on * internal.LR_vm * ADP_ch * Pi_ch * internal.chloroplast / ((ADP_ch + internal.LR_kmADP) * (Pi_ch + internal.LR_kmPi)) + 1 * internal.StSyn_vm * G1P_ch * ATP_ch * internal.chloroplast / ((G1P_ch + internal.stsyn_ch_km1) * (1 + ADP_ch / internal.stsyn_ch_Ki) * (ATP_ch + internal.stsyn_ch_km2) + internal.stsyn_ch_km2 * Pi_ch / (internal.stsyn_ch_ka1 * PGA_ch) + internal.stsyn_ch_ka2 * F6P_ch + internal.stsyn_ch_ka3 * FBP_ch);
    dstatedt[3] = 0 - 1 * internal.Light_on * internal.PGK_v * internal.chloroplast * (PGA_ch * ATP_ch - BPGA_ch * ADP_ch / internal.q2) - 1 * internal.Light_on * internal.Ru5Pk_ch_vm * Ru5P_ch * internal.chloroplast * ATP_ch / ((Ru5P_ch + internal.Ru5Pk_ch_km1 * (1 + PGA_ch / internal.Ru5Pk_ch_KiPGA + RuBP_ch / internal.Ru5Pk_ch_KiRuBP + Pi_ch / internal.Ru5Pk_ch_KiPi)) * (ATP_ch * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP1) + internal.Ru5Pk_ch_km2 * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP2))) + 1 * internal.Light_on * internal.LR_vm * ADP_ch * Pi_ch * internal.chloroplast / ((ADP_ch + internal.LR_kmADP) * (Pi_ch + internal.LR_kmPi)) - 1 * internal.StSyn_vm * G1P_ch * ATP_ch * internal.chloroplast / ((G1P_ch + internal.stsyn_ch_km1) * (1 + ADP_ch / internal.stsyn_ch_Ki) * (ATP_ch + internal.stsyn_ch_km2) + internal.stsyn_ch_km2 * Pi_ch / (internal.stsyn_ch_ka1 * PGA_ch) + internal.stsyn_ch_ka2 * F6P_ch + internal.stsyn_ch_ka3 * FBP_ch);
    dstatedt[4] = 0 + 1 * internal.Light_on * internal.PGK_v * internal.chloroplast * (PGA_ch * ATP_ch - BPGA_ch * ADP_ch / internal.q2) - 1 * internal.Light_on * internal.G3Pdh_v * internal.chloroplast * (BPGA_ch * x_NADPH_ch * x_Proton_ch - x_NADP_ch * GAP_ch * Pi_ch / internal.q3);
    dstatedt[8] = 0 + 1 * internal.chloroplast * internal.TPI_v * (GAP_ch - DHAP_ch / internal.q4) - 1 * internal.F_Aldo_v * internal.chloroplast * (DHAP_ch * GAP_ch - FBP_ch / internal.q5) - 1 * internal.chloroplast * internal.E_Aldo_v * (E4P_ch * DHAP_ch - SBP_ch / internal.q8) - 1 * internal.TP_Piap_vm * DHAP_ch * internal.chloroplast / (internal.TP_Piap_kDHAP_ch * (1 + (1 + internal.TP_Piap_kPi_cyt / x_Pi_cyt) * (Pi_ch / internal.TP_Piap_kPi_ch + PGA_ch / internal.TP_Piap_kPGA_ch + DHAP_ch / internal.TP_Piap_kDHAP_ch + GAP_ch / internal.TP_Piap_kGAP_ch)));
    dstatedt[11] = 0 + 1 * internal.chloroplast * internal.F_TKL_v * (F6P_ch * GAP_ch - E4P_ch * X5P_ch / internal.q7) - 1 * internal.chloroplast * internal.E_Aldo_v * (E4P_ch * DHAP_ch - SBP_ch / internal.q8);
    dstatedt[10] = 0 + 1 * internal.Light_on * internal.FBPase_ch_vm * FBP_ch * internal.chloroplast / (FBP_ch + internal.FBPase_ch_km * (1 + F6P_ch / internal.FBPase_ch_KiF6P + Pi_ch / internal.FBPase_ch_KiPi)) - 1 * internal.chloroplast * internal.F_TKL_v * (F6P_ch * GAP_ch - E4P_ch * X5P_ch / internal.q7) - 1 * internal.PGI_v * internal.chloroplast * (F6P_ch - G6P_ch / internal.q14);
    dstatedt[9] = 0 + 1 * internal.F_Aldo_v * internal.chloroplast * (DHAP_ch * GAP_ch - FBP_ch / internal.q5) - 1 * internal.Light_on * internal.FBPase_ch_vm * FBP_ch * internal.chloroplast / (FBP_ch + internal.FBPase_ch_km * (1 + F6P_ch / internal.FBPase_ch_KiF6P + Pi_ch / internal.FBPase_ch_KiPi));
    dstatedt[25] = 0 + 1 * internal.PGM_v * internal.chloroplast * (G6P_ch - G1P_ch / internal.q15) - 1 * internal.StSyn_vm * G1P_ch * ATP_ch * internal.chloroplast / ((G1P_ch + internal.stsyn_ch_km1) * (1 + ADP_ch / internal.stsyn_ch_Ki) * (ATP_ch + internal.stsyn_ch_km2) + internal.stsyn_ch_km2 * Pi_ch / (internal.stsyn_ch_ka1 * PGA_ch) + internal.stsyn_ch_ka2 * F6P_ch + internal.stsyn_ch_ka3 * FBP_ch) + 1 * internal.StPase_Vm * Pi_ch * internal.chloroplast / (Pi_ch + internal.StPase_km * (1 + G1P_ch / internal.StPase_kiG1P));
    dstatedt[19] = 0 + 1 * internal.PGI_v * internal.chloroplast * (F6P_ch - G6P_ch / internal.q14) - 1 * internal.PGM_v * internal.chloroplast * (G6P_ch - G1P_ch / internal.q15);
    dstatedt[6] = 0 + 1 * internal.Light_on * internal.G3Pdh_v * internal.chloroplast * (BPGA_ch * x_NADPH_ch * x_Proton_ch - x_NADP_ch * GAP_ch * Pi_ch / internal.q3) - 1 * internal.chloroplast * internal.TPI_v * (GAP_ch - DHAP_ch / internal.q4) - 1 * internal.F_Aldo_v * internal.chloroplast * (DHAP_ch * GAP_ch - FBP_ch / internal.q5) - 1 * internal.chloroplast * internal.F_TKL_v * (F6P_ch * GAP_ch - E4P_ch * X5P_ch / internal.q7) - 1 * internal.chloroplast * internal.G_TKL_v * (GAP_ch * S7P_ch - X5P_ch * R5P_ch / internal.q10) - 1 * internal.TP_Piap_vm * GAP_ch * internal.chloroplast / (internal.TP_Piap_kGAP_ch * (1 + (1 + internal.TP_Piap_kPi_cyt / x_Pi_cyt) * (Pi_ch / internal.TP_Piap_kPi_ch + PGA_ch / internal.TP_Piap_kPGA_ch + DHAP_ch / internal.TP_Piap_kDHAP_ch + GAP_ch / internal.TP_Piap_kGAP_ch)));
    dstatedt[2] = 0 + 2 * internal.Light_on * internal.Rbco_vm * RuBP_ch * internal.chloroplast / (RuBP_ch + internal.Rbco_km * (1 + PGA_ch / internal.Rbco_KiPGA + FBP_ch / internal.Rbco_KiFBP + SBP_ch / internal.Rbco_KiSBP + Pi_ch / internal.Rbco_KiPi + x_NADPH_ch / internal.Rbco_KiNADPH)) - 1 * internal.Light_on * internal.PGK_v * internal.chloroplast * (PGA_ch * ATP_ch - BPGA_ch * ADP_ch / internal.q2) - 1 * internal.PGA_xpMult * internal.TP_Piap_vm * PGA_ch * internal.chloroplast / (internal.TP_Piap_kPGA_ch * (1 + (1 + internal.TP_Piap_kPi_cyt / x_Pi_cyt) * (Pi_ch / internal.TP_Piap_kPi_ch + PGA_ch / internal.TP_Piap_kPGA_ch + DHAP_ch / internal.TP_Piap_kDHAP_ch + GAP_ch / internal.TP_Piap_kGAP_ch)));
    dstatedt[7] = 0 + 1 * internal.Light_on * internal.G3Pdh_v * internal.chloroplast * (BPGA_ch * x_NADPH_ch * x_Proton_ch - x_NADP_ch * GAP_ch * Pi_ch / internal.q3) + 1 * internal.Light_on * internal.FBPase_ch_vm * FBP_ch * internal.chloroplast / (FBP_ch + internal.FBPase_ch_km * (1 + F6P_ch / internal.FBPase_ch_KiF6P + Pi_ch / internal.FBPase_ch_KiPi)) + 1 * internal.Light_on * internal.SBPase_ch_vm * SBP_ch * internal.chloroplast / (SBP_ch + internal.SBPase_ch_km * (1 + Pi_ch / internal.SBPase_ch_KiPi)) - 1 * internal.Light_on * internal.LR_vm * ADP_ch * Pi_ch * internal.chloroplast / ((ADP_ch + internal.LR_kmADP) * (Pi_ch + internal.LR_kmPi)) + 2 * internal.StSyn_vm * G1P_ch * ATP_ch * internal.chloroplast / ((G1P_ch + internal.stsyn_ch_km1) * (1 + ADP_ch / internal.stsyn_ch_Ki) * (ATP_ch + internal.stsyn_ch_km2) + internal.stsyn_ch_km2 * Pi_ch / (internal.stsyn_ch_ka1 * PGA_ch) + internal.stsyn_ch_ka2 * F6P_ch + internal.stsyn_ch_ka3 * FBP_ch) - 1 * internal.StPase_Vm * Pi_ch * internal.chloroplast / (Pi_ch + internal.StPase_km * (1 + G1P_ch / internal.StPase_kiG1P)) + 1 * internal.TP_Piap_vm * DHAP_ch * internal.chloroplast / (internal.TP_Piap_kDHAP_ch * (1 + (1 + internal.TP_Piap_kPi_cyt / x_Pi_cyt) * (Pi_ch / internal.TP_Piap_kPi_ch + PGA_ch / internal.TP_Piap_kPGA_ch + DHAP_ch / internal.TP_Piap_kDHAP_ch + GAP_ch / internal.TP_Piap_kGAP_ch))) + 1 * internal.PGA_xpMult * internal.TP_Piap_vm * PGA_ch * internal.chloroplast / (internal.TP_Piap_kPGA_ch * (1 + (1 + internal.TP_Piap_kPi_cyt / x_Pi_cyt) * (Pi_ch / internal.TP_Piap_kPi_ch + PGA_ch / internal.TP_Piap_kPGA_ch + DHAP_ch / internal.TP_Piap_kDHAP_ch + GAP_ch / internal.TP_Piap_kGAP_ch))) + 1 * internal.TP_Piap_vm * GAP_ch * internal.chloroplast / (internal.TP_Piap_kGAP_ch * (1 + (1 + internal.TP_Piap_kPi_cyt / x_Pi_cyt) * (Pi_ch / internal.TP_Piap_kPi_ch + PGA_ch / internal.TP_Piap_kPGA_ch + DHAP_ch / internal.TP_Piap_kDHAP_ch + GAP_ch / internal.TP_Piap_kGAP_ch)));
    dstatedt[15] = 0 + 1 * internal.chloroplast * internal.G_TKL_v * (GAP_ch * S7P_ch - X5P_ch * R5P_ch / internal.q10) - 1 * internal.R5Piso_v * internal.chloroplast * (R5P_ch - Ru5P_ch / internal.q11);
    dstatedt[16] = 0 + 1 * internal.R5Piso_v * internal.chloroplast * (R5P_ch - Ru5P_ch / internal.q11) + 1 * internal.chloroplast * internal.X5Pepi_v * (X5P_ch - Ru5P_ch / internal.q12) - 1 * internal.Light_on * internal.Ru5Pk_ch_vm * Ru5P_ch * internal.chloroplast * ATP_ch / ((Ru5P_ch + internal.Ru5Pk_ch_km1 * (1 + PGA_ch / internal.Ru5Pk_ch_KiPGA + RuBP_ch / internal.Ru5Pk_ch_KiRuBP + Pi_ch / internal.Ru5Pk_ch_KiPi)) * (ATP_ch * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP1) + internal.Ru5Pk_ch_km2 * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP2)));
    dstatedt[1] = 0 - 1 * internal.Light_on * internal.Rbco_vm * RuBP_ch * internal.chloroplast / (RuBP_ch + internal.Rbco_km * (1 + PGA_ch / internal.Rbco_KiPGA + FBP_ch / internal.Rbco_KiFBP + SBP_ch / internal.Rbco_KiSBP + Pi_ch / internal.Rbco_KiPi + x_NADPH_ch / internal.Rbco_KiNADPH)) + 1 * internal.Light_on * internal.Ru5Pk_ch_vm * Ru5P_ch * internal.chloroplast * ATP_ch / ((Ru5P_ch + internal.Ru5Pk_ch_km1 * (1 + PGA_ch / internal.Ru5Pk_ch_KiPGA + RuBP_ch / internal.Ru5Pk_ch_KiRuBP + Pi_ch / internal.Ru5Pk_ch_KiPi)) * (ATP_ch * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP1) + internal.Ru5Pk_ch_km2 * (1 + ADP_ch / internal.Ru5Pk_ch_KiADP2)));
    dstatedt[14] = 0 + 1 * internal.Light_on * internal.SBPase_ch_vm * SBP_ch * internal.chloroplast / (SBP_ch + internal.SBPase_ch_km * (1 + Pi_ch / internal.SBPase_ch_KiPi)) - 1 * internal.chloroplast * internal.G_TKL_v * (GAP_ch * S7P_ch - X5P_ch * R5P_ch / internal.q10);
    dstatedt[13] = 0 + 1 * internal.chloroplast * internal.E_Aldo_v * (E4P_ch * DHAP_ch - SBP_ch / internal.q8) - 1 * internal.Light_on * internal.SBPase_ch_vm * SBP_ch * internal.chloroplast / (SBP_ch + internal.SBPase_ch_km * (1 + Pi_ch / internal.SBPase_ch_KiPi));
    dstatedt[12] = 0 + 1 * internal.chloroplast * internal.F_TKL_v * (F6P_ch * GAP_ch - E4P_ch * X5P_ch / internal.q7) + 1 * internal.chloroplast * internal.G_TKL_v * (GAP_ch * S7P_ch - X5P_ch * R5P_ch / internal.q10) - 1 * internal.chloroplast * internal.X5Pepi_v * (X5P_ch - Ru5P_ch / internal.q12);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_CO2", "RuBP_ch", "PGA_ch", "ATP_ch", "BPGA_ch", "x_NADPH_ch", "GAP_ch", "Pi_ch", "DHAP_ch", "FBP_ch", "F6P_ch", "E4P_ch", "X5P_ch", "SBP_ch", "S7P_ch", "R5P_ch", "Ru5P_ch", "x_Pi_cyt", "x_GAP_cyt", "G6P_ch", "x_NADP_ch", "x_PGA_cyt", "ADP_ch", "x_DHAP_cyt", "x_Proton_ch", "G1P_ch", "x_Starch_ch"];
    this.metadata.internalOrder = {ADP_ch_init: null, ATP_ch_init: null, BPGA_ch_init: null, chloroplast: null, cytosol: null, DHAP_ch_init: null, E_Aldo_v: null, E4P_ch_init: null, F_Aldo_v: null, F_TKL_v: null, F6P_ch_init: null, FBP_ch_init: null, FBPase_ch_KiF6P: null, FBPase_ch_KiPi: null, FBPase_ch_km: null, FBPase_ch_vm: null, G_TKL_v: null, G1P_ch_init: null, G3Pdh_v: null, G6P_ch_init: null, GAP_ch_init: null, initial_ADP_ch: null, initial_ATP_ch: null, initial_BPGA_ch: null, initial_DHAP_ch: null, initial_E4P_ch: null, initial_F6P_ch: null, initial_FBP_ch: null, initial_G1P_ch: null, initial_G6P_ch: null, initial_GAP_ch: null, initial_PGA_ch: null, initial_Pi_ch: null, initial_R5P_ch: null, initial_Ru5P_ch: null, initial_RuBP_ch: null, initial_S7P_ch: null, initial_SBP_ch: null, initial_x_CO2: null, initial_x_DHAP_cyt: null, initial_x_GAP_cyt: null, initial_x_NADP_ch: null, initial_x_NADPH_ch: null, initial_x_PGA_cyt: null, initial_x_Pi_cyt: null, initial_x_Proton_ch: null, initial_x_Starch_ch: null, initial_X5P_ch: null, Light_on: null, LR_kmADP: null, LR_kmPi: null, LR_vm: null, PGA_ch_init: null, PGA_xpMult: null, PGI_v: null, PGK_v: null, PGM_v: null, pi: null, Pi_ch_init: null, q10: null, q11: null, q12: null, q14: null, q15: null, q2: null, q3: null, q4: null, q5: null, q7: null, q8: null, R5P_ch_init: null, R5Piso_v: null, Rbco_KiFBP: null, Rbco_KiNADPH: null, Rbco_KiPGA: null, Rbco_KiPi: null, Rbco_KiSBP: null, Rbco_km: null, Rbco_vm: null, Ru5P_ch_init: null, Ru5Pk_ch_KiADP1: null, Ru5Pk_ch_KiADP2: null, Ru5Pk_ch_KiPGA: null, Ru5Pk_ch_KiPi: null, Ru5Pk_ch_KiRuBP: null, Ru5Pk_ch_km1: null, Ru5Pk_ch_km2: null, Ru5Pk_ch_vm: null, RuBP_ch_init: null, S7P_ch_init: null, SBP_ch_init: null, SBPase_ch_KiPi: null, SBPase_ch_km: null, SBPase_ch_vm: null, StPase_kiG1P: null, StPase_km: null, StPase_Vm: null, stsyn_ch_ka1: null, stsyn_ch_ka2: null, stsyn_ch_ka3: null, stsyn_ch_Ki: null, stsyn_ch_km1: null, stsyn_ch_km2: null, StSyn_vm: null, TP_Piap_kDHAP_ch: null, TP_Piap_kGAP_ch: null, TP_Piap_kPGA_ch: null, TP_Piap_kPi_ch: null, TP_Piap_kPi_cyt: null, TP_Piap_vm: null, TPI_v: null, x_CO2_init: null, x_DHAP_cyt_init: null, x_GAP_cyt_init: null, x_NADP_ch_init: null, x_NADPH_ch_init: null, x_PGA_cyt_init: null, x_Pi_cyt_init: null, x_Proton_ch_init: null, x_Starch_ch_init: null, X5P_ch_init: null, X5Pepi_v: null};
    this.metadata.variableOrder = {x_CO2: null, RuBP_ch: null, PGA_ch: null, ATP_ch: null, BPGA_ch: null, x_NADPH_ch: null, GAP_ch: null, Pi_ch: null, DHAP_ch: null, FBP_ch: null, F6P_ch: null, E4P_ch: null, X5P_ch: null, SBP_ch: null, S7P_ch: null, R5P_ch: null, Ru5P_ch: null, x_Pi_cyt: null, x_GAP_cyt: null, G6P_ch: null, x_NADP_ch: null, x_PGA_cyt: null, ADP_ch: null, x_DHAP_cyt: null, x_Proton_ch: null, G1P_ch: null, x_Starch_ch: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}