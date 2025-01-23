export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cyt = 2;
    internal.nuc = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(23).fill(0);
    state[0] = internal.initial_TGFb_R1_surface;
    state[1] = internal.initial_TGFb_R2_surface;
    state[2] = internal.initial_TGFb_R1_endo;
    state[3] = internal.initial_TGFb_R2_endo;
    state[4] = internal.initial_TGFb;
    state[5] = internal.initial_TGFb_In;
    state[6] = internal.initial_Active_R2;
    state[7] = internal.initial_Active_Rec;
    state[8] = internal.initial_Active_Rec_endo;
    state[9] = internal.initial_Inactive_Rec;
    state[10] = internal.initial_pS2_c;
    state[11] = internal.initial_S2_c;
    state[12] = internal.initial_S4_c;
    state[13] = internal.initial_pS2_pS2_S4_c;
    state[14] = internal.initial_pS2_pS2_pS2_c;
    state[15] = internal.initial_Smad7mRNA;
    state[16] = internal.initial_Smad7mRNA1;
    state[17] = internal.initial_S7;
    state[18] = internal.initial_pS2_n;
    state[19] = internal.initial_pS2_pS2_S4_n;
    state[20] = internal.initial_pS2_pS2_pS2_n;
    state[21] = internal.initial_S2_n;
    state[22] = internal.initial_S4_n;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Active_R2_init", "Active_Rec_endo_init", "Active_Rec_init", "export_cytoplasm", "hill_fact1", "Inactive_Rec_init", "index_active_Rec_internalize_C5", "index_induced_ligand_deg", "index_induced_R2_deg", "index_k_out_1_relative_speed_C5", "index_k_out_2_relative_speed_C5", "index_kb_homotrimer", "index_kb_R1", "index_kb_R2", "index_kf_homotrimer", "index_seq_kb", "index_trimer_dephos", "k_Dephos_C5", "k_disso_Active_Rec", "k_in_R1_C5", "k_in_R2_C5", "k_induced_S7_production_C5", "k_medium", "K_mran", "k_phosphorylation", "k_S7_protein_C5", "kb_trimmer", "kdeg_R1", "kdeg_R2", "kdeg_S2", "kdeg_S4", "kdeg_S7", "kf_R1_activation", "kf_R2_activation", "kf_Seq_S7_Rec", "kf_trimmer", "kin_deg_Ligand", "kmRNA1deg_S7", "kmRNAdeg_S7", "kout_deg_Ligand_100pM", "mRNA_prod_C5", "pS2_c_init", "pS2_n_init", "pS2_pS2_pS2_c_init", "pS2_pS2_pS2_n_init", "pS2_pS2_S4_c_init", "pS2_pS2_S4_n_init", "R1_total_C5", "R2_total_C5", "S2_export_from_nuc_C5", "S2_import_to_nuc_C5", "S2_total_C5", "S4_export_from_nuc_C5", "S4_import_to_nuc_C5", "S4_total_C5", "S7KD", "TGFb_In_init", "TGFb_init", "Trimer_import_to_nuc"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Active_R2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Active_Rec_endo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Active_Rec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "export_cytoplasm", internal, 0.030437296130775102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_fact1", internal, 3.9863022459498301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inactive_Rec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_active_Rec_internalize_C5", internal, 0.60523307092572598, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_induced_ligand_deg", internal, 2.7210651363409801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_induced_R2_deg", internal, 1.0003777686631199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_k_out_1_relative_speed_C5", internal, 1.13328586042914, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_k_out_2_relative_speed_C5", internal, 0.28947828599112202, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_kb_homotrimer", internal, 0.0163921522930962, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_kb_R1", internal, 1.61290474569122, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_kb_R2", internal, 8.7049885413669408, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_kf_homotrimer", internal, 4.4857919268227002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_seq_kb", internal, 0.00086513194482801205, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "index_trimer_dephos", internal, 2.61013820571304, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Dephos_C5", internal, 0.19532654827639701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_disso_Active_Rec", internal, 0.0010394041135836701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_in_R1_C5", internal, 0.122822733556779, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_in_R2_C5", internal, 0.69029288300416303, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_induced_S7_production_C5", internal, 2.4999911030392998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_medium", internal, 2000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_mran", internal, 223.58600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phosphorylation", internal, 0.070156019177215201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_S7_protein_C5", internal, 0.10914520143447901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb_trimmer", internal, 1.6077346670684001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg_R1", internal, 0.058658449571396799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg_R2", internal, 0.0010003937382471999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg_S2", internal, 0.00051408401217546099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg_S4", internal, 0.0048020269936005699, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg_S7", internal, 0.0010240182973448499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf_R1_activation", internal, 4.9854854807603299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf_R2_activation", internal, 4.9555949670165704, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf_Seq_S7_Rec", internal, 0.88245503810602199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf_trimmer", internal, 4.81424700307387, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kin_deg_Ligand", internal, 0.72018223463531394, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmRNA1deg_S7", internal, 0.0052318143990062902, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmRNAdeg_S7", internal, 0.099015806548390206, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kout_deg_Ligand_100pM", internal, 0.00036189621999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRNA_prod_C5", internal, 0.0070208442911544097, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_pS2_pS2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_pS2_pS2_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_pS2_S4_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_pS2_S4_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1_total_C5", internal, 69.745855607680696, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R2_total_C5", internal, 54.349564038329298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_export_from_nuc_C5", internal, 3.7363363993623002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_import_to_nuc_C5", internal, 0.47639980399374199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_total_C5", internal, 437.99851912558199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_export_from_nuc_C5", internal, 0.39312547913394502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_import_to_nuc_C5", internal, 0.032818044678186602, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_total_C5", internal, 314.97168792262499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S7KD", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_In_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Trimer_import_to_nuc", internal, 0.144035002432848, -Infinity, Infinity, false);
    internal.initial_Active_R2 = internal.Active_R2_init;
    internal.initial_Active_Rec = internal.Active_Rec_init;
    internal.initial_Active_Rec_endo = internal.Active_Rec_endo_init;
    internal.initial_Inactive_Rec = internal.Inactive_Rec_init;
    internal.initial_pS2_c = internal.pS2_c_init;
    internal.initial_pS2_n = internal.pS2_n_init;
    internal.initial_pS2_pS2_pS2_c = internal.pS2_pS2_pS2_c_init;
    internal.initial_pS2_pS2_pS2_n = internal.pS2_pS2_pS2_n_init;
    internal.initial_pS2_pS2_S4_c = internal.pS2_pS2_S4_c_init;
    internal.initial_pS2_pS2_S4_n = internal.pS2_pS2_S4_n_init;
    internal.initial_TGFb = internal.TGFb_init;
    internal.initial_TGFb_In = internal.TGFb_In_init;
    internal.S2_c_init = internal.S2_total_C5 * (internal.S2_export_from_nuc_C5 + internal.kdeg_S2) / (2 * internal.S2_import_to_nuc_C5 + internal.S2_export_from_nuc_C5 + internal.kdeg_S2);
    internal.S2_n_init = 2 * internal.S2_total_C5 * internal.S2_import_to_nuc_C5 / (2 * internal.S2_import_to_nuc_C5 + internal.S2_export_from_nuc_C5 + internal.kdeg_S2);
    internal.S4_c_init = internal.S4_total_C5 * (internal.S4_export_from_nuc_C5 + internal.kdeg_S4) / (2 * internal.S4_import_to_nuc_C5 + internal.S4_export_from_nuc_C5 + internal.kdeg_S4);
    internal.S4_n_init = 2 * internal.S4_total_C5 * internal.S4_import_to_nuc_C5 / (2 * internal.S4_import_to_nuc_C5 + internal.S4_export_from_nuc_C5 + internal.kdeg_S4);
    internal.S7_init = internal.export_cytoplasm * internal.k_S7_protein_C5 * internal.mRNA_prod_C5 / (2 * internal.kdeg_S7 * internal.kmRNAdeg_S7 * (internal.export_cytoplasm + internal.kmRNA1deg_S7));
    internal.Smad7mRNA_init = internal.export_cytoplasm * internal.mRNA_prod_C5 / (2 * internal.kmRNAdeg_S7 * (internal.export_cytoplasm + internal.kmRNA1deg_S7));
    internal.Smad7mRNA1_init = internal.mRNA_prod_C5 / (internal.export_cytoplasm + internal.kmRNA1deg_S7);
    internal.TGFb_R1_endo_init = internal.R1_total_C5 * internal.k_in_R1_C5 * internal.kdeg_R1 / (internal.k_in_R1_C5 * internal.kdeg_R1 + Math.pow((internal.kdeg_R1), (2)) + internal.index_k_out_1_relative_speed_C5 * internal.k_in_R1_C5 * internal.kdeg_R1);
    internal.TGFb_R1_surface_init = internal.R1_total_C5 * internal.kdeg_R1 * (internal.kdeg_R1 + internal.index_k_out_1_relative_speed_C5 * internal.k_in_R1_C5) / (internal.k_in_R1_C5 * internal.kdeg_R1 + Math.pow((internal.kdeg_R1), (2)) + internal.index_k_out_1_relative_speed_C5 * internal.k_in_R1_C5 * internal.kdeg_R1);
    internal.TGFb_R2_endo_init = internal.R2_total_C5 * internal.k_in_R2_C5 * internal.kdeg_R2 / (internal.k_in_R2_C5 * internal.kdeg_R2 + Math.pow((internal.kdeg_R2), (2)) + internal.index_k_out_2_relative_speed_C5 * internal.k_in_R2_C5 * internal.kdeg_R2);
    internal.TGFb_R2_surface_init = internal.R2_total_C5 * internal.kdeg_R2 * (internal.kdeg_R2 + internal.index_k_out_2_relative_speed_C5 * internal.k_in_R2_C5) / (internal.k_in_R2_C5 * internal.kdeg_R2 + Math.pow((internal.kdeg_R2), (2)) + internal.index_k_out_2_relative_speed_C5 * internal.k_in_R2_C5 * internal.kdeg_R2);
    internal.initial_S2_c = internal.S2_c_init;
    internal.initial_S2_n = internal.S2_n_init;
    internal.initial_S4_c = internal.S4_c_init;
    internal.initial_S4_n = internal.S4_n_init;
    internal.initial_S7 = internal.S7_init;
    internal.initial_Smad7mRNA = internal.Smad7mRNA_init;
    internal.initial_Smad7mRNA1 = internal.Smad7mRNA1_init;
    internal.initial_TGFb_R1_endo = internal.TGFb_R1_endo_init;
    internal.initial_TGFb_R1_surface = internal.TGFb_R1_surface_init;
    internal.initial_TGFb_R2_endo = internal.TGFb_R2_endo_init;
    internal.initial_TGFb_R2_surface = internal.TGFb_R2_surface_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TGFb_R1_surface = state[0];
    const TGFb_R2_surface = state[1];
    const TGFb_R1_endo = state[2];
    const TGFb_R2_endo = state[3];
    const TGFb = state[4];
    const TGFb_In = state[5];
    const Active_R2 = state[6];
    const Active_Rec = state[7];
    const Active_Rec_endo = state[8];
    const Inactive_Rec = state[9];
    const pS2_c = state[10];
    const S2_c = state[11];
    const S4_c = state[12];
    const pS2_pS2_S4_c = state[13];
    const pS2_pS2_pS2_c = state[14];
    const Smad7mRNA = state[15];
    const Smad7mRNA1 = state[16];
    const S7 = state[17];
    const pS2_n = state[18];
    const pS2_pS2_S4_n = state[19];
    const pS2_pS2_pS2_n = state[20];
    const S2_n = state[21];
    const S4_n = state[22];
    dstatedt[6] = 0 + 1 * internal.cyt * (TGFb * TGFb_R2_surface * internal.kf_R2_activation) - 1 * internal.cyt * (Active_R2 * internal.index_kb_R2 * internal.kf_R2_activation) - 1 * internal.cyt * internal.kf_R1_activation * TGFb_R1_surface * Active_R2 + 1 * internal.cyt * (Active_Rec * internal.index_kb_R1 * internal.kf_R1_activation);
    dstatedt[7] = 0 + 1 * internal.cyt * internal.kf_R1_activation * TGFb_R1_surface * Active_R2 - 1 * internal.cyt * (Active_Rec * internal.index_kb_R1 * internal.kf_R1_activation) - 1 * internal.cyt * internal.kf_Seq_S7_Rec * Active_Rec * S7 + 1 * internal.cyt * (Inactive_Rec * internal.index_seq_kb * internal.kf_Seq_S7_Rec) - 1 * internal.cyt * (Active_Rec * internal.index_active_Rec_internalize_C5 * internal.k_in_R1_C5);
    dstatedt[8] = 0 - 1 * internal.cyt * internal.kdeg_R2 * Active_Rec_endo - 1 * internal.cyt * internal.kdeg_R1 * Active_Rec_endo - 1 * internal.cyt * internal.kin_deg_Ligand * Active_Rec_endo + 1 * internal.cyt * (Active_Rec * internal.index_active_Rec_internalize_C5 * internal.k_in_R1_C5) - 1 * internal.cyt * internal.k_disso_Active_Rec * Active_Rec_endo;
    dstatedt[9] = 0 + 1 * internal.cyt * internal.kf_Seq_S7_Rec * Active_Rec * S7 - 1 * internal.cyt * (Inactive_Rec * internal.index_seq_kb * internal.kf_Seq_S7_Rec) - 1 * internal.cyt * (Inactive_Rec * internal.index_induced_ligand_deg * internal.kin_deg_Ligand) - 1 * internal.cyt * (Inactive_Rec * internal.index_induced_R2_deg * internal.kdeg_R2);
    dstatedt[10] = 0 + 1 * internal.cyt * (Active_Rec_endo * S2_c * internal.k_phosphorylation) - 2 * internal.cyt * internal.kf_trimmer * Math.pow((pS2_c), (2)) * S4_c + 2 * internal.cyt * internal.kb_trimmer * pS2_pS2_S4_c - 3 * internal.cyt * (internal.index_kf_homotrimer * internal.kf_trimmer * Math.pow((pS2_c), (3))) + 3 * internal.cyt * (internal.index_kb_homotrimer * internal.kb_trimmer * pS2_pS2_pS2_c) - 1 * (internal.cyt * internal.S2_import_to_nuc_C5 * pS2_c) + 1 * (internal.nuc * internal.S2_export_from_nuc_C5 * pS2_n) - 1 * internal.cyt * internal.kdeg_S2 * pS2_c + 1 * internal.cyt * internal.kdeg_S2 * pS2_pS2_S4_c + 2 * internal.cyt * internal.kdeg_S4 * pS2_pS2_S4_c + 2 * internal.cyt * internal.kdeg_S2 * pS2_pS2_pS2_c;
    dstatedt[18] = 0 - 2 * internal.nuc * internal.kf_trimmer * Math.pow((pS2_n), (2)) * S4_n + 2 * internal.nuc * internal.kb_trimmer * pS2_pS2_S4_n - 3 * internal.nuc * (internal.index_kf_homotrimer * internal.kf_trimmer * Math.pow((pS2_n), (3))) + 3 * internal.nuc * (internal.index_kb_homotrimer * internal.kb_trimmer * pS2_pS2_pS2_n) + 1 * (internal.cyt * internal.S2_import_to_nuc_C5 * pS2_c) - 1 * (internal.nuc * internal.S2_export_from_nuc_C5 * pS2_n) - 1 * internal.nuc * internal.k_Dephos_C5 * pS2_n + 1 * internal.nuc * (internal.index_trimer_dephos * internal.k_Dephos_C5 * pS2_pS2_S4_n) - 1 * internal.nuc * internal.kdeg_S2 * pS2_n + 1 * internal.nuc * internal.kdeg_S2 * pS2_pS2_S4_n + 2 * internal.nuc * internal.kdeg_S4 * pS2_pS2_S4_n + 2 * internal.nuc * internal.kdeg_S2 * pS2_pS2_pS2_n;
    dstatedt[14] = 0 + 1 * internal.cyt * (internal.index_kf_homotrimer * internal.kf_trimmer * Math.pow((pS2_c), (3))) - 1 * internal.cyt * (internal.index_kb_homotrimer * internal.kb_trimmer * pS2_pS2_pS2_c) - 1 * (internal.cyt * internal.Trimer_import_to_nuc * pS2_pS2_pS2_c) - 1 * internal.cyt * internal.kdeg_S2 * pS2_pS2_pS2_c;
    dstatedt[20] = 0 + 1 * internal.nuc * (internal.index_kf_homotrimer * internal.kf_trimmer * Math.pow((pS2_n), (3))) - 1 * internal.nuc * (internal.index_kb_homotrimer * internal.kb_trimmer * pS2_pS2_pS2_n) + 1 * (internal.cyt * internal.Trimer_import_to_nuc * pS2_pS2_pS2_c) - 1 * internal.nuc * internal.kdeg_S2 * pS2_pS2_pS2_n;
    dstatedt[13] = 0 + 1 * internal.cyt * internal.kf_trimmer * Math.pow((pS2_c), (2)) * S4_c - 1 * internal.cyt * internal.kb_trimmer * pS2_pS2_S4_c - 1 * (internal.cyt * internal.Trimer_import_to_nuc * pS2_pS2_S4_c) - 1 * internal.cyt * internal.kdeg_S2 * pS2_pS2_S4_c - 1 * internal.cyt * internal.kdeg_S4 * pS2_pS2_S4_c;
    dstatedt[19] = 0 + 1 * internal.nuc * internal.kf_trimmer * Math.pow((pS2_n), (2)) * S4_n - 1 * internal.nuc * internal.kb_trimmer * pS2_pS2_S4_n + 1 * (internal.cyt * internal.Trimer_import_to_nuc * pS2_pS2_S4_c) - 1 * internal.nuc * (internal.index_trimer_dephos * internal.k_Dephos_C5 * pS2_pS2_S4_n) - 1 * internal.nuc * internal.kdeg_S2 * pS2_pS2_S4_n - 1 * internal.nuc * internal.kdeg_S4 * pS2_pS2_S4_n;
    dstatedt[11] = 0 - 1 * internal.cyt * (Active_Rec_endo * S2_c * internal.k_phosphorylation) - 1 * (internal.cyt * S2_c * internal.S2_import_to_nuc_C5) + 1 * (internal.nuc * S2_n * internal.S2_export_from_nuc_C5) + 1 * internal.cyt * (internal.S2_total_C5 * (internal.S2_import_to_nuc_C5 * internal.kdeg_S2 + internal.S2_export_from_nuc_C5 * internal.kdeg_S2 + Math.pow((internal.kdeg_S2), (2))) / (2 * internal.S2_import_to_nuc_C5 + internal.S2_export_from_nuc_C5 + internal.kdeg_S2)) - 1 * internal.cyt * internal.kdeg_S2 * S2_c;
    dstatedt[21] = 0 + 1 * (internal.cyt * S2_c * internal.S2_import_to_nuc_C5) - 1 * (internal.nuc * S2_n * internal.S2_export_from_nuc_C5) + 1 * internal.nuc * internal.k_Dephos_C5 * pS2_n + 1 * internal.nuc * (internal.index_trimer_dephos * internal.k_Dephos_C5 * pS2_pS2_S4_n) - 1 * internal.nuc * internal.kdeg_S2 * S2_n;
    dstatedt[12] = 0 - 1 * internal.cyt * internal.kf_trimmer * Math.pow((pS2_c), (2)) * S4_c + 1 * internal.cyt * internal.kb_trimmer * pS2_pS2_S4_c - 1 * (internal.cyt * S4_c * internal.S4_import_to_nuc_C5) + 1 * (internal.nuc * S4_n * internal.S4_export_from_nuc_C5) + 1 * internal.cyt * (internal.S4_total_C5 * (internal.S4_import_to_nuc_C5 * internal.kdeg_S4 + internal.S4_export_from_nuc_C5 * internal.kdeg_S4 + Math.pow((internal.kdeg_S4), (2))) / (2 * internal.S4_import_to_nuc_C5 + internal.S4_export_from_nuc_C5 + internal.kdeg_S4)) - 1 * internal.cyt * internal.kdeg_S4 * S4_c + 1 * internal.cyt * internal.kdeg_S2 * pS2_pS2_S4_c;
    dstatedt[22] = 0 - 1 * internal.nuc * internal.kf_trimmer * Math.pow((pS2_n), (2)) * S4_n + 1 * internal.nuc * internal.kb_trimmer * pS2_pS2_S4_n + 1 * (internal.cyt * S4_c * internal.S4_import_to_nuc_C5) - 1 * (internal.nuc * S4_n * internal.S4_export_from_nuc_C5) + 1 * internal.nuc * (internal.index_trimer_dephos * internal.k_Dephos_C5 * pS2_pS2_S4_n) - 1 * internal.nuc * internal.kdeg_S4 * S4_n + 1 * internal.nuc * internal.kdeg_S2 * pS2_pS2_S4_n;
    dstatedt[17] = 0 - 1 * internal.cyt * internal.kf_Seq_S7_Rec * Active_Rec * S7 + 1 * internal.cyt * (Inactive_Rec * internal.index_seq_kb * internal.kf_Seq_S7_Rec) + 1 * internal.cyt * (Inactive_Rec * internal.index_induced_ligand_deg * internal.kin_deg_Ligand) + 1 * internal.cyt * (Inactive_Rec * internal.index_induced_R2_deg * internal.kdeg_R2) + 1 * internal.cyt * (Smad7mRNA * internal.k_S7_protein_C5) - 1 * internal.cyt * internal.kdeg_S7 * S7;
    dstatedt[15] = 0 + 1 * (internal.nuc * Smad7mRNA1 * internal.export_cytoplasm) - 1 * internal.cyt * internal.kmRNAdeg_S7 * Smad7mRNA;
    dstatedt[16] = 0 + 1 * internal.nuc * (internal.S7KD * (internal.mRNA_prod_C5 + internal.k_induced_S7_production_C5 * Math.pow((pS2_pS2_S4_n), (internal.hill_fact1)) / (Math.pow((internal.K_mran), (internal.hill_fact1)) + Math.pow((pS2_pS2_S4_n), (internal.hill_fact1))))) - 1 * (internal.nuc * Smad7mRNA1 * internal.export_cytoplasm) - 1 * internal.nuc * internal.kmRNA1deg_S7 * Smad7mRNA1;
    dstatedt[4] = 0 - 1 * internal.cyt * (TGFb * TGFb_R2_surface * internal.kf_R2_activation / internal.k_medium) + 1 * internal.cyt * (Active_R2 * internal.index_kb_R2 * internal.kf_R2_activation / internal.k_medium) - 1 * internal.cyt * internal.kout_deg_Ligand_100pM * TGFb;
    dstatedt[5] = 0 + 1 * internal.cyt * internal.kdeg_R2 * Active_Rec_endo + 1 * internal.cyt * internal.kdeg_R1 * Active_Rec_endo + 1 * internal.cyt * (Inactive_Rec * internal.index_induced_R2_deg * internal.kdeg_R2) + 1 * internal.cyt * internal.k_disso_Active_Rec * Active_Rec_endo - 1 * internal.cyt * internal.kin_deg_Ligand * TGFb_In;
    dstatedt[2] = 0 + 1 * internal.cyt * internal.kdeg_R2 * Active_Rec_endo + 1 * internal.cyt * internal.kin_deg_Ligand * Active_Rec_endo - 1 * internal.cyt * internal.kdeg_R1 * TGFb_R1_endo + 1 * internal.cyt * (Inactive_Rec * internal.index_induced_ligand_deg * internal.kin_deg_Ligand) + 1 * internal.cyt * (Inactive_Rec * internal.index_induced_R2_deg * internal.kdeg_R2) + 1 * internal.cyt * internal.k_in_R1_C5 * TGFb_R1_surface - 1 * internal.cyt * (TGFb_R1_endo * internal.index_k_out_1_relative_speed_C5 * internal.k_in_R1_C5) + 1 * internal.cyt * internal.k_disso_Active_Rec * Active_Rec_endo;
    dstatedt[0] = 0 - 1 * internal.cyt * internal.kf_R1_activation * TGFb_R1_surface * Active_R2 + 1 * internal.cyt * (Active_Rec * internal.index_kb_R1 * internal.kf_R1_activation) - 1 * internal.cyt * internal.k_in_R1_C5 * TGFb_R1_surface + 1 * internal.cyt * (TGFb_R1_endo * internal.index_k_out_1_relative_speed_C5 * internal.k_in_R1_C5) + 1 * internal.cyt * (internal.R1_total_C5 * internal.k_in_R1_C5 * Math.pow((internal.kdeg_R1), (2)) / (internal.k_in_R1_C5 * internal.kdeg_R1 + Math.pow((internal.kdeg_R1), (2)) + internal.index_k_out_1_relative_speed_C5 * internal.k_in_R1_C5 * internal.kdeg_R1));
    dstatedt[3] = 0 + 1 * internal.cyt * internal.kdeg_R1 * Active_Rec_endo + 1 * internal.cyt * internal.kin_deg_Ligand * Active_Rec_endo - 1 * internal.cyt * internal.kdeg_R2 * TGFb_R2_endo + 1 * internal.cyt * (Inactive_Rec * internal.index_induced_ligand_deg * internal.kin_deg_Ligand) + 1 * internal.cyt * internal.k_in_R2_C5 * TGFb_R2_surface - 1 * internal.cyt * (TGFb_R2_endo * internal.index_k_out_2_relative_speed_C5 * internal.k_in_R2_C5) + 1 * internal.cyt * internal.k_disso_Active_Rec * Active_Rec_endo;
    dstatedt[1] = 0 - 1 * internal.cyt * (TGFb * TGFb_R2_surface * internal.kf_R2_activation) + 1 * internal.cyt * (Active_R2 * internal.index_kb_R2 * internal.kf_R2_activation) - 1 * internal.cyt * internal.k_in_R2_C5 * TGFb_R2_surface + 1 * internal.cyt * (TGFb_R2_endo * internal.index_k_out_2_relative_speed_C5 * internal.k_in_R2_C5) + 1 * internal.cyt * (internal.R2_total_C5 * internal.k_in_R2_C5 * Math.pow((internal.kdeg_R2), (2)) / (internal.k_in_R2_C5 * internal.kdeg_R2 + Math.pow((internal.kdeg_R2), (2)) + internal.index_k_out_2_relative_speed_C5 * internal.k_in_R2_C5 * internal.kdeg_R2));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TGFb_R1_surface", "TGFb_R2_surface", "TGFb_R1_endo", "TGFb_R2_endo", "TGFb", "TGFb_In", "Active_R2", "Active_Rec", "Active_Rec_endo", "Inactive_Rec", "pS2_c", "S2_c", "S4_c", "pS2_pS2_S4_c", "pS2_pS2_pS2_c", "Smad7mRNA", "Smad7mRNA1", "S7", "pS2_n", "pS2_pS2_S4_n", "pS2_pS2_pS2_n", "S2_n", "S4_n"];
    this.metadata.internalOrder = {Active_R2_init: null, Active_Rec_endo_init: null, Active_Rec_init: null, cyt: null, export_cytoplasm: null, hill_fact1: null, Inactive_Rec_init: null, index_active_Rec_internalize_C5: null, index_induced_ligand_deg: null, index_induced_R2_deg: null, index_k_out_1_relative_speed_C5: null, index_k_out_2_relative_speed_C5: null, index_kb_homotrimer: null, index_kb_R1: null, index_kb_R2: null, index_kf_homotrimer: null, index_seq_kb: null, index_trimer_dephos: null, initial_Active_R2: null, initial_Active_Rec: null, initial_Active_Rec_endo: null, initial_Inactive_Rec: null, initial_pS2_c: null, initial_pS2_n: null, initial_pS2_pS2_pS2_c: null, initial_pS2_pS2_pS2_n: null, initial_pS2_pS2_S4_c: null, initial_pS2_pS2_S4_n: null, initial_S2_c: null, initial_S2_n: null, initial_S4_c: null, initial_S4_n: null, initial_S7: null, initial_Smad7mRNA: null, initial_Smad7mRNA1: null, initial_TGFb: null, initial_TGFb_In: null, initial_TGFb_R1_endo: null, initial_TGFb_R1_surface: null, initial_TGFb_R2_endo: null, initial_TGFb_R2_surface: null, k_Dephos_C5: null, k_disso_Active_Rec: null, k_in_R1_C5: null, k_in_R2_C5: null, k_induced_S7_production_C5: null, k_medium: null, K_mran: null, k_phosphorylation: null, k_S7_protein_C5: null, kb_trimmer: null, kdeg_R1: null, kdeg_R2: null, kdeg_S2: null, kdeg_S4: null, kdeg_S7: null, kf_R1_activation: null, kf_R2_activation: null, kf_Seq_S7_Rec: null, kf_trimmer: null, kin_deg_Ligand: null, kmRNA1deg_S7: null, kmRNAdeg_S7: null, kout_deg_Ligand_100pM: null, mRNA_prod_C5: null, nuc: null, pS2_c_init: null, pS2_n_init: null, pS2_pS2_pS2_c_init: null, pS2_pS2_pS2_n_init: null, pS2_pS2_S4_c_init: null, pS2_pS2_S4_n_init: null, R1_total_C5: null, R2_total_C5: null, S2_c_init: null, S2_export_from_nuc_C5: null, S2_import_to_nuc_C5: null, S2_n_init: null, S2_total_C5: null, S4_c_init: null, S4_export_from_nuc_C5: null, S4_import_to_nuc_C5: null, S4_n_init: null, S4_total_C5: null, S7_init: null, S7KD: null, Smad7mRNA_init: null, Smad7mRNA1_init: null, TGFb_In_init: null, TGFb_init: null, TGFb_R1_endo_init: null, TGFb_R1_surface_init: null, TGFb_R2_endo_init: null, TGFb_R2_surface_init: null, Trimer_import_to_nuc: null};
    this.metadata.variableOrder = {TGFb_R1_surface: null, TGFb_R2_surface: null, TGFb_R1_endo: null, TGFb_R2_endo: null, TGFb: null, TGFb_In: null, Active_R2: null, Active_Rec: null, Active_Rec_endo: null, Inactive_Rec: null, pS2_c: null, S2_c: null, S4_c: null, pS2_pS2_S4_c: null, pS2_pS2_pS2_c: null, Smad7mRNA: null, Smad7mRNA1: null, S7: null, pS2_n: null, pS2_pS2_S4_n: null, pS2_pS2_pS2_n: null, S2_n: null, S4_n: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}