export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.KmB = 450;
    internal.KmC = 5000;
    internal.KmD = 10000;
    internal.KmE = 1000;
    internal.KmF = 30000;
    internal.KmG = 400;
    internal.KmH = 1650;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var species_36_init = internal.initial_species_10 + internal.initial_species_12 + internal.initial_species_17;
    var species_37_init = internal.initial_species_36 / 8;
    var species_38_init = 8 * (internal.initial_species_2 + internal.initial_species_5 + internal.initial_species_6) + internal.initial_species_8 + internal.initial_species_9 + internal.initial_species_18 + internal.initial_species_19 + internal.initial_species_15 + internal.initial_species_16;
    var species_39_init = internal.initial_species_38 / 8;
    internal.initial_species_36 = species_36_init;
    internal.initial_species_37 = species_37_init;
    internal.initial_species_38 = species_38_init;
    internal.initial_species_39 = species_39_init;
    var state = Array(39).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    state[2] = internal.initial_species_3;
    state[3] = internal.initial_species_4;
    state[4] = internal.initial_species_5;
    state[5] = internal.initial_species_6;
    state[6] = internal.initial_species_7;
    state[7] = internal.initial_species_8;
    state[8] = internal.initial_species_9;
    state[9] = internal.initial_species_10;
    state[10] = internal.initial_species_11;
    state[11] = internal.initial_species_12;
    state[12] = internal.initial_species_13;
    state[13] = internal.initial_species_14;
    state[14] = internal.initial_species_15;
    state[15] = internal.initial_species_16;
    state[16] = internal.initial_species_17;
    state[17] = internal.initial_species_18;
    state[18] = internal.initial_species_19;
    state[19] = internal.initial_species_20;
    state[20] = internal.initial_species_21;
    state[21] = internal.initial_species_22;
    state[22] = internal.initial_species_23;
    state[23] = internal.initial_species_24;
    state[24] = internal.initial_species_25;
    state[25] = internal.initial_species_26;
    state[26] = internal.initial_species_27;
    state[27] = internal.initial_species_28;
    state[28] = internal.initial_species_29;
    state[29] = internal.initial_species_30;
    state[30] = internal.initial_species_31;
    state[31] = internal.initial_species_32;
    state[32] = internal.initial_species_33;
    state[33] = internal.initial_species_34;
    state[34] = internal.initial_species_35;
    state[35] = internal.initial_species_36;
    state[36] = internal.initial_species_37;
    state[37] = internal.initial_species_38;
    state[38] = internal.initial_species_39;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_10", "parameter_11", "parameter_12", "parameter_13", "parameter_14", "parameter_15", "parameter_17", "parameter_18", "parameter_19", "parameter_2", "parameter_20", "parameter_21", "parameter_22", "parameter_23", "parameter_24", "parameter_25", "parameter_26", "parameter_30", "parameter_31", "parameter_32", "parameter_33", "parameter_34", "parameter_35", "parameter_36", "parameter_37", "parameter_38", "parameter_47", "parameter_48", "parameter_5", "parameter_6", "parameter_8", "parameter_9", "species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_14_init", "species_15_init", "species_16_init", "species_17_init", "species_18_init", "species_19_init", "species_2_init", "species_20_init", "species_21_init", "species_22_init", "species_23_init", "species_24_init", "species_25_init", "species_26_init", "species_27_init", "species_28_init", "species_29_init", "species_3_init", "species_30_init", "species_31_init", "species_32_init", "species_33_init", "species_34_init", "species_35_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.0809, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 13.859999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 1.3799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_12", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 0.000301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_14", internal, 1.39e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_15", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_17", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_18", internal, 0.0037000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_19", internal, 36.359999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 0.000455, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_20", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_21", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_22", internal, 4.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_23", internal, 0.51000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_24", internal, 160, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_25", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_26", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_30", internal, 2320, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_31", internal, 2320, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_32", internal, 2211, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_33", internal, 1757, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_34", internal, 1540, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_35", internal, 1392, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_36", internal, 1005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_37", internal, 868, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_38", internal, 250000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_47", internal, 0.011299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_48", internal, 8.3300000000000005e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 4.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 3.21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_9", internal, 64800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_19_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_22_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_23_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_24_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_25_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_26_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_27_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_28_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_29_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_30_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_31_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_32_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_33_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_34_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_35_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_11 = internal.species_11_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_13 = internal.species_13_init;
    internal.initial_species_14 = internal.species_14_init;
    internal.initial_species_15 = internal.species_15_init;
    internal.initial_species_16 = internal.species_16_init;
    internal.initial_species_17 = internal.species_17_init;
    internal.initial_species_18 = internal.species_18_init;
    internal.initial_species_19 = internal.species_19_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_20 = internal.species_20_init;
    internal.initial_species_21 = internal.species_21_init;
    internal.initial_species_22 = internal.species_22_init;
    internal.initial_species_23 = internal.species_23_init;
    internal.initial_species_24 = internal.species_24_init;
    internal.initial_species_25 = internal.species_25_init;
    internal.initial_species_26 = internal.species_26_init;
    internal.initial_species_27 = internal.species_27_init;
    internal.initial_species_28 = internal.species_28_init;
    internal.initial_species_29 = internal.species_29_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_30 = internal.species_30_init;
    internal.initial_species_31 = internal.species_31_init;
    internal.initial_species_32 = internal.species_32_init;
    internal.initial_species_33 = internal.species_33_init;
    internal.initial_species_34 = internal.species_34_init;
    internal.initial_species_35 = internal.species_35_init;
    internal.initial_species_4 = internal.species_4_init;
    internal.initial_species_5 = internal.species_5_init;
    internal.initial_species_6 = internal.species_6_init;
    internal.initial_species_7 = internal.species_7_init;
    internal.initial_species_8 = internal.species_8_init;
    internal.initial_species_9 = internal.species_9_init;
    internal.parameter_16 = internal.parameter_9 / internal.parameter_24;
    internal.parameter_27 = internal.parameter_9 / internal.parameter_24 * (1 - internal.parameter_25);
    internal.parameter_28 = internal.parameter_9 / internal.parameter_24 * internal.parameter_25;
    internal.parameter_29 = internal.parameter_9 / internal.parameter_24 * internal.parameter_26;
    internal.parameter_3 = internal.parameter_1 / internal.parameter_47;
    internal.parameter_39 = internal.parameter_38 / internal.parameter_30 / 8;
    internal.parameter_4 = internal.parameter_2 / internal.parameter_48;
    internal.parameter_40 = internal.parameter_38 / internal.parameter_31 / 8;
    internal.parameter_41 = internal.parameter_38 / internal.parameter_32 / 8;
    internal.parameter_42 = internal.parameter_38 / internal.parameter_33 / 8;
    internal.parameter_43 = internal.parameter_38 / internal.parameter_34 / 8;
    internal.parameter_44 = internal.parameter_38 / internal.parameter_35 / 8;
    internal.parameter_45 = internal.parameter_38 / internal.parameter_36 / 8;
    internal.parameter_46 = internal.parameter_38 / internal.parameter_37 / 8;
    internal.parameter_7 = (1 - internal.parameter_23) / internal.parameter_23 * internal.parameter_6;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_1 = state[0];
    const species_2 = state[1];
    const species_3 = state[2];
    const species_4 = state[3];
    const species_5 = state[4];
    const species_6 = state[5];
    const species_8 = state[7];
    const species_9 = state[8];
    const species_10 = state[9];
    const species_11 = state[10];
    const species_12 = state[11];
    const species_13 = state[12];
    const species_14 = state[13];
    const species_15 = state[14];
    const species_16 = state[15];
    const species_17 = state[16];
    const species_18 = state[17];
    const species_19 = state[18];
    const species_20 = state[19];
    const species_21 = state[20];
    const species_22 = state[21];
    const species_23 = state[22];
    const species_24 = state[23];
    const species_25 = state[24];
    const species_26 = state[25];
    const species_27 = state[26];
    const species_28 = state[27];
    const species_29 = state[28];
    const species_30 = state[29];
    const species_31 = state[30];
    const species_32 = state[31];
    const species_33 = state[32];
    const species_34 = state[33];
    dstatedt[35] = 0 + 0;
    dstatedt[36] = 0 + 0;
    dstatedt[37] = 0 + 0;
    dstatedt[38] = 0 + 0;
    dstatedt[9] = 0 + 1 * internal.compartment_1 * internal.parameter_11 * species_9 - 1 * internal.compartment_1 * internal.parameter_12 * species_10 * species_11 - 1 * internal.compartment_1 * internal.parameter_19 * species_10;
    dstatedt[10] = 0 - 1 * internal.compartment_1 * internal.parameter_12 * species_10 * species_11 - 1 * internal.compartment_1 * internal.parameter_12 * species_18 * species_11 + 1 * internal.compartment_1 * internal.parameter_17 * species_28 * species_29 * species_30 - 37 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[11] = 0 + 1 * internal.compartment_1 * internal.parameter_12 * species_10 * species_11 - 1 * internal.compartment_1 * (internal.parameter_13 * species_12 * species_13) - 1 * internal.compartment_1 * internal.parameter_22 * species_12;
    dstatedt[14] = 0 + 1 * internal.compartment_1 * (internal.parameter_14 * species_9 * species_14) - 1 * internal.compartment_1 * internal.parameter_15 * species_15 * species_31 - 1 * internal.compartment_1 * internal.parameter_20 * species_15;
    dstatedt[15] = 0 + 1 * internal.compartment_1 * internal.parameter_15 * species_15 * species_31 - 8 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH))) - 1 * internal.compartment_1 * internal.parameter_20 * species_16;
    dstatedt[16] = 0 + 1 * internal.compartment_1 * (internal.parameter_13 * species_12 * species_13) + 1 * internal.compartment_1 * internal.parameter_10 * species_17 - 1 * internal.compartment_1 * internal.parameter_10 * species_17 - 1 * internal.compartment_1 * internal.parameter_20 * species_17;
    dstatedt[17] = 0 + 1 * internal.compartment_1 * internal.parameter_10 * species_17 - 1 * internal.compartment_1 * internal.parameter_12 * species_18 * species_11 - 1 * internal.compartment_1 * internal.parameter_19 * species_18;
    dstatedt[18] = 0 + 1 * internal.compartment_1 * internal.parameter_12 * species_18 * species_11 - 1 * internal.compartment_1 * (internal.parameter_13 * species_19 * species_13) - 1 * internal.compartment_1 * internal.parameter_22 * species_19;
    dstatedt[34] = 0 + 1 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[6] = 0 + 1 * internal.compartment_1 * internal.parameter_6 * species_6;
    dstatedt[7] = 0 + 8 * internal.compartment_1 * internal.parameter_6 * species_6 - 1 * internal.compartment_1 * internal.parameter_8 * species_8;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * (internal.parameter_1 * species_3 * species_1 - internal.parameter_3 * species_2) + 1 * internal.compartment_1 * internal.parameter_5 * species_2;
    dstatedt[12] = 0 - 71 * internal.compartment_1 * (internal.parameter_13 * species_12 * species_13) - 71 * internal.compartment_1 * (internal.parameter_13 * species_19 * species_13) + 1 * internal.compartment_1 * internal.parameter_16 * species_24 - 433 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[13] = 0 - 8.5 * internal.compartment_1 * (internal.parameter_14 * species_9 * species_14) + 1 * internal.compartment_1 * internal.parameter_27 * species_26 - 2932 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.parameter_1 * species_3 * species_1 - internal.parameter_3 * species_2) - 1 * internal.compartment_1 * internal.parameter_5 * species_2;
    dstatedt[19] = 0 + 1 * internal.compartment_1 * internal.parameter_39 * species_9 + 1 * internal.compartment_1 * internal.parameter_16 * species_20 - 1 * internal.compartment_1 * internal.parameter_16 * species_20 - 1 * internal.compartment_1 * internal.parameter_21 * species_20;
    dstatedt[20] = 0 + 1 * internal.compartment_1 * internal.parameter_40 * species_9 + 1 * internal.compartment_1 * internal.parameter_16 * species_21 - 1 * internal.compartment_1 * internal.parameter_16 * species_21 - 1 * internal.compartment_1 * internal.parameter_21 * species_21;
    dstatedt[21] = 0 + 1 * internal.compartment_1 * internal.parameter_41 * species_9 + 1 * internal.compartment_1 * internal.parameter_16 * species_22 - 1 * internal.compartment_1 * internal.parameter_16 * species_22 - 1 * internal.compartment_1 * internal.parameter_21 * species_22;
    dstatedt[22] = 0 + 1 * internal.compartment_1 * internal.parameter_42 * species_9 + 1 * internal.compartment_1 * internal.parameter_16 * species_23 - 1 * internal.compartment_1 * internal.parameter_16 * species_23 - 1 * internal.compartment_1 * internal.parameter_21 * species_23;
    dstatedt[23] = 0 + 1 * internal.compartment_1 * internal.parameter_43 * species_9 + 1 * internal.compartment_1 * internal.parameter_16 * species_24 - 1 * internal.compartment_1 * internal.parameter_16 * species_24 - 1 * internal.compartment_1 * internal.parameter_21 * species_24;
    dstatedt[24] = 0 + 1 * internal.compartment_1 * internal.parameter_44 * species_9 + 1 * internal.compartment_1 * internal.parameter_16 * species_25 - 1 * internal.compartment_1 * internal.parameter_16 * species_25 - 1 * internal.compartment_1 * internal.parameter_21 * species_25;
    dstatedt[25] = 0 + 1 * internal.compartment_1 * internal.parameter_45 * species_9 + 1 * internal.compartment_1 * internal.parameter_27 * species_26 - 1 * internal.compartment_1 * internal.parameter_27 * species_26 + 1 * internal.compartment_1 * internal.parameter_28 * species_26 - 1 * internal.compartment_1 * internal.parameter_28 * species_26 - 1 * internal.compartment_1 * internal.parameter_21 * species_26;
    dstatedt[26] = 0 + 1 * internal.compartment_1 * internal.parameter_46 * species_9 + 1 * internal.compartment_1 * internal.parameter_29 * species_27 - 1 * internal.compartment_1 * internal.parameter_29 * species_27 - 1 * internal.compartment_1 * internal.parameter_21 * species_27;
    dstatedt[27] = 0 + 1 * internal.compartment_1 * internal.parameter_16 * species_21 - 1 * internal.compartment_1 * internal.parameter_17 * species_28 * species_29 * species_30;
    dstatedt[28] = 0 + 1 * internal.compartment_1 * internal.parameter_16 * species_20 - 1 * internal.compartment_1 * internal.parameter_17 * species_28 * species_29 * species_30;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * (internal.parameter_1 * species_3 * species_1 - internal.parameter_3 * species_2) - 1 * internal.compartment_1 * (internal.parameter_2 * species_3 * species_4 - internal.parameter_4 * species_5);
    dstatedt[29] = 0 + 1 * internal.compartment_1 * internal.parameter_16 * species_22 - 1 * internal.compartment_1 * internal.parameter_17 * species_28 * species_29 * species_30;
    dstatedt[30] = 0 - 1 * internal.compartment_1 * internal.parameter_15 * species_15 * species_31 + 1 * internal.compartment_1 * internal.parameter_29 * species_27 - 157 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[31] = 0 + 1 * internal.compartment_1 * internal.parameter_16 * species_23 - 500 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[32] = 0 + 1 * internal.compartment_1 * internal.parameter_16 * species_25 - 100 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[33] = 0 + 1 * internal.compartment_1 * internal.parameter_28 * species_26 - 40 * internal.compartment_1 * (internal.parameter_18 * species_16 * species_11 * species_32 * species_13 * species_33 * species_14 * species_34 * species_31 / ((species_11 + internal.KmB) * (species_32 + internal.KmC) * (species_13 + internal.KmD) * (species_33 + internal.KmE) * (species_14 + internal.KmF) * (species_34 + internal.KmG) * (species_31 + internal.KmH)));
    dstatedt[3] = 0 - 1 * internal.compartment_1 * (internal.parameter_2 * species_3 * species_4 - internal.parameter_4 * species_5) + 1 * internal.compartment_1 * internal.parameter_5 * species_5;
    dstatedt[4] = 0 + 1 * internal.compartment_1 * (internal.parameter_2 * species_3 * species_4 - internal.parameter_4 * species_5) - 1 * internal.compartment_1 * internal.parameter_5 * species_5;
    dstatedt[5] = 0 + 1 * internal.compartment_1 * internal.parameter_5 * species_2 + 1 * internal.compartment_1 * internal.parameter_5 * species_5 - 1 * internal.compartment_1 * internal.parameter_6 * species_6 - 1 * internal.compartment_1 * internal.parameter_7 * species_6;
    dstatedt[8] = 0 + 1 * internal.compartment_1 * internal.parameter_8 * species_8 + 1 * internal.compartment_1 * internal.parameter_11 * species_9 - 1 * internal.compartment_1 * internal.parameter_11 * species_9 - 1 * internal.compartment_1 * (internal.parameter_14 * species_9 * species_14) + 1 * internal.compartment_1 * (internal.parameter_13 * species_19 * species_13) + 1 * internal.compartment_1 * internal.parameter_39 * species_9 - 1 * internal.compartment_1 * internal.parameter_39 * species_9 + 1 * internal.compartment_1 * internal.parameter_40 * species_9 - 1 * internal.compartment_1 * internal.parameter_40 * species_9 + 1 * internal.compartment_1 * internal.parameter_41 * species_9 - 1 * internal.compartment_1 * internal.parameter_41 * species_9 + 1 * internal.compartment_1 * internal.parameter_42 * species_9 - 1 * internal.compartment_1 * internal.parameter_42 * species_9 + 1 * internal.compartment_1 * internal.parameter_43 * species_9 - 1 * internal.compartment_1 * internal.parameter_43 * species_9 + 1 * internal.compartment_1 * internal.parameter_44 * species_9 - 1 * internal.compartment_1 * internal.parameter_44 * species_9 + 1 * internal.compartment_1 * internal.parameter_45 * species_9 - 1 * internal.compartment_1 * internal.parameter_45 * species_9 + 1 * internal.compartment_1 * internal.parameter_46 * species_9 - 1 * internal.compartment_1 * internal.parameter_46 * species_9 - 1 * internal.compartment_1 * internal.parameter_20 * species_9;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15", "species_16", "species_17", "species_18", "species_19", "species_20", "species_21", "species_22", "species_23", "species_24", "species_25", "species_26", "species_27", "species_28", "species_29", "species_30", "species_31", "species_32", "species_33", "species_34", "species_35", "species_36", "species_37", "species_38", "species_39"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_18: null, initial_species_19: null, initial_species_2: null, initial_species_20: null, initial_species_21: null, initial_species_22: null, initial_species_23: null, initial_species_24: null, initial_species_25: null, initial_species_26: null, initial_species_27: null, initial_species_28: null, initial_species_29: null, initial_species_3: null, initial_species_30: null, initial_species_31: null, initial_species_32: null, initial_species_33: null, initial_species_34: null, initial_species_35: null, initial_species_36: null, initial_species_37: null, initial_species_38: null, initial_species_39: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, KmB: null, KmC: null, KmD: null, KmE: null, KmF: null, KmG: null, KmH: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_12: null, parameter_13: null, parameter_14: null, parameter_15: null, parameter_16: null, parameter_17: null, parameter_18: null, parameter_19: null, parameter_2: null, parameter_20: null, parameter_21: null, parameter_22: null, parameter_23: null, parameter_24: null, parameter_25: null, parameter_26: null, parameter_27: null, parameter_28: null, parameter_29: null, parameter_3: null, parameter_30: null, parameter_31: null, parameter_32: null, parameter_33: null, parameter_34: null, parameter_35: null, parameter_36: null, parameter_37: null, parameter_38: null, parameter_39: null, parameter_4: null, parameter_40: null, parameter_41: null, parameter_42: null, parameter_43: null, parameter_44: null, parameter_45: null, parameter_46: null, parameter_47: null, parameter_48: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_14_init: null, species_15_init: null, species_16_init: null, species_17_init: null, species_18_init: null, species_19_init: null, species_2_init: null, species_20_init: null, species_21_init: null, species_22_init: null, species_23_init: null, species_24_init: null, species_25_init: null, species_26_init: null, species_27_init: null, species_28_init: null, species_29_init: null, species_3_init: null, species_30_init: null, species_31_init: null, species_32_init: null, species_33_init: null, species_34_init: null, species_35_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null, species_16: null, species_17: null, species_18: null, species_19: null, species_20: null, species_21: null, species_22: null, species_23: null, species_24: null, species_25: null, species_26: null, species_27: null, species_28: null, species_29: null, species_30: null, species_31: null, species_32: null, species_33: null, species_34: null, species_35: null, species_36: null, species_37: null, species_38: null, species_39: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
