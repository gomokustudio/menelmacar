export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.extra = 0.5;
    internal.intra = 0.00025000000000000001;
    internal.kDiff = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(29).fill(0);
    state[0] = internal.initial_glycerol_i;
    state[1] = internal.initial_cin;
    state[2] = internal.initial_glucose_i;
    state[3] = internal.initial_G6P;
    state[4] = internal.initial_trehalose;
    state[5] = internal.initial_F16DP;
    state[6] = internal.initial_F26DP;
    state[7] = internal.initial_trioseP;
    state[8] = internal.initial_Gpd1;
    state[9] = internal.initial_pyruvate;
    state[10] = internal.initial_acetate_i;
    state[11] = internal.initial_ethanol_i;
    state[12] = internal.initial_Hog1;
    state[13] = internal.initial_Hog1PP;
    state[14] = internal.initial_Pfk2627a;
    state[15] = internal.initial_Pfk2627i;
    state[16] = internal.initial_AOG;
    state[17] = internal.initial_gpd1mRNA;
    state[18] = internal.initial_stl1mRNA;
    state[19] = internal.initial_Stl1;
    state[20] = internal.initial_AOGi;
    state[21] = internal.initial_Fps1r;
    state[22] = internal.initial_biomass;
    state[23] = internal.initial_cellvol;
    state[24] = internal.initial_glycerol_e;
    state[25] = internal.initial_glucose_e;
    state[26] = internal.initial_acetate_e;
    state[27] = internal.initial_ethanol_e;
    state[28] = internal.initial_trehalose_e;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["acetate_e_init", "acetate_i_init", "AOG_init", "AOGi_init", "biomass_init", "cellvol_init", "cellvol_init1", "cin_init", "ethanol_e_init", "ethanol_i_init", "F16DP_init", "F26DP_init", "Fps1r_init", "G6P_init", "glucose_e_init", "glucose_i_init", "glycerol_e_init", "glycerol_i_init", "Gpd1_init", "gpd1mRNA_init", "Hog1_init", "Hog1PP_init", "initcellnum", "kv1_1", "kv1_2", "kv10_1", "kv10_2", "kv11_1", "kv11_2", "kv12_1", "kv12_2", "kv13a_1", "kv13b_1", "kv13b_2", "kv14_1", "kv14_2", "kv14_3", "kv14_4", "kv14_5", "kv15f_1", "kv15f_2", "kv15r_1", "kv15r_2", "kv16f_1", "kv16f_2", "kv16f_3", "kv16r_1", "kv17f_1", "kv17f_2", "kv17f_3", "kv17f_4", "kv17f_5", "kv17f_6", "kv17r_1", "kv18f_1", "kv18r_1", "kv19f_1", "kv19r_1", "kv2_1", "kv2_2", "kv20f_1", "kv20f_2", "kv20f_3", "kv20f_x", "kv20r_1", "kv21f_1", "kv21r_1", "kv22_1", "kv22_2", "kv22_3", "kv22_4_Hog1A", "kv22_Hog1D_d", "kv22_Hog1D_fT", "kv22_Hog1D_t", "kv23f_1", "kv23f_2", "kv23f_3", "kv23r_1", "kv3_1", "kv3_2", "kv3_3", "kv3_4", "kv4_1", "kv4_2", "kv4_3", "kv4_4", "kv4_5", "kv5_1", "kv5_2", "kv5_3", "kv5_4", "kv6_1", "kv6_2", "kv6_3", "kv6b_1", "kv6b_2", "kv6b_3", "kv6b_4", "kv6b_5", "kv6b_x", "kv7_1", "kv7_2", "kv8_1", "kv8_2", "kv9_1", "kv9_2", "kx1", "kx2", "parameter_97", "Pfk2627a_init", "Pfk2627i_init", "pyruvate_init", "quantity", "Stl1_init", "stl1mRNA_init", "t_stress", "trehalose_e_init", "trehalose_init", "trioseP_init", "v", "v15f_v", "v15r_v", "v19r_v", "vV_1", "vV_2", "vV_R", "vV_T"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "acetate_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "acetate_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AOG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AOGi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "biomass_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cellvol_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cellvol_init1", internal, 0.00024000000000000101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ethanol_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ethanol_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F16DP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F26DP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fps1r_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glucose_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glucose_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glycerol_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glycerol_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gpd1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gpd1mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hog1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hog1PP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "initcellnum", internal, 6954722.4639999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv1_1", internal, 5.0524899999999996e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv1_2", internal, 0.899814, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv10_1", internal, 1.83291e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv10_2", internal, 4.2651199999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv11_1", internal, 3.2863000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv11_2", internal, 1.17279, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv12_1", internal, 1.0092700000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv12_2", internal, 0.148586, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv13a_1", internal, 6.2889900000000004e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv13b_1", internal, 1.2700099999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv13b_2", internal, 3.6919599999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv14_1", internal, 0.80805099999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv14_2", internal, 6.0592200000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv14_3", internal, 2.0515699999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv14_4", internal, 0.42062100000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv14_5", internal, 1.2304900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv15f_1", internal, 4.9950700000000003e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv15f_2", internal, 6.9587700000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv15r_1", internal, 1.8482899999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv15r_2", internal, 3.3186999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv16f_1", internal, 0.15611800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv16f_2", internal, 0.00045242399999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv16f_3", internal, 14.944800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv16r_1", internal, 0.58807200000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17f_1", internal, 0.00041144599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17f_2", internal, 0.54788599999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17f_3", internal, 0.42139399999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17f_4", internal, 6.8695899999999996e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17f_5", internal, 18.998899999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17f_6", internal, 7.8576700000000006e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv17r_1", internal, 0.00151498, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv18f_1", internal, 0.0064655299999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv18r_1", internal, 0.00013254900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv19f_1", internal, 0.29912699999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv19r_1", internal, 0.060565500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv2_1", internal, 0.0030385500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv2_2", internal, 0.40864, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv20f_1", internal, 9.8188699999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv20f_2", internal, 0.016784500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv20f_3", internal, 4.0584300000000004e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv20f_x", internal, 1.5585800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv20r_1", internal, 0.00070593299999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv21f_1", internal, 0.0012167300000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv21r_1", internal, 0.00021424700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_1", internal, 8.0075000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_2", internal, 0.0215179, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_3", internal, 0.055472899999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_4_Hog1A", internal, 1.25187, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_Hog1D_d", internal, 0.00029435699999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_Hog1D_fT", internal, 0.0256901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv22_Hog1D_t", internal, 5536, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv23f_1", internal, 8.8053500000000003e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv23f_2", internal, 0.00051234999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv23f_3", internal, 6.9572700000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv23r_1", internal, 0.00020987499999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv3_1", internal, 6.1738699999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv3_2", internal, 0.81113999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv3_3", internal, 0.00073780799999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv3_4", internal, 0.16699600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv4_1", internal, 0.0628885, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv4_2", internal, 0.0023071400000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv4_3", internal, 0.00171631, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv4_4", internal, 2.67143, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv4_5", internal, 0.58386499999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv5_1", internal, 0.00383315, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv5_2", internal, 1.7446299999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv5_3", internal, 0.0065612800000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv5_4", internal, 1.13994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6_1", internal, 0.0118992, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6_2", internal, 0.23086400000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6_3", internal, 1.7650399999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6b_1", internal, 0.85910399999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6b_2", internal, 0.0307535, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6b_3", internal, 1.20045, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6b_4", internal, 4.61918e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6b_5", internal, 0.29262700000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv6b_x", internal, 28.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv7_1", internal, 0.00983997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv7_2", internal, 0.31787900000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv8_1", internal, 0.013567600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv8_2", internal, 1.50827, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv9_1", internal, 0.21493699999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv9_2", internal, 0.92366499999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kx1", internal, 1.9777100000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kx2", internal, 5.3717100000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_97", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pfk2627a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pfk2627i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pyruvate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "quantity", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Stl1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "stl1mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_stress", internal, 3600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "trehalose_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "trehalose_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "trioseP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v15f_v", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v15r_v", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v19r_v", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vV_1", internal, 3.5629400000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vV_2", internal, 0.0011653200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vV_R", internal, 8.3140000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vV_T", internal, 298.5, -Infinity, Infinity, false);
    internal.initial_acetate_e = internal.acetate_e_init;
    internal.initial_acetate_i = internal.acetate_i_init;
    internal.initial_AOG = internal.AOG_init;
    internal.initial_AOGi = internal.AOGi_init;
    internal.initial_biomass = internal.biomass_init;
    internal.initial_cellvol = internal.cellvol_init;
    internal.initial_cin = internal.cin_init;
    internal.initial_ethanol_e = internal.ethanol_e_init;
    internal.initial_ethanol_i = internal.ethanol_i_init;
    internal.initial_F16DP = internal.F16DP_init;
    internal.initial_F26DP = internal.F26DP_init;
    internal.initial_Fps1r = internal.Fps1r_init;
    internal.initial_G6P = internal.G6P_init;
    internal.initial_glucose_e = internal.glucose_e_init;
    internal.initial_glucose_i = internal.glucose_i_init;
    internal.initial_glycerol_e = internal.glycerol_e_init;
    internal.initial_glycerol_i = internal.glycerol_i_init;
    internal.initial_Gpd1 = internal.Gpd1_init;
    internal.initial_gpd1mRNA = internal.gpd1mRNA_init;
    internal.initial_Hog1 = internal.Hog1_init;
    internal.initial_Hog1PP = internal.Hog1PP_init;
    internal.initial_Pfk2627a = internal.Pfk2627a_init;
    internal.initial_Pfk2627i = internal.Pfk2627i_init;
    internal.initial_pyruvate = internal.pyruvate_init;
    internal.initial_Stl1 = internal.Stl1_init;
    internal.initial_stl1mRNA = internal.stl1mRNA_init;
    internal.initial_trehalose = internal.trehalose_init;
    internal.initial_trehalose_e = internal.trehalose_e_init;
    internal.initial_trioseP = internal.trioseP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const glycerol_i = state[0];
    const cin = state[1];
    const glucose_i = state[2];
    const G6P = state[3];
    const trehalose = state[4];
    const F16DP = state[5];
    const F26DP = state[6];
    const trioseP = state[7];
    const Gpd1 = state[8];
    const pyruvate = state[9];
    const acetate_i = state[10];
    const ethanol_i = state[11];
    const Hog1 = state[12];
    const Hog1PP = state[13];
    const Pfk2627a = state[14];
    const Pfk2627i = state[15];
    const AOG = state[16];
    const gpd1mRNA = state[17];
    const stl1mRNA = state[18];
    const Stl1 = state[19];
    const AOGi = state[20];
    const Fps1r = state[21];
    const cellvol = state[23];
    const glycerol_e = state[24];
    const glucose_e = state[25];
    const acetate_e = state[26];
    const ethanol_e = state[27];
    const trehalose_e = state[28];
    dstatedt[6] = 0 + 1 * internal.intra * (G6P * internal.kv15f_1 * Pfk2627a / (internal.kv15f_2 + G6P)) - 1 * internal.intra * (internal.kv15r_1 * F26DP / (internal.kv15r_2 + F26DP));
    var input = ((t < internal.t_stress ? 0 : ((t < internal.t_stress + 5 ? (t - internal.t_stress) / 5 : 1))));
    var kv16r_1VARIABLE = ((t < 4800 ? 0.44429600000000002 : 0.44429600000000002 * Math.pow((t / 4800), (3))));
    var OD = 2.9455700000000002e-09 * Math.pow((t), (2)) + 6.4918200000000005e-05 * t + 0.59560800000000003;
    var v13bspeed = glycerol_e * internal.kv13b_1 * Stl1 / (internal.kv13b_2 + glycerol_e);
    var v1speed = internal.kv1_1 * glucose_e / (internal.kv1_2 + glucose_e);
    var Vm = cellvol + 0.00024000000000000001;
    var cellnum = - 6548240 * Math.pow((OD), (2)) + 30565100 * OD - 4727510;
    var CellSurface = Math.pow((36 * internal.pi), (1 / 3)) * Math.pow((Vm), (2 / 3));
    dstatedt[16] = 0 + 1 * internal.intra * (AOGi * internal.kv23f_1 * Math.pow((internal.kv23f_2 / Vm), (internal.kv23f_3))) - 1 * internal.intra * internal.kv23r_1 * AOG;
    dstatedt[20] = 0 - 1 * internal.intra * (AOGi * internal.kv23f_1 * Math.pow((internal.kv23f_2 / Vm), (internal.kv23f_3))) + 1 * internal.intra * internal.kv23r_1 * AOG;
    var OsmoE = 0.35558600000000001 + internal.parameter_97 * input;
    var Turgor = ((Vm > 0.00025000000000000001 * 0.90000000000000002 + 0.00025000000000000001 ? - 2.8999999999999999 * (1 - (0.00025000000000000001 - (Vm - 0.00025000000000000001)) / (0.00025000000000000001 - 0.00025000000000000001 * 0.90000000000000002)) : 0));
    dstatedt[22] = 0 + 1 * internal.intra * (internal.kv14_1 * Math.pow((cellvol), (internal.kv14_3)) / (Math.pow((cellvol), (internal.kv14_3)) + internal.kv14_2) * (1 - OsmoE / (OsmoE + internal.kv14_4)) * G6P / internal.kv14_5 / (1 + G6P / internal.kv14_5));
    dstatedt[23] = 0 + 1 * internal.intra * (internal.vV_1 * CellSurface * (Turgor - internal.vV_2 * internal.vV_R * internal.vV_T * (glycerol_e + OsmoE - (glycerol_i + cin))));
    dstatedt[21] = 0 + 1 * internal.intra * (internal.kv22_1 * - Turgor / (internal.kv22_3 + - Turgor) * 1.5 * (1 - Hog1PP / (Hog1PP + internal.kv22_2)) - internal.kv22_1 * Fps1r);
    dstatedt[25] = 0 - 1 * (internal.kv1_1 * glucose_e / (internal.kv1_2 + glucose_e)) - 1 * internal.extra * (v1speed * cellnum / internal.initcellnum - v1speed);
    var v10speed = internal.kv10_1 * CellSurface * (trehalose - internal.kv10_2 * trehalose_e);
    var v11speed = internal.kv11_1 * CellSurface * (acetate_i - internal.kv11_2 * acetate_e);
    var v12speed = internal.kv12_1 * CellSurface * (ethanol_i - internal.kv12_2 * ethanol_e);
    var v13aspeed = Fps1r * internal.kv13a_1 * CellSurface * (glycerol_i - glycerol_e);
    var volchangespeed = internal.vV_1 * CellSurface * (Turgor - internal.vV_2 * internal.vV_R * internal.vV_T * (glycerol_e + OsmoE - (glycerol_i + cin)));
    dstatedt[26] = 0 + 1 * (internal.kv11_1 * CellSurface * (acetate_i - internal.kv11_2 * acetate_e)) + 1 * internal.extra * (v11speed * cellnum / internal.initcellnum - v11speed);
    dstatedt[10] = 0 - 1 * (internal.kv11_1 * CellSurface * (acetate_i - internal.kv11_2 * acetate_e)) + 1 * internal.intra * (internal.kv8_1 * pyruvate / (internal.kv8_2 + pyruvate)) - 1 * internal.intra * (acetate_i * volchangespeed / cellvol);
    dstatedt[1] = 0 - 1 * internal.intra * (cin * volchangespeed / cellvol);
    dstatedt[27] = 0 + 1 * (internal.kv12_1 * CellSurface * (ethanol_i - internal.kv12_2 * ethanol_e)) + 1 * internal.extra * (v12speed * cellnum / internal.initcellnum - v12speed);
    dstatedt[11] = 0 - 1 * (internal.kv12_1 * CellSurface * (ethanol_i - internal.kv12_2 * ethanol_e)) + 1 * internal.intra * (internal.kv9_1 * pyruvate / (internal.kv9_2 + pyruvate)) - 1 * internal.intra * (ethanol_i * volchangespeed / cellvol);
    dstatedt[5] = 0 + 1 * internal.intra * ((internal.kv4_2 * (1 - Math.pow((F26DP), (internal.kv4_5)) / Math.pow((F26DP + internal.kv4_3), (internal.kv4_5))) + internal.kv4_1 * Math.pow((F26DP), (internal.kv4_5)) / Math.pow((F26DP + internal.kv4_3), (internal.kv4_5))) * Math.pow((G6P / internal.kv4_4), (2)) / (1 + Math.pow((G6P / internal.kv4_4), (2)))) - 1 * internal.intra * (internal.kv5_1 * F16DP / internal.kv5_2 / (1 + F16DP / internal.kv5_2) - internal.kv5_3 * trioseP / internal.kv5_4 / (1 + trioseP / internal.kv5_4)) - 1 * internal.intra * (F16DP * volchangespeed / cellvol);
    dstatedt[3] = 0 - 1 * internal.intra * (internal.kv14_1 * Math.pow((cellvol), (internal.kv14_3)) / (Math.pow((cellvol), (internal.kv14_3)) + internal.kv14_2) * (1 - OsmoE / (OsmoE + internal.kv14_4)) * G6P / internal.kv14_5 / (1 + G6P / internal.kv14_5)) - 1 * internal.intra * (G6P * internal.kv15f_1 * Pfk2627a / (internal.kv15f_2 + G6P)) + 1 * internal.intra * (internal.kv15r_1 * F26DP / (internal.kv15r_2 + F26DP)) + 1 * internal.intra * (internal.kv2_1 * glucose_i / (internal.kv2_2 + glucose_i)) - 2 * internal.intra * ((internal.kv3_1 * G6P / internal.kv3_2 - internal.kv3_3 * trehalose / internal.kv3_4) / (1 + G6P / internal.kv3_2 + trehalose / internal.kv3_4)) - 1 * internal.intra * ((internal.kv4_2 * (1 - Math.pow((F26DP), (internal.kv4_5)) / Math.pow((F26DP + internal.kv4_3), (internal.kv4_5))) + internal.kv4_1 * Math.pow((F26DP), (internal.kv4_5)) / Math.pow((F26DP + internal.kv4_3), (internal.kv4_5))) * Math.pow((G6P / internal.kv4_4), (2)) / (1 + Math.pow((G6P / internal.kv4_4), (2)))) - 1 * internal.intra * (G6P * volchangespeed / cellvol);
    dstatedt[2] = 0 + 1 * (internal.kv1_1 * glucose_e / (internal.kv1_2 + glucose_e)) - 1 * internal.intra * (internal.kv2_1 * glucose_i / (internal.kv2_2 + glucose_i)) - 1 * internal.intra * (glucose_i * volchangespeed / cellvol);
    dstatedt[24] = 0 + 1 * (internal.kv13a_1 * CellSurface * Fps1r * (glycerol_i - internal.kDiff * glycerol_e)) + 1 * internal.extra * (v13aspeed * cellnum / internal.initcellnum - v13aspeed) - 1 * (glycerol_e * internal.kv13b_1 * Stl1 / (internal.kv13b_2 + glycerol_e)) - 1 * internal.extra * (v13bspeed * cellnum / internal.initcellnum - v13bspeed);
    dstatedt[0] = 0 - 1 * (internal.kv13a_1 * CellSurface * Fps1r * (glycerol_i - internal.kDiff * glycerol_e)) + 1 * (glycerol_e * internal.kv13b_1 * Stl1 / (internal.kv13b_2 + glycerol_e)) + 1 * internal.intra * 0 + 1 * internal.intra * (internal.kv6b_x * internal.kv6b_4 * Math.pow((trioseP), (2)) / internal.kv6b_5 / (1 + Math.pow((trioseP), (2)) / internal.kv6b_5)) - 1 * internal.intra * (glycerol_i * volchangespeed / cellvol);
    dstatedt[8] = 0 + 1 * internal.intra * (internal.kv18f_1 * gpd1mRNA) - 1 * internal.intra * internal.kv18r_1 * Gpd1 - 1 * internal.intra * (Gpd1 * volchangespeed / cellvol);
    dstatedt[17] = 0 + 1 * internal.intra * 0 - 1 * internal.intra * internal.kv17r_1 * gpd1mRNA - 1 * internal.intra * (gpd1mRNA * volchangespeed / cellvol);
    dstatedt[12] = 0 - 1 * internal.intra * (Hog1 * internal.kv16f_1 * OsmoE * Math.pow((internal.kv16f_2 / Vm), (internal.kv16f_3))) + 1 * internal.intra * kv16r_1VARIABLE * Hog1PP - 1 * internal.intra * (Hog1 * volchangespeed / cellvol);
    dstatedt[13] = 0 + 1 * internal.intra * (Hog1 * internal.kv16f_1 * OsmoE * Math.pow((internal.kv16f_2 / Vm), (internal.kv16f_3))) - 1 * internal.intra * kv16r_1VARIABLE * Hog1PP - 1 * internal.intra * (Hog1PP * volchangespeed / cellvol);
    dstatedt[14] = 0 + 1 * internal.intra * (internal.kv19f_1 * Hog1PP * Pfk2627i) - 1 * internal.intra * internal.kv19r_1 * Pfk2627a - 1 * internal.intra * (Pfk2627a * volchangespeed / cellvol);
    dstatedt[15] = 0 - 1 * internal.intra * (internal.kv19f_1 * Hog1PP * Pfk2627i) + 1 * internal.intra * internal.kv19r_1 * Pfk2627a - 1 * internal.intra * (Pfk2627i * volchangespeed / cellvol);
    dstatedt[9] = 0 + 1 * internal.intra * (internal.kv7_1 * trioseP / (internal.kv7_2 + trioseP)) - 1 * internal.intra * (internal.kv8_1 * pyruvate / (internal.kv8_2 + pyruvate)) - 1 * internal.intra * (internal.kv9_1 * pyruvate / (internal.kv9_2 + pyruvate)) - 1 * internal.intra * (pyruvate * volchangespeed / cellvol);
    dstatedt[19] = 0 + 1 * internal.intra * (internal.kv21f_1 * stl1mRNA) - 1 * internal.intra * internal.kv21r_1 * Stl1 - 1 * internal.intra * (Stl1 * volchangespeed / cellvol);
    dstatedt[18] = 0 + 1 * internal.intra * (internal.kv20f_1 * Math.pow((Hog1PP), (internal.kv20f_x)) / (Math.pow((Hog1PP), (internal.kv20f_x)) + internal.kv20f_2) + internal.kv20f_3) - 1 * internal.intra * internal.kv20r_1 * stl1mRNA - 1 * internal.intra * (stl1mRNA * volchangespeed / cellvol);
    dstatedt[4] = 0 - 1 * (internal.kv10_1 * CellSurface * (trehalose - internal.kv10_2 * trehalose_e)) + 1 * internal.intra * ((internal.kv3_1 * G6P / internal.kv3_2 - internal.kv3_3 * trehalose / internal.kv3_4) / (1 + G6P / internal.kv3_2 + trehalose / internal.kv3_4)) - 1 * internal.intra * (trehalose * volchangespeed / cellvol);
    dstatedt[28] = 0 + 1 * (internal.kv10_1 * CellSurface * (trehalose - internal.kv10_2 * trehalose_e)) + 1 * internal.extra * (v10speed * cellnum / internal.initcellnum - v10speed);
    dstatedt[7] = 0 + 2 * internal.intra * (internal.kv5_1 * F16DP / internal.kv5_2 / (1 + F16DP / internal.kv5_2) - internal.kv5_3 * trioseP / internal.kv5_4 / (1 + trioseP / internal.kv5_4)) - 1 * internal.intra * 0 - 1 * internal.intra * (internal.kv6b_x * internal.kv6b_4 * Math.pow((trioseP), (2)) / internal.kv6b_5 / (1 + Math.pow((trioseP), (2)) / internal.kv6b_5)) - 1 * internal.intra * (internal.kv7_1 * trioseP / (internal.kv7_2 + trioseP)) - 1 * internal.intra * (trioseP * volchangespeed / cellvol);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "glycerol_i", "cin", "glucose_i", "G6P", "trehalose", "F16DP", "F26DP", "trioseP", "Gpd1", "pyruvate", "acetate_i", "ethanol_i", "Hog1", "Hog1PP", "Pfk2627a", "Pfk2627i", "AOG", "gpd1mRNA", "stl1mRNA", "Stl1", "AOGi", "Fps1r", "biomass", "cellvol", "glycerol_e", "glucose_e", "acetate_e", "ethanol_e", "trehalose_e"];
    this.metadata.internalOrder = {acetate_e_init: null, acetate_i_init: null, AOG_init: null, AOGi_init: null, biomass_init: null, cellvol_init: null, cellvol_init1: null, cin_init: null, ethanol_e_init: null, ethanol_i_init: null, extra: null, F16DP_init: null, F26DP_init: null, Fps1r_init: null, G6P_init: null, glucose_e_init: null, glucose_i_init: null, glycerol_e_init: null, glycerol_i_init: null, Gpd1_init: null, gpd1mRNA_init: null, Hog1_init: null, Hog1PP_init: null, initcellnum: null, initial_acetate_e: null, initial_acetate_i: null, initial_AOG: null, initial_AOGi: null, initial_biomass: null, initial_cellvol: null, initial_cin: null, initial_ethanol_e: null, initial_ethanol_i: null, initial_F16DP: null, initial_F26DP: null, initial_Fps1r: null, initial_G6P: null, initial_glucose_e: null, initial_glucose_i: null, initial_glycerol_e: null, initial_glycerol_i: null, initial_Gpd1: null, initial_gpd1mRNA: null, initial_Hog1: null, initial_Hog1PP: null, initial_Pfk2627a: null, initial_Pfk2627i: null, initial_pyruvate: null, initial_Stl1: null, initial_stl1mRNA: null, initial_trehalose: null, initial_trehalose_e: null, initial_trioseP: null, intra: null, kDiff: null, kv1_1: null, kv1_2: null, kv10_1: null, kv10_2: null, kv11_1: null, kv11_2: null, kv12_1: null, kv12_2: null, kv13a_1: null, kv13b_1: null, kv13b_2: null, kv14_1: null, kv14_2: null, kv14_3: null, kv14_4: null, kv14_5: null, kv15f_1: null, kv15f_2: null, kv15r_1: null, kv15r_2: null, kv16f_1: null, kv16f_2: null, kv16f_3: null, kv16r_1: null, kv17f_1: null, kv17f_2: null, kv17f_3: null, kv17f_4: null, kv17f_5: null, kv17f_6: null, kv17r_1: null, kv18f_1: null, kv18r_1: null, kv19f_1: null, kv19r_1: null, kv2_1: null, kv2_2: null, kv20f_1: null, kv20f_2: null, kv20f_3: null, kv20f_x: null, kv20r_1: null, kv21f_1: null, kv21r_1: null, kv22_1: null, kv22_2: null, kv22_3: null, kv22_4_Hog1A: null, kv22_Hog1D_d: null, kv22_Hog1D_fT: null, kv22_Hog1D_t: null, kv23f_1: null, kv23f_2: null, kv23f_3: null, kv23r_1: null, kv3_1: null, kv3_2: null, kv3_3: null, kv3_4: null, kv4_1: null, kv4_2: null, kv4_3: null, kv4_4: null, kv4_5: null, kv5_1: null, kv5_2: null, kv5_3: null, kv5_4: null, kv6_1: null, kv6_2: null, kv6_3: null, kv6b_1: null, kv6b_2: null, kv6b_3: null, kv6b_4: null, kv6b_5: null, kv6b_x: null, kv7_1: null, kv7_2: null, kv8_1: null, kv8_2: null, kv9_1: null, kv9_2: null, kx1: null, kx2: null, parameter_97: null, Pfk2627a_init: null, Pfk2627i_init: null, pi: null, pyruvate_init: null, quantity: null, Stl1_init: null, stl1mRNA_init: null, t_stress: null, trehalose_e_init: null, trehalose_init: null, trioseP_init: null, v: null, v15f_v: null, v15r_v: null, v19r_v: null, vV_1: null, vV_2: null, vV_R: null, vV_T: null};
    this.metadata.variableOrder = {glycerol_i: null, cin: null, glucose_i: null, G6P: null, trehalose: null, F16DP: null, F26DP: null, trioseP: null, Gpd1: null, pyruvate: null, acetate_i: null, ethanol_i: null, Hog1: null, Hog1PP: null, Pfk2627a: null, Pfk2627i: null, AOG: null, gpd1mRNA: null, stl1mRNA: null, Stl1: null, AOGi: null, Fps1r: null, biomass: null, cellvol: null, glycerol_e: null, glucose_e: null, acetate_e: null, ethanol_e: null, trehalose_e: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}