export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.compartment_2 = 1;
    internal.k1 = 0.0081253699999999998;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var species_18_init = internal.initial_species_23;
    var species_42_init = internal.initial_species_23;
    internal.initial_species_18 = species_18_init;
    internal.initial_species_42 = species_42_init;
    var state = Array(28).fill(0);
    state[0] = internal.initial_species_20;
    state[1] = internal.initial_species_21;
    state[2] = internal.initial_species_15;
    state[3] = internal.initial_species_41;
    state[4] = internal.initial_species_28;
    state[5] = internal.initial_species_1;
    state[6] = internal.initial_species_5;
    state[7] = internal.initial_species_2;
    state[8] = internal.initial_species_11;
    state[9] = internal.initial_species_19;
    state[10] = internal.initial_species_7;
    state[11] = internal.initial_species_22;
    state[12] = internal.initial_species_17;
    state[13] = internal.initial_species_42;
    state[14] = internal.initial_species_3;
    state[15] = internal.initial_species_6;
    state[16] = internal.initial_species_9;
    state[17] = internal.initial_species_12;
    state[18] = internal.initial_species_10;
    state[19] = internal.initial_species_27;
    state[20] = internal.initial_species_4;
    state[21] = internal.initial_species_47;
    state[22] = internal.initial_species_8;
    state[23] = internal.initial_species_13;
    state[24] = internal.initial_species_14;
    state[25] = internal.initial_species_16;
    state[26] = internal.initial_species_18;
    state[27] = internal.initial_species_23;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_14_init", "species_15_init", "species_16_init", "species_17_init", "species_19_init", "species_2_init", "species_20_init", "species_21_init", "species_22_init", "species_23_init", "species_27_init", "species_28_init", "species_3_init", "species_4_init", "species_41_init", "species_47_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_19_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_22_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_23_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_27_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_28_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_41_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_47_init", internal, 0, -Infinity, Infinity, false);
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
    internal.initial_species_19 = internal.species_19_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_20 = internal.species_20_init;
    internal.initial_species_21 = internal.species_21_init;
    internal.initial_species_22 = internal.species_22_init;
    internal.initial_species_23 = internal.species_23_init;
    internal.initial_species_27 = internal.species_27_init;
    internal.initial_species_28 = internal.species_28_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_4 = internal.species_4_init;
    internal.initial_species_41 = internal.species_41_init;
    internal.initial_species_47 = internal.species_47_init;
    internal.initial_species_5 = internal.species_5_init;
    internal.initial_species_6 = internal.species_6_init;
    internal.initial_species_7 = internal.species_7_init;
    internal.initial_species_8 = internal.species_8_init;
    internal.initial_species_9 = internal.species_9_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_20 = state[0];
    const species_21 = state[1];
    const species_15 = state[2];
    const species_41 = state[3];
    const species_28 = state[4];
    const species_1 = state[5];
    const species_5 = state[6];
    const species_2 = state[7];
    const species_11 = state[8];
    const species_19 = state[9];
    const species_7 = state[10];
    const species_22 = state[11];
    const species_17 = state[12];
    const species_42 = state[13];
    const species_3 = state[14];
    const species_6 = state[15];
    const species_9 = state[16];
    const species_12 = state[17];
    const species_10 = state[18];
    const species_27 = state[19];
    const species_4 = state[20];
    const species_47 = state[21];
    const species_8 = state[22];
    const species_13 = state[23];
    const species_14 = state[24];
    const species_16 = state[25];
    const species_18 = state[26];
    dstatedt[27] = 0;
    dstatedt[4] = 0;
    dstatedt[3] = 0;
    dstatedt[5] = 0 + 1 * internal.compartment_2 * internal.k1 * species_19 - 1 * internal.compartment_2 * internal.k1 * species_1;
    dstatedt[18] = 0 + 1 * internal.compartment_2 * internal.k1 * species_9 * species_4 + 1 * internal.compartment_2 * internal.k1 * species_9 * species_3 - 1 * internal.compartment_2 * internal.k1 * species_10;
    dstatedt[8] = 0 - 1 * internal.compartment_2 * internal.k1 * species_11 * species_28 + 1 * internal.compartment_2 * internal.k1 * species_2 * species_6;
    dstatedt[17] = 0 - 1 * internal.compartment_2 * internal.k1 * species_12 + 1 * internal.compartment_2 * internal.k1 * species_9 * species_2;
    dstatedt[23] = 0 + 1 * internal.compartment_2 * internal.k1 * species_14 - 1 * internal.k1 * species_13 * species_21;
    dstatedt[24] = 0 + 1 * internal.compartment_2 * internal.k1 * species_3 * species_14 - 1 * internal.compartment_2 * internal.k1 * species_3 * species_14 - 1 * internal.compartment_2 * internal.k1 * species_14 + 1 * internal.k1 * species_13 * species_21;
    dstatedt[2] = 0 + 1 * internal.compartment_1 * internal.k1 * species_21 - 1 * internal.compartment_1 * internal.k1 * species_15;
    dstatedt[25] = 0 + 1 * internal.compartment_2 * internal.k1 * species_5 * species_16 - 1 * internal.compartment_2 * internal.k1 * species_5 * species_16 + 1 * internal.k1 * species_18 * species_21 - 1 * internal.compartment_2 * internal.k1 * species_16;
    dstatedt[12] = 0 + 1 * internal.compartment_2 * internal.k1 * species_47 * species_2 - 1 * internal.compartment_2 * internal.k1 * species_17 + 1 * internal.compartment_2 * internal.k1 * species_42 * species_17 - 1 * internal.compartment_2 * internal.k1 * species_42 * species_17 + 1 * internal.compartment_2 * internal.k1 * species_7 * species_17 - 1 * internal.compartment_2 * internal.k1 * species_7 * species_17;
    dstatedt[26] = 0 - 1 * internal.k1 * species_18 * species_21 + 1 * internal.compartment_2 * internal.k1 * species_16;
    dstatedt[9] = 0 + 1 * internal.compartment_2 * internal.k1 * species_42 * species_17 + 1 * internal.compartment_2 * internal.k1 * species_7 * species_17 - 1 * internal.compartment_2 * internal.k1 * species_19;
    dstatedt[7] = 0 + 1 * internal.compartment_2 * internal.k1 * species_47 * species_2 - 1 * internal.compartment_2 * internal.k1 * species_47 * species_2 + 1 * internal.compartment_2 * internal.k1 * species_11 * species_28 - 1 * internal.compartment_2 * internal.k1 * species_2 * species_6 + 1 * internal.compartment_2 * internal.k1 * species_9 * species_2 - 1 * internal.compartment_2 * internal.k1 * species_9 * species_2;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * internal.k1 * species_20 * species_41 + 1 * internal.compartment_1 * internal.k1 * species_15;
    dstatedt[1] = 0 + 1 * internal.k1 * species_42 * species_21 - 1 * internal.k1 * species_42 * species_21 + 1 * internal.compartment_1 * internal.k1 * species_20 * species_41 - 1 * internal.compartment_1 * internal.k1 * species_21 + 1 * internal.k1 * species_13 * species_21 - 1 * internal.k1 * species_13 * species_21 + 1 * internal.k1 * species_18 * species_21 - 1 * internal.k1 * species_18 * species_21;
    dstatedt[11] = 0 + 1 * internal.compartment_2 * internal.k1 * species_3 * species_22 - 1 * internal.compartment_2 * internal.k1 * species_3 * species_22 - 1 * internal.compartment_2 * internal.k1 * species_22 + 1 * internal.compartment_2 * internal.k1 * species_5 * species_16;
    dstatedt[19] = 0 - 1 * internal.compartment_2 * internal.k1 * species_27 * species_7 + 1 * internal.compartment_2 * internal.k1 * species_3;
    dstatedt[14] = 0 + 1 * internal.compartment_2 * internal.k1 * species_27 * species_7 - 1 * internal.compartment_2 * internal.k1 * species_3 * species_22 + 1 * internal.compartment_2 * internal.k1 * species_6 * species_3 - 1 * internal.compartment_2 * internal.k1 * species_6 * species_3 + 1 * internal.compartment_2 * internal.k1 * species_4 - 1 * internal.compartment_2 * internal.k1 * species_3 + 1 * internal.compartment_2 * internal.k1 * species_9 * species_3 - 1 * internal.compartment_2 * internal.k1 * species_9 * species_3 - 1 * internal.compartment_2 * internal.k1 * species_3 * species_14;
    dstatedt[20] = 0 + 1 * internal.compartment_2 * internal.k1 * species_3 * species_22 - 1 * internal.compartment_2 * internal.k1 * species_4 + 1 * internal.compartment_2 * internal.k1 * species_6 * species_4 - 1 * internal.compartment_2 * internal.k1 * species_6 * species_4 + 1 * internal.compartment_2 * internal.k1 * species_9 * species_4 - 1 * internal.compartment_2 * internal.k1 * species_9 * species_4 + 1 * internal.compartment_2 * internal.k1 * species_3 * species_14;
    dstatedt[13] = 0 - 1 * internal.compartment_2 * internal.k1 * species_42 * species_17 - 1 * internal.k1 * species_42 * species_21 + 1 * internal.compartment_2 * internal.k1 * species_7 + 1 * internal.compartment_2 * internal.k1 * species_1;
    dstatedt[21] = 0 - 1 * internal.compartment_2 * internal.k1 * species_47 * species_2 + 1 * internal.compartment_2 * internal.k1 * species_17;
    dstatedt[6] = 0 + 1 * internal.compartment_2 * internal.k1 * species_22 - 1 * internal.compartment_2 * internal.k1 * species_5 * species_16;
    dstatedt[15] = 0 + 1 * internal.compartment_2 * internal.k1 * species_8 - 1 * internal.compartment_2 * internal.k1 * species_6 * species_3 - 1 * internal.compartment_2 * internal.k1 * species_6 * species_4 + 1 * internal.compartment_2 * internal.k1 * species_2 * species_6 - 1 * internal.compartment_2 * internal.k1 * species_2 * species_6;
    dstatedt[10] = 0 + 1 * internal.k1 * species_42 * species_21 + 1 * internal.compartment_2 * internal.k1 * species_27 * species_7 - 1 * internal.compartment_2 * internal.k1 * species_27 * species_7 - 1 * internal.compartment_2 * internal.k1 * species_7 * species_17 - 1 * internal.compartment_2 * internal.k1 * species_7;
    dstatedt[22] = 0 - 1 * internal.compartment_2 * internal.k1 * species_8 + 1 * internal.compartment_2 * internal.k1 * species_6 * species_3 + 1 * internal.compartment_2 * internal.k1 * species_6 * species_4;
    dstatedt[16] = 0 - 1 * internal.compartment_2 * internal.k1 * species_9 * species_4 - 1 * internal.compartment_2 * internal.k1 * species_9 * species_3 + 1 * internal.compartment_2 * internal.k1 * species_10 + 1 * internal.compartment_2 * internal.k1 * species_12 - 1 * internal.compartment_2 * internal.k1 * species_9 * species_2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_20", "species_21", "species_15", "species_41", "species_28", "species_1", "species_5", "species_2", "species_11", "species_19", "species_7", "species_22", "species_17", "species_42", "species_3", "species_6", "species_9", "species_12", "species_10", "species_27", "species_4", "species_47", "species_8", "species_13", "species_14", "species_16", "species_18", "species_23"];
    this.metadata.internalOrder = {compartment_1: null, compartment_2: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_18: null, initial_species_19: null, initial_species_2: null, initial_species_20: null, initial_species_21: null, initial_species_22: null, initial_species_23: null, initial_species_27: null, initial_species_28: null, initial_species_3: null, initial_species_4: null, initial_species_41: null, initial_species_42: null, initial_species_47: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, k1: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_14_init: null, species_15_init: null, species_16_init: null, species_17_init: null, species_19_init: null, species_2_init: null, species_20_init: null, species_21_init: null, species_22_init: null, species_23_init: null, species_27_init: null, species_28_init: null, species_3_init: null, species_4_init: null, species_41_init: null, species_47_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null};
    this.metadata.variableOrder = {species_20: null, species_21: null, species_15: null, species_41: null, species_28: null, species_1: null, species_5: null, species_2: null, species_11: null, species_19: null, species_7: null, species_22: null, species_17: null, species_42: null, species_3: null, species_6: null, species_9: null, species_12: null, species_10: null, species_27: null, species_4: null, species_47: null, species_8: null, species_13: null, species_14: null, species_16: null, species_18: null, species_23: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
