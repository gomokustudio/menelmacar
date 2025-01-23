export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cellsurface = 6.4000000000000005e-14;
    internal.cytoplasm = 1.6500000000000001e-11;
    internal.dnabound = 1e-13;
    internal.extracellular = 8.2999999999999998e-12;
    internal.nucleus = 4.9999999999999999e-13;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var cytoplasm_Foxo1_tot_init = (internal.initial_cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm + internal.initial_cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm + internal.initial_cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm + internal.initial_cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm) / internal.extracellular;
    var dnabound_Foxo1_tot_init = (internal.initial_dnabound_Foxo1_Pa0_pUb0 * internal.dnabound + internal.initial_dnabound_Foxo1_Pa0_pUb1 * internal.dnabound + internal.initial_dnabound_Foxo1_Pa1_pUb0 * internal.dnabound + internal.initial_dnabound_Foxo1_Pa1_pUb1 * internal.dnabound) / internal.extracellular;
    var Foxo1_all_init = (internal.initial_cytoplasm_Foxo1_tot * internal.extracellular + internal.initial_nucleus_Foxo1_tot * internal.extracellular + internal.initial_dnabound_Foxo1_tot * internal.extracellular) / internal.extracellular;
    var Foxo1_Pa0_tot_init = (internal.initial_cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa0_pUb0 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa0_pUb0 * internal.dnabound + internal.initial_cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa0_pUb1 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa0_pUb1 * internal.dnabound) / internal.extracellular;
    var Foxo1_Pa1_tot_init = (internal.initial_cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa1_pUb0 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa1_pUb0 * internal.dnabound + internal.initial_cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa1_pUb1 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa1_pUb1 * internal.dnabound) / internal.extracellular;
    var Foxo1_pUb0_tot_init = (internal.initial_cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa0_pUb0 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa0_pUb0 * internal.dnabound + internal.initial_cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa1_pUb0 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa1_pUb0 * internal.dnabound) / internal.extracellular;
    var Foxo1_pUb1_tot_init = (internal.initial_cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa0_pUb1 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa0_pUb1 * internal.dnabound + internal.initial_cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm + internal.initial_nucleus_Foxo1_Pa1_pUb1 * internal.nucleus + internal.initial_dnabound_Foxo1_Pa1_pUb1 * internal.dnabound) / internal.extracellular;
    var Foxo1_total_rate_init = internal.initial_Foxo1_all / internal.Metabolite_21;
    var nucleus_Foxo1_tot_init = (internal.initial_nucleus_Foxo1_Pa0_pUb0 * internal.nucleus + internal.initial_nucleus_Foxo1_Pa0_pUb1 * internal.nucleus + internal.initial_nucleus_Foxo1_Pa1_pUb0 * internal.nucleus + internal.initial_nucleus_Foxo1_Pa1_pUb1 * internal.nucleus) / internal.extracellular;
    internal.initial_cytoplasm_Foxo1_tot = cytoplasm_Foxo1_tot_init;
    internal.initial_dnabound_Foxo1_tot = dnabound_Foxo1_tot_init;
    internal.initial_Foxo1_all = Foxo1_all_init;
    internal.initial_Foxo1_Pa0_tot = Foxo1_Pa0_tot_init;
    internal.initial_Foxo1_Pa1_tot = Foxo1_Pa1_tot_init;
    internal.initial_Foxo1_pUb0_tot = Foxo1_pUb0_tot_init;
    internal.initial_Foxo1_pUb1_tot = Foxo1_pUb1_tot_init;
    internal.initial_Foxo1_total_rate = Foxo1_total_rate_init;
    internal.initial_nucleus_Foxo1_tot = nucleus_Foxo1_tot_init;
    var state = Array(43).fill(0);
    state[0] = internal.initial_null;
    state[1] = internal.initial_degr_Foxo1;
    state[2] = internal.initial_cytoplasm_Foxo1_Pa0_pUb0;
    state[3] = internal.initial_nucleus_Foxo1_Pa0_pUb0;
    state[4] = internal.initial_dnabound_Foxo1_Pa0_pUb0;
    state[5] = internal.initial_cytoplasm_Foxo1_Pa0_pUb1;
    state[6] = internal.initial_nucleus_Foxo1_Pa0_pUb1;
    state[7] = internal.initial_dnabound_Foxo1_Pa0_pUb1;
    state[8] = internal.initial_cytoplasm_Foxo1_Pa1_pUb0;
    state[9] = internal.initial_nucleus_Foxo1_Pa1_pUb0;
    state[10] = internal.initial_dnabound_Foxo1_Pa1_pUb0;
    state[11] = internal.initial_cytoplasm_Foxo1_Pa1_pUb1;
    state[12] = internal.initial_nucleus_Foxo1_Pa1_pUb1;
    state[13] = internal.initial_dnabound_Foxo1_Pa1_pUb1;
    state[14] = internal.initial_Foxo1_Pa0_tot;
    state[15] = internal.initial_Foxo1_Pa1_tot;
    state[16] = internal.initial_Foxo1_pUb0_tot;
    state[17] = internal.initial_Foxo1_pUb1_tot;
    state[18] = internal.initial_cytoplasm_Foxo1_tot;
    state[19] = internal.initial_nucleus_Foxo1_tot;
    state[20] = internal.initial_dnabound_Foxo1_tot;
    state[21] = internal.initial_Foxo1_all;
    state[22] = internal.initial_nucleus_RNA_Inr;
    state[23] = internal.initial_cytoplasm_RNA_Inr;
    state[24] = internal.initial_cytoplasm_Inr;
    state[25] = internal.initial_nucleus_RNA_Sod2;
    state[26] = internal.initial_cytoplasm_RNA_Sod2;
    state[27] = internal.initial_cytoplasm_Sod2;
    state[28] = internal.initial_E2F1;
    state[29] = internal.initial_Akt;
    state[30] = internal.initial_SGK;
    state[31] = internal.initial_CDK2;
    state[32] = internal.initial_AMPK;
    state[33] = internal.initial_IKKb;
    state[34] = internal.initial_JNK;
    state[35] = internal.initial_PP2A;
    state[36] = internal.initial_CBPP300;
    state[37] = internal.initial_SIRT1;
    state[38] = internal.initial_E3;
    state[39] = internal.initial_USP7;
    state[40] = internal.initial_SCF;
    state[41] = internal.initial_Proteasome;
    state[42] = internal.initial_Foxo1_total_rate;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Akt_init", "AMPK_init", "CBPP300_init", "CDK2_init", "cytoplasm_Foxo1_Pa0_pUb0_init", "cytoplasm_Foxo1_Pa0_pUb1_init", "cytoplasm_Foxo1_Pa1_pUb0_init", "cytoplasm_Foxo1_Pa1_pUb1_init", "cytoplasm_Inr_init", "cytoplasm_RNA_Inr_init", "cytoplasm_RNA_Sod2_init", "cytoplasm_Sod2_init", "degr_Foxo1_init", "dnabound_Foxo1_Pa0_pUb0_init", "dnabound_Foxo1_Pa0_pUb1_init", "dnabound_Foxo1_Pa1_pUb0_init", "dnabound_Foxo1_Pa1_pUb1_init", "E2F1_init", "E3_init", "IKKb_init", "JNK_init", "kdeg", "kdephos", "kexp", "kkin", "kmdeg", "kpdeg", "ksynth", "ktr1_181818", "ktr2_0181818", "ktr3_125", "ktr4_055", "ktr4_55", "ktr5_25", "ktranscr", "ktransl", "kub1", "kub2", "Metabolite_21", "nucleus_Foxo1_Pa0_pUb0_init", "nucleus_Foxo1_Pa0_pUb1_init", "nucleus_Foxo1_Pa1_pUb0_init", "nucleus_Foxo1_Pa1_pUb1_init", "nucleus_RNA_Inr_init", "nucleus_RNA_Sod2_init", "null_init", "PP2A_init", "Proteasome_init", "SCF_init", "SGK_init", "SIRT1_init", "transcription_rate", "USP7_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Akt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMPK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CBPP300_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDK2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_Foxo1_Pa0_pUb0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_Foxo1_Pa0_pUb1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_Foxo1_Pa1_pUb0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_Foxo1_Pa1_pUb1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_Inr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_RNA_Inr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_RNA_Sod2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cytoplasm_Sod2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "degr_Foxo1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dnabound_Foxo1_Pa0_pUb0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dnabound_Foxo1_Pa0_pUb1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dnabound_Foxo1_Pa1_pUb0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dnabound_Foxo1_Pa1_pUb1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2F1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKKb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JNK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdephos", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kexp", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kkin", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmdeg", internal, 5.6219999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpdeg", internal, 0.0019, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksynth", internal, 0.0054999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktr1_181818", internal, 0.18181800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktr2_0181818", internal, 0.018181800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktr3_125", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktr4_055", internal, 0.055, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktr4_55", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktr5_25", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktranscr", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktransl", internal, 1.23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kub1", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kub2", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_21", internal, 120481927710843, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucleus_Foxo1_Pa0_pUb0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucleus_Foxo1_Pa0_pUb1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucleus_Foxo1_Pa1_pUb0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucleus_Foxo1_Pa1_pUb1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucleus_RNA_Inr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucleus_RNA_Sod2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "null_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PP2A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Proteasome_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SCF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SGK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SIRT1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "transcription_rate", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "USP7_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Akt = internal.Akt_init;
    internal.initial_AMPK = internal.AMPK_init;
    internal.initial_CBPP300 = internal.CBPP300_init;
    internal.initial_CDK2 = internal.CDK2_init;
    internal.initial_cytoplasm_Foxo1_Pa0_pUb0 = internal.cytoplasm_Foxo1_Pa0_pUb0_init;
    internal.initial_cytoplasm_Foxo1_Pa0_pUb1 = internal.cytoplasm_Foxo1_Pa0_pUb1_init;
    internal.initial_cytoplasm_Foxo1_Pa1_pUb0 = internal.cytoplasm_Foxo1_Pa1_pUb0_init;
    internal.initial_cytoplasm_Foxo1_Pa1_pUb1 = internal.cytoplasm_Foxo1_Pa1_pUb1_init;
    internal.initial_cytoplasm_Inr = internal.cytoplasm_Inr_init;
    internal.initial_cytoplasm_RNA_Inr = internal.cytoplasm_RNA_Inr_init;
    internal.initial_cytoplasm_RNA_Sod2 = internal.cytoplasm_RNA_Sod2_init;
    internal.initial_cytoplasm_Sod2 = internal.cytoplasm_Sod2_init;
    internal.initial_degr_Foxo1 = internal.degr_Foxo1_init;
    internal.initial_dnabound_Foxo1_Pa0_pUb0 = internal.dnabound_Foxo1_Pa0_pUb0_init;
    internal.initial_dnabound_Foxo1_Pa0_pUb1 = internal.dnabound_Foxo1_Pa0_pUb1_init;
    internal.initial_dnabound_Foxo1_Pa1_pUb0 = internal.dnabound_Foxo1_Pa1_pUb0_init;
    internal.initial_dnabound_Foxo1_Pa1_pUb1 = internal.dnabound_Foxo1_Pa1_pUb1_init;
    internal.initial_E2F1 = internal.E2F1_init;
    internal.initial_E3 = internal.E3_init;
    internal.initial_IKKb = internal.IKKb_init;
    internal.initial_JNK = internal.JNK_init;
    internal.initial_nucleus_Foxo1_Pa0_pUb0 = internal.nucleus_Foxo1_Pa0_pUb0_init;
    internal.initial_nucleus_Foxo1_Pa0_pUb1 = internal.nucleus_Foxo1_Pa0_pUb1_init;
    internal.initial_nucleus_Foxo1_Pa1_pUb0 = internal.nucleus_Foxo1_Pa1_pUb0_init;
    internal.initial_nucleus_Foxo1_Pa1_pUb1 = internal.nucleus_Foxo1_Pa1_pUb1_init;
    internal.initial_nucleus_RNA_Inr = internal.nucleus_RNA_Inr_init;
    internal.initial_nucleus_RNA_Sod2 = internal.nucleus_RNA_Sod2_init;
    internal.initial_null = internal.null_init;
    internal.initial_PP2A = internal.PP2A_init;
    internal.initial_Proteasome = internal.Proteasome_init;
    internal.initial_SCF = internal.SCF_init;
    internal.initial_SGK = internal.SGK_init;
    internal.initial_SIRT1 = internal.SIRT1_init;
    internal.initial_USP7 = internal.USP7_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const cytoplasm_Foxo1_Pa0_pUb0 = state[2];
    const nucleus_Foxo1_Pa0_pUb0 = state[3];
    const dnabound_Foxo1_Pa0_pUb0 = state[4];
    const cytoplasm_Foxo1_Pa0_pUb1 = state[5];
    const nucleus_Foxo1_Pa0_pUb1 = state[6];
    const dnabound_Foxo1_Pa0_pUb1 = state[7];
    const cytoplasm_Foxo1_Pa1_pUb0 = state[8];
    const nucleus_Foxo1_Pa1_pUb0 = state[9];
    const dnabound_Foxo1_Pa1_pUb0 = state[10];
    const cytoplasm_Foxo1_Pa1_pUb1 = state[11];
    const nucleus_Foxo1_Pa1_pUb1 = state[12];
    const dnabound_Foxo1_Pa1_pUb1 = state[13];
    const nucleus_RNA_Inr = state[22];
    const cytoplasm_RNA_Inr = state[23];
    const cytoplasm_Inr = state[24];
    const nucleus_RNA_Sod2 = state[25];
    const cytoplasm_RNA_Sod2 = state[26];
    const cytoplasm_Sod2 = state[27];
    const E2F1 = state[28];
    const Akt = state[29];
    const SGK = state[30];
    const PP2A = state[35];
    const SCF = state[40];
    const Proteasome = state[41];
    dstatedt[29] = 0;
    dstatedt[32] = 0;
    dstatedt[36] = 0;
    dstatedt[31] = 0;
    dstatedt[18] = 0 + 0;
    dstatedt[1] = 0;
    dstatedt[20] = 0 + 0;
    dstatedt[28] = 0;
    dstatedt[38] = 0;
    dstatedt[21] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[16] = 0 + 0;
    dstatedt[17] = 0 + 0;
    dstatedt[42] = 0 + 0;
    dstatedt[33] = 0;
    dstatedt[34] = 0;
    dstatedt[19] = 0 + 0;
    dstatedt[0] = 0;
    dstatedt[35] = 0;
    dstatedt[41] = 0;
    dstatedt[40] = 0;
    dstatedt[30] = 0;
    dstatedt[37] = 0;
    dstatedt[39] = 0;
    dstatedt[2] = 0 + 1 * internal.cytoplasm * (E2F1 * internal.cytoplasm * internal.ksynth / internal.cytoplasm) - 1 * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * internal.ktr1_181818) + 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * internal.ktr4_055) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * Akt * internal.cytoplasm * internal.kkin / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * SGK * internal.cytoplasm * internal.kkin / internal.cytoplasm) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm * PP2A * internal.cytoplasm * internal.kdephos / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * SCF * internal.cytoplasm * internal.kub1 / internal.cytoplasm);
    dstatedt[5] = 0 - 1 * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * internal.ktr1_181818) + 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * internal.ktr4_055) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * Akt * internal.cytoplasm * internal.kkin / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * SGK * internal.cytoplasm * internal.kkin / internal.cytoplasm) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm * PP2A * internal.cytoplasm * internal.kdephos / internal.cytoplasm) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * SCF * internal.cytoplasm * internal.kub1 / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * Proteasome * internal.cytoplasm * internal.kdeg / internal.cytoplasm);
    dstatedt[8] = 0 - 1 * (cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm * internal.ktr2_0181818) + 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * internal.ktr4_55) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * Akt * internal.cytoplasm * internal.kkin / internal.cytoplasm) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * SGK * internal.cytoplasm * internal.kkin / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm * PP2A * internal.cytoplasm * internal.kdephos / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm * SCF * internal.cytoplasm * internal.kub2 / internal.cytoplasm);
    dstatedt[11] = 0 - 1 * (cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm * internal.ktr2_0181818) + 1 * (nucleus_Foxo1_Pa1_pUb1 * internal.nucleus * internal.ktr4_55) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * Akt * internal.cytoplasm * internal.kkin / internal.cytoplasm) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * SGK * internal.cytoplasm * internal.kkin / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm * PP2A * internal.cytoplasm * internal.kdephos / internal.cytoplasm) + 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm * SCF * internal.cytoplasm * internal.kub2 / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm * Proteasome * internal.cytoplasm * internal.kdeg / internal.cytoplasm);
    dstatedt[24] = 0 + 1 * internal.cytoplasm * (cytoplasm_RNA_Inr * internal.cytoplasm * internal.ktransl / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Inr * internal.cytoplasm * internal.kpdeg / internal.cytoplasm);
    dstatedt[23] = 0 + 1 * (nucleus_RNA_Inr * internal.nucleus * internal.kexp) - 1 * internal.cytoplasm * (cytoplasm_RNA_Inr * internal.cytoplasm * internal.kmdeg / internal.cytoplasm);
    dstatedt[26] = 0 + 1 * (nucleus_RNA_Sod2 * internal.nucleus * internal.kexp) - 1 * internal.cytoplasm * (cytoplasm_RNA_Sod2 * internal.cytoplasm * internal.kmdeg / internal.cytoplasm);
    dstatedt[27] = 0 + 1 * internal.cytoplasm * (cytoplasm_RNA_Sod2 * internal.cytoplasm * internal.ktransl / internal.cytoplasm) - 1 * internal.cytoplasm * (cytoplasm_Sod2 * internal.cytoplasm * internal.kpdeg / internal.cytoplasm);
    dstatedt[4] = 0 + 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * internal.ktr5_25) - 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * internal.ktr3_125) - 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * Akt * internal.cytoplasm * internal.kkin) - 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * SGK * internal.cytoplasm * internal.kkin) + 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * PP2A * internal.cytoplasm * internal.kdephos) - 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * SCF * internal.cytoplasm * internal.kub1);
    dstatedt[7] = 0 + 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * internal.ktr5_25) - 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * internal.ktr3_125) - 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * Akt * internal.cytoplasm * internal.kkin) - 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * SGK * internal.cytoplasm * internal.kkin) + 1 * (dnabound_Foxo1_Pa1_pUb1 * internal.dnabound * PP2A * internal.cytoplasm * internal.kdephos) + 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * SCF * internal.cytoplasm * internal.kub1);
    dstatedt[10] = 0 + 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * internal.ktr3_125) - 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * internal.ktr3_125) + 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * Akt * internal.cytoplasm * internal.kkin) + 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * SGK * internal.cytoplasm * internal.kkin) - 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * PP2A * internal.cytoplasm * internal.kdephos) - 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * SCF * internal.cytoplasm * internal.kub2);
    dstatedt[13] = 0 + 1 * (nucleus_Foxo1_Pa1_pUb1 * internal.nucleus * internal.ktr3_125) - 1 * (dnabound_Foxo1_Pa1_pUb1 * internal.dnabound * internal.ktr3_125) + 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * Akt * internal.cytoplasm * internal.kkin) + 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * SGK * internal.cytoplasm * internal.kkin) - 1 * (dnabound_Foxo1_Pa1_pUb1 * internal.dnabound * PP2A * internal.cytoplasm * internal.kdephos) + 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * SCF * internal.cytoplasm * internal.kub2);
    dstatedt[3] = 0 + 1 * (cytoplasm_Foxo1_Pa0_pUb0 * internal.cytoplasm * internal.ktr1_181818) - 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * internal.ktr4_055) - 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * internal.ktr5_25) + 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * internal.ktr3_125) - 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * Akt * internal.cytoplasm * internal.kkin) - 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * SGK * internal.cytoplasm * internal.kkin) + 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * PP2A * internal.cytoplasm * internal.kdephos) - 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * SCF * internal.cytoplasm * internal.kub1);
    dstatedt[6] = 0 + 1 * (cytoplasm_Foxo1_Pa0_pUb1 * internal.cytoplasm * internal.ktr1_181818) - 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * internal.ktr4_055) - 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * internal.ktr5_25) + 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * internal.ktr3_125) - 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * Akt * internal.cytoplasm * internal.kkin) - 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * SGK * internal.cytoplasm * internal.kkin) + 1 * (nucleus_Foxo1_Pa1_pUb1 * internal.nucleus * PP2A * internal.cytoplasm * internal.kdephos) + 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * SCF * internal.cytoplasm * internal.kub1);
    dstatedt[9] = 0 + 1 * (cytoplasm_Foxo1_Pa1_pUb0 * internal.cytoplasm * internal.ktr2_0181818) - 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * internal.ktr4_55) - 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * internal.ktr3_125) + 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * internal.ktr3_125) + 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * Akt * internal.cytoplasm * internal.kkin) + 1 * (nucleus_Foxo1_Pa0_pUb0 * internal.nucleus * SGK * internal.cytoplasm * internal.kkin) - 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * PP2A * internal.cytoplasm * internal.kdephos) - 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * SCF * internal.cytoplasm * internal.kub2);
    dstatedt[12] = 0 + 1 * (cytoplasm_Foxo1_Pa1_pUb1 * internal.cytoplasm * internal.ktr2_0181818) - 1 * (nucleus_Foxo1_Pa1_pUb1 * internal.nucleus * internal.ktr4_55) - 1 * (nucleus_Foxo1_Pa1_pUb1 * internal.nucleus * internal.ktr3_125) + 1 * (dnabound_Foxo1_Pa1_pUb1 * internal.dnabound * internal.ktr3_125) + 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * Akt * internal.cytoplasm * internal.kkin) + 1 * (nucleus_Foxo1_Pa0_pUb1 * internal.nucleus * SGK * internal.cytoplasm * internal.kkin) - 1 * (nucleus_Foxo1_Pa1_pUb1 * internal.nucleus * PP2A * internal.cytoplasm * internal.kdephos) + 1 * (nucleus_Foxo1_Pa1_pUb0 * internal.nucleus * SCF * internal.cytoplasm * internal.kub2);
    dstatedt[22] = 0 + 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * internal.ktranscr) + 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * internal.ktranscr) + 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * internal.ktranscr) + 1 * (dnabound_Foxo1_Pa1_pUb1 * internal.dnabound * internal.ktranscr) + 1 * (internal.transcription_rate) - 1 * (nucleus_RNA_Inr * internal.nucleus * internal.kexp);
    dstatedt[25] = 0 + 1 * (dnabound_Foxo1_Pa0_pUb0 * internal.dnabound * internal.ktranscr) + 1 * (dnabound_Foxo1_Pa0_pUb1 * internal.dnabound * internal.ktranscr) + 1 * (dnabound_Foxo1_Pa1_pUb0 * internal.dnabound * internal.ktranscr) + 1 * (dnabound_Foxo1_Pa1_pUb1 * internal.dnabound * internal.ktranscr) + 1 * (internal.transcription_rate) - 1 * (nucleus_RNA_Sod2 * internal.nucleus * internal.kexp);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "null", "degr_Foxo1", "cytoplasm_Foxo1_Pa0_pUb0", "nucleus_Foxo1_Pa0_pUb0", "dnabound_Foxo1_Pa0_pUb0", "cytoplasm_Foxo1_Pa0_pUb1", "nucleus_Foxo1_Pa0_pUb1", "dnabound_Foxo1_Pa0_pUb1", "cytoplasm_Foxo1_Pa1_pUb0", "nucleus_Foxo1_Pa1_pUb0", "dnabound_Foxo1_Pa1_pUb0", "cytoplasm_Foxo1_Pa1_pUb1", "nucleus_Foxo1_Pa1_pUb1", "dnabound_Foxo1_Pa1_pUb1", "Foxo1_Pa0_tot", "Foxo1_Pa1_tot", "Foxo1_pUb0_tot", "Foxo1_pUb1_tot", "cytoplasm_Foxo1_tot", "nucleus_Foxo1_tot", "dnabound_Foxo1_tot", "Foxo1_all", "nucleus_RNA_Inr", "cytoplasm_RNA_Inr", "cytoplasm_Inr", "nucleus_RNA_Sod2", "cytoplasm_RNA_Sod2", "cytoplasm_Sod2", "E2F1", "Akt", "SGK", "CDK2", "AMPK", "IKKb", "JNK", "PP2A", "CBPP300", "SIRT1", "E3", "USP7", "SCF", "Proteasome", "Foxo1_total_rate"];
    this.metadata.internalOrder = {Akt_init: null, AMPK_init: null, CBPP300_init: null, CDK2_init: null, cellsurface: null, cytoplasm: null, cytoplasm_Foxo1_Pa0_pUb0_init: null, cytoplasm_Foxo1_Pa0_pUb1_init: null, cytoplasm_Foxo1_Pa1_pUb0_init: null, cytoplasm_Foxo1_Pa1_pUb1_init: null, cytoplasm_Inr_init: null, cytoplasm_RNA_Inr_init: null, cytoplasm_RNA_Sod2_init: null, cytoplasm_Sod2_init: null, degr_Foxo1_init: null, dnabound: null, dnabound_Foxo1_Pa0_pUb0_init: null, dnabound_Foxo1_Pa0_pUb1_init: null, dnabound_Foxo1_Pa1_pUb0_init: null, dnabound_Foxo1_Pa1_pUb1_init: null, E2F1_init: null, E3_init: null, extracellular: null, IKKb_init: null, initial_Akt: null, initial_AMPK: null, initial_CBPP300: null, initial_CDK2: null, initial_cytoplasm_Foxo1_Pa0_pUb0: null, initial_cytoplasm_Foxo1_Pa0_pUb1: null, initial_cytoplasm_Foxo1_Pa1_pUb0: null, initial_cytoplasm_Foxo1_Pa1_pUb1: null, initial_cytoplasm_Foxo1_tot: null, initial_cytoplasm_Inr: null, initial_cytoplasm_RNA_Inr: null, initial_cytoplasm_RNA_Sod2: null, initial_cytoplasm_Sod2: null, initial_degr_Foxo1: null, initial_dnabound_Foxo1_Pa0_pUb0: null, initial_dnabound_Foxo1_Pa0_pUb1: null, initial_dnabound_Foxo1_Pa1_pUb0: null, initial_dnabound_Foxo1_Pa1_pUb1: null, initial_dnabound_Foxo1_tot: null, initial_E2F1: null, initial_E3: null, initial_Foxo1_all: null, initial_Foxo1_Pa0_tot: null, initial_Foxo1_Pa1_tot: null, initial_Foxo1_pUb0_tot: null, initial_Foxo1_pUb1_tot: null, initial_Foxo1_total_rate: null, initial_IKKb: null, initial_JNK: null, initial_nucleus_Foxo1_Pa0_pUb0: null, initial_nucleus_Foxo1_Pa0_pUb1: null, initial_nucleus_Foxo1_Pa1_pUb0: null, initial_nucleus_Foxo1_Pa1_pUb1: null, initial_nucleus_Foxo1_tot: null, initial_nucleus_RNA_Inr: null, initial_nucleus_RNA_Sod2: null, initial_null: null, initial_PP2A: null, initial_Proteasome: null, initial_SCF: null, initial_SGK: null, initial_SIRT1: null, initial_USP7: null, JNK_init: null, kdeg: null, kdephos: null, kexp: null, kkin: null, kmdeg: null, kpdeg: null, ksynth: null, ktr1_181818: null, ktr2_0181818: null, ktr3_125: null, ktr4_055: null, ktr4_55: null, ktr5_25: null, ktranscr: null, ktransl: null, kub1: null, kub2: null, Metabolite_21: null, nucleus: null, nucleus_Foxo1_Pa0_pUb0_init: null, nucleus_Foxo1_Pa0_pUb1_init: null, nucleus_Foxo1_Pa1_pUb0_init: null, nucleus_Foxo1_Pa1_pUb1_init: null, nucleus_RNA_Inr_init: null, nucleus_RNA_Sod2_init: null, null_init: null, PP2A_init: null, Proteasome_init: null, SCF_init: null, SGK_init: null, SIRT1_init: null, transcription_rate: null, USP7_init: null};
    this.metadata.variableOrder = {null: null, degr_Foxo1: null, cytoplasm_Foxo1_Pa0_pUb0: null, nucleus_Foxo1_Pa0_pUb0: null, dnabound_Foxo1_Pa0_pUb0: null, cytoplasm_Foxo1_Pa0_pUb1: null, nucleus_Foxo1_Pa0_pUb1: null, dnabound_Foxo1_Pa0_pUb1: null, cytoplasm_Foxo1_Pa1_pUb0: null, nucleus_Foxo1_Pa1_pUb0: null, dnabound_Foxo1_Pa1_pUb0: null, cytoplasm_Foxo1_Pa1_pUb1: null, nucleus_Foxo1_Pa1_pUb1: null, dnabound_Foxo1_Pa1_pUb1: null, Foxo1_Pa0_tot: null, Foxo1_Pa1_tot: null, Foxo1_pUb0_tot: null, Foxo1_pUb1_tot: null, cytoplasm_Foxo1_tot: null, nucleus_Foxo1_tot: null, dnabound_Foxo1_tot: null, Foxo1_all: null, nucleus_RNA_Inr: null, cytoplasm_RNA_Inr: null, cytoplasm_Inr: null, nucleus_RNA_Sod2: null, cytoplasm_RNA_Sod2: null, cytoplasm_Sod2: null, E2F1: null, Akt: null, SGK: null, CDK2: null, AMPK: null, IKKb: null, JNK: null, PP2A: null, CBPP300: null, SIRT1: null, E3: null, USP7: null, SCF: null, Proteasome: null, Foxo1_total_rate: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}