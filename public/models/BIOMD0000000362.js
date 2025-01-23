export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(34).fill(0);
    state[0] = internal.initial_TF;
    state[1] = internal.initial_TF_VII;
    state[2] = internal.initial_VII;
    state[3] = internal.initial_TF_VIIa;
    state[4] = internal.initial_VIIa;
    state[5] = internal.initial_Xa;
    state[6] = internal.initial_IIa;
    state[7] = internal.initial_TF_VIIa_X;
    state[8] = internal.initial_X;
    state[9] = internal.initial_TF_VIIa_Xa;
    state[10] = internal.initial_IX;
    state[11] = internal.initial_TF_VIIa_IX;
    state[12] = internal.initial_IXa;
    state[13] = internal.initial_II;
    state[14] = internal.initial_VIII;
    state[15] = internal.initial_VIIIa;
    state[16] = internal.initial_IXa_VIIIa;
    state[17] = internal.initial_IXa_VIIIa_X;
    state[18] = internal.initial_VIIIa1_L;
    state[19] = internal.initial_VIIIa2;
    state[20] = internal.initial_V;
    state[21] = internal.initial_Va;
    state[22] = internal.initial_Xa_Va;
    state[23] = internal.initial_Xa_Va_II;
    state[24] = internal.initial_mIIa;
    state[25] = internal.initial_TFPI;
    state[26] = internal.initial_Xa_TFPI;
    state[27] = internal.initial_TF_VIIa_Xa_TFPI;
    state[28] = internal.initial_ATIII;
    state[29] = internal.initial_Xa_ATIII;
    state[30] = internal.initial_mIIa_ATIII;
    state[31] = internal.initial_IXa_ATIII;
    state[32] = internal.initial_IIa_ATIII;
    state[33] = internal.initial_TF_VIIa_ATIII;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ATIII_init", "II_init", "IIa_ATIII_init", "IIa_init", "IX_init", "IXa_ATIII_init", "IXa_init", "IXa_VIIIa_init", "IXa_VIIIa_X_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k2", "k20", "k21", "k22", "k23", "k24", "k25", "k26", "k27", "k28", "k29", "k3", "k30", "k31", "k32", "k33", "k34", "k35", "k36", "k37", "k38", "k39", "k4", "k40", "k41", "k42", "k43", "k44", "k5", "k6", "k7", "k8", "k9", "mIIa_ATIII_init", "mIIa_init", "TF_init", "TF_VII_init", "TF_VIIa_ATIII_init", "TF_VIIa_init", "TF_VIIa_IX_init", "TF_VIIa_X_init", "TF_VIIa_Xa_init", "TF_VIIa_Xa_TFPI_init", "TFPI_init", "V_init", "Va_init", "VII_init", "VIIa_init", "VIII_init", "VIIIa_init", "VIIIa1_L_init", "VIIIa2_init", "X_init", "Xa_ATIII_init", "Xa_init", "Xa_TFPI_init", "Xa_Va_II_init", "Xa_Va_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_VIIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_VIIIa_X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0030999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 22000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 7500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 3200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 8.1999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 22000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k28", internal, 400000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k29", internal, 103, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0030999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k30", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 63.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k32", internal, 15000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k33", internal, 0.00036000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k34", internal, 900000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k35", internal, 0.00011, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k36", internal, 320000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k37", internal, 50000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k38", internal, 1500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k39", internal, 7100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 23000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k40", internal, 490, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k41", internal, 7100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k42", internal, 230, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k43", internal, 5700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k44", internal, 3000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 440000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 13000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 23000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 1.05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 25000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mIIa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_IX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_Xa_TFPI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TFPI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa1_L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_ATIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_TFPI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_Va_II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_Va_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ATIII = internal.ATIII_init;
    internal.initial_II = internal.II_init;
    internal.initial_IIa = internal.IIa_init;
    internal.initial_IIa_ATIII = internal.IIa_ATIII_init;
    internal.initial_IX = internal.IX_init;
    internal.initial_IXa = internal.IXa_init;
    internal.initial_IXa_ATIII = internal.IXa_ATIII_init;
    internal.initial_IXa_VIIIa = internal.IXa_VIIIa_init;
    internal.initial_IXa_VIIIa_X = internal.IXa_VIIIa_X_init;
    internal.initial_mIIa = internal.mIIa_init;
    internal.initial_mIIa_ATIII = internal.mIIa_ATIII_init;
    internal.initial_TF = internal.TF_init;
    internal.initial_TF_VII = internal.TF_VII_init;
    internal.initial_TF_VIIa = internal.TF_VIIa_init;
    internal.initial_TF_VIIa_ATIII = internal.TF_VIIa_ATIII_init;
    internal.initial_TF_VIIa_IX = internal.TF_VIIa_IX_init;
    internal.initial_TF_VIIa_X = internal.TF_VIIa_X_init;
    internal.initial_TF_VIIa_Xa = internal.TF_VIIa_Xa_init;
    internal.initial_TF_VIIa_Xa_TFPI = internal.TF_VIIa_Xa_TFPI_init;
    internal.initial_TFPI = internal.TFPI_init;
    internal.initial_V = internal.V_init;
    internal.initial_Va = internal.Va_init;
    internal.initial_VII = internal.VII_init;
    internal.initial_VIIa = internal.VIIa_init;
    internal.initial_VIII = internal.VIII_init;
    internal.initial_VIIIa = internal.VIIIa_init;
    internal.initial_VIIIa1_L = internal.VIIIa1_L_init;
    internal.initial_VIIIa2 = internal.VIIIa2_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xa = internal.Xa_init;
    internal.initial_Xa_ATIII = internal.Xa_ATIII_init;
    internal.initial_Xa_TFPI = internal.Xa_TFPI_init;
    internal.initial_Xa_Va = internal.Xa_Va_init;
    internal.initial_Xa_Va_II = internal.Xa_Va_II_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TF = state[0];
    const TF_VII = state[1];
    const VII = state[2];
    const TF_VIIa = state[3];
    const VIIa = state[4];
    const Xa = state[5];
    const IIa = state[6];
    const TF_VIIa_X = state[7];
    const X = state[8];
    const TF_VIIa_Xa = state[9];
    const IX = state[10];
    const TF_VIIa_IX = state[11];
    const IXa = state[12];
    const II = state[13];
    const VIII = state[14];
    const VIIIa = state[15];
    const IXa_VIIIa = state[16];
    const IXa_VIIIa_X = state[17];
    const VIIIa1_L = state[18];
    const VIIIa2 = state[19];
    const V = state[20];
    const Va = state[21];
    const Xa_Va = state[22];
    const Xa_Va_II = state[23];
    const mIIa = state[24];
    const TFPI = state[25];
    const Xa_TFPI = state[26];
    const TF_VIIa_Xa_TFPI = state[27];
    const ATIII = state[28];
    dstatedt[28] = 0 - 1 * internal.compartment_1 * internal.k38 * Xa * ATIII - 1 * internal.compartment_1 * internal.k39 * mIIa * ATIII - 1 * internal.compartment_1 * internal.k40 * IXa * ATIII - 1 * internal.compartment_1 * internal.k41 * IIa * ATIII - 1 * internal.compartment_1 * internal.k42 * TF_VIIa * ATIII;
    dstatedt[13] = 0 - 1 * internal.compartment_1 * internal.k16 * Xa * II - 1 * internal.compartment_1 * (internal.k30 * Xa_Va * II - internal.k29 * Xa_Va_II);
    dstatedt[6] = 0 + 1 * internal.compartment_1 * internal.k7 * IIa * VII - 1 * internal.compartment_1 * internal.k7 * IIa * VII + 1 * internal.compartment_1 * internal.k16 * Xa * II + 1 * internal.compartment_1 * internal.k17 * IIa * VIII - 1 * internal.compartment_1 * internal.k17 * IIa * VIII + 1 * internal.compartment_1 * internal.k26 * IIa * V - 1 * internal.compartment_1 * internal.k26 * IIa * V + 1 * internal.compartment_1 * internal.k32 * mIIa * Xa_Va - 1 * internal.compartment_1 * internal.k41 * IIa * ATIII;
    dstatedt[32] = 0 + 1 * internal.compartment_1 * internal.k41 * IIa * ATIII;
    dstatedt[10] = 0 - 1 * internal.compartment_1 * (internal.k14 * TF_VIIa * IX - internal.k13 * TF_VIIa_IX);
    dstatedt[12] = 0 - 1 * internal.compartment_1 * (internal.k19 * IXa * VIIIa - internal.k18 * IXa_VIIIa) + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa_X + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa - 1 * internal.compartment_1 * internal.k40 * IXa * ATIII + 1 * internal.compartment_1 * internal.k15 * TF_VIIa_IX + 1 * internal.compartment_1 * internal.k43 * IXa * X - 1 * internal.compartment_1 * internal.k43 * IXa * X;
    dstatedt[31] = 0 + 1 * internal.compartment_1 * internal.k40 * IXa * ATIII;
    dstatedt[16] = 0 + 1 * internal.compartment_1 * (internal.k19 * IXa * VIIIa - internal.k18 * IXa_VIIIa) - 1 * internal.compartment_1 * (internal.k21 * IXa_VIIIa * X - internal.k20 * IXa_VIIIa_X) - 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa + 1 * internal.compartment_1 * internal.k22 * IXa_VIIIa_X;
    dstatedt[17] = 0 + 1 * internal.compartment_1 * (internal.k21 * IXa_VIIIa * X - internal.k20 * IXa_VIIIa_X) - 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa_X - 1 * internal.compartment_1 * internal.k22 * IXa_VIIIa_X;
    dstatedt[24] = 0 - 1 * internal.compartment_1 * internal.k32 * mIIa * Xa_Va - 1 * internal.compartment_1 * internal.k39 * mIIa * ATIII + 1 * internal.compartment_1 * internal.k31 * Xa_Va_II + 1 * internal.compartment_1 * internal.k44 * mIIa * V - 1 * internal.compartment_1 * internal.k44 * mIIa * V;
    dstatedt[30] = 0 + 1 * internal.compartment_1 * internal.k39 * mIIa * ATIII;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * (internal.k2 * TF * VII - internal.k1 * TF_VII) - 1 * internal.compartment_1 * (internal.k4 * TF * VIIa - internal.k3 * TF_VIIa);
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.k2 * TF * VII - internal.k1 * TF_VII);
    dstatedt[3] = 0 + 1 * internal.compartment_1 * (internal.k4 * TF * VIIa - internal.k3 * TF_VIIa) + 1 * internal.compartment_1 * internal.k5 * TF_VIIa * VII - 1 * internal.compartment_1 * internal.k5 * TF_VIIa * VII - 1 * internal.compartment_1 * (internal.k9 * TF_VIIa * X - internal.k8 * TF_VIIa_X) - 1 * internal.compartment_1 * (internal.k12 * TF_VIIa * Xa - internal.k11 * TF_VIIa_Xa) - 1 * internal.compartment_1 * (internal.k14 * TF_VIIa * IX - internal.k13 * TF_VIIa_IX) - 1 * internal.compartment_1 * internal.k37 * TF_VIIa * Xa_TFPI - 1 * internal.compartment_1 * internal.k42 * TF_VIIa * ATIII + 1 * internal.compartment_1 * internal.k15 * TF_VIIa_IX;
    dstatedt[33] = 0 + 1 * internal.compartment_1 * internal.k42 * TF_VIIa * ATIII;
    dstatedt[11] = 0 + 1 * internal.compartment_1 * (internal.k14 * TF_VIIa * IX - internal.k13 * TF_VIIa_IX) - 1 * internal.compartment_1 * internal.k15 * TF_VIIa_IX;
    dstatedt[7] = 0 + 1 * internal.compartment_1 * (internal.k9 * TF_VIIa * X - internal.k8 * TF_VIIa_X) - 1 * internal.compartment_1 * internal.k10 * TF_VIIa_X;
    dstatedt[9] = 0 + 1 * internal.compartment_1 * (internal.k12 * TF_VIIa * Xa - internal.k11 * TF_VIIa_Xa) - 1 * internal.compartment_1 * (internal.k36 * TF_VIIa_Xa * TFPI - internal.k35 * TF_VIIa_Xa_TFPI) + 1 * internal.compartment_1 * internal.k10 * TF_VIIa_X;
    dstatedt[27] = 0 + 1 * internal.compartment_1 * (internal.k36 * TF_VIIa_Xa * TFPI - internal.k35 * TF_VIIa_Xa_TFPI) + 1 * internal.compartment_1 * internal.k37 * TF_VIIa * Xa_TFPI;
    dstatedt[25] = 0 - 1 * internal.compartment_1 * (internal.k34 * Xa * TFPI - internal.k33 * Xa_TFPI) - 1 * internal.compartment_1 * (internal.k36 * TF_VIIa_Xa * TFPI - internal.k35 * TF_VIIa_Xa_TFPI);
    dstatedt[20] = 0 - 1 * internal.compartment_1 * internal.k26 * IIa * V - 1 * internal.compartment_1 * internal.k44 * mIIa * V;
    dstatedt[21] = 0 + 1 * internal.compartment_1 * internal.k26 * IIa * V - 1 * internal.compartment_1 * (internal.k28 * Xa * Va - internal.k27 * Xa_Va) + 1 * internal.compartment_1 * internal.k44 * mIIa * V;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * (internal.k2 * TF * VII - internal.k1 * TF_VII) - 1 * internal.compartment_1 * internal.k5 * TF_VIIa * VII - 1 * internal.compartment_1 * internal.k6 * Xa * VII - 1 * internal.compartment_1 * internal.k7 * IIa * VII;
    dstatedt[4] = 0 - 1 * internal.compartment_1 * (internal.k4 * TF * VIIa - internal.k3 * TF_VIIa) + 1 * internal.compartment_1 * internal.k5 * TF_VIIa * VII + 1 * internal.compartment_1 * internal.k6 * Xa * VII + 1 * internal.compartment_1 * internal.k7 * IIa * VII;
    dstatedt[14] = 0 - 1 * internal.compartment_1 * internal.k17 * IIa * VIII;
    dstatedt[15] = 0 + 1 * internal.compartment_1 * internal.k17 * IIa * VIII - 1 * internal.compartment_1 * (internal.k19 * IXa * VIIIa - internal.k18 * IXa_VIIIa) - 1 * internal.compartment_1 * (internal.k24 * VIIIa - internal.k23 * VIIIa1_L * VIIIa2);
    dstatedt[18] = 0 + 1 * internal.compartment_1 * (internal.k24 * VIIIa - internal.k23 * VIIIa1_L * VIIIa2) + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa_X + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa;
    dstatedt[19] = 0 + 1 * internal.compartment_1 * (internal.k24 * VIIIa - internal.k23 * VIIIa1_L * VIIIa2) + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa_X + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa;
    dstatedt[8] = 0 - 1 * internal.compartment_1 * (internal.k9 * TF_VIIa * X - internal.k8 * TF_VIIa_X) - 1 * internal.compartment_1 * (internal.k21 * IXa_VIIIa * X - internal.k20 * IXa_VIIIa_X) + 1 * internal.compartment_1 * internal.k25 * IXa_VIIIa_X - 1 * internal.compartment_1 * internal.k43 * IXa * X;
    dstatedt[5] = 0 + 1 * internal.compartment_1 * internal.k6 * Xa * VII - 1 * internal.compartment_1 * internal.k6 * Xa * VII - 1 * internal.compartment_1 * (internal.k12 * TF_VIIa * Xa - internal.k11 * TF_VIIa_Xa) + 1 * internal.compartment_1 * internal.k16 * Xa * II - 1 * internal.compartment_1 * internal.k16 * Xa * II - 1 * internal.compartment_1 * (internal.k28 * Xa * Va - internal.k27 * Xa_Va) - 1 * internal.compartment_1 * (internal.k34 * Xa * TFPI - internal.k33 * Xa_TFPI) - 1 * internal.compartment_1 * internal.k38 * Xa * ATIII + 1 * internal.compartment_1 * internal.k22 * IXa_VIIIa_X + 1 * internal.compartment_1 * internal.k43 * IXa * X;
    dstatedt[29] = 0 + 1 * internal.compartment_1 * internal.k38 * Xa * ATIII;
    dstatedt[26] = 0 + 1 * internal.compartment_1 * (internal.k34 * Xa * TFPI - internal.k33 * Xa_TFPI) - 1 * internal.compartment_1 * internal.k37 * TF_VIIa * Xa_TFPI;
    dstatedt[22] = 0 + 1 * internal.compartment_1 * (internal.k28 * Xa * Va - internal.k27 * Xa_Va) - 1 * internal.compartment_1 * (internal.k30 * Xa_Va * II - internal.k29 * Xa_Va_II) + 1 * internal.compartment_1 * internal.k32 * mIIa * Xa_Va - 1 * internal.compartment_1 * internal.k32 * mIIa * Xa_Va + 1 * internal.compartment_1 * internal.k31 * Xa_Va_II;
    dstatedt[23] = 0 + 1 * internal.compartment_1 * (internal.k30 * Xa_Va * II - internal.k29 * Xa_Va_II) - 1 * internal.compartment_1 * internal.k31 * Xa_Va_II;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TF", "TF_VII", "VII", "TF_VIIa", "VIIa", "Xa", "IIa", "TF_VIIa_X", "X", "TF_VIIa_Xa", "IX", "TF_VIIa_IX", "IXa", "II", "VIII", "VIIIa", "IXa_VIIIa", "IXa_VIIIa_X", "VIIIa1_L", "VIIIa2", "V", "Va", "Xa_Va", "Xa_Va_II", "mIIa", "TFPI", "Xa_TFPI", "TF_VIIa_Xa_TFPI", "ATIII", "Xa_ATIII", "mIIa_ATIII", "IXa_ATIII", "IIa_ATIII", "TF_VIIa_ATIII"];
    this.metadata.internalOrder = {ATIII_init: null, compartment_1: null, II_init: null, IIa_ATIII_init: null, IIa_init: null, initial_ATIII: null, initial_II: null, initial_IIa: null, initial_IIa_ATIII: null, initial_IX: null, initial_IXa: null, initial_IXa_ATIII: null, initial_IXa_VIIIa: null, initial_IXa_VIIIa_X: null, initial_mIIa: null, initial_mIIa_ATIII: null, initial_TF: null, initial_TF_VII: null, initial_TF_VIIa: null, initial_TF_VIIa_ATIII: null, initial_TF_VIIa_IX: null, initial_TF_VIIa_X: null, initial_TF_VIIa_Xa: null, initial_TF_VIIa_Xa_TFPI: null, initial_TFPI: null, initial_V: null, initial_Va: null, initial_VII: null, initial_VIIa: null, initial_VIII: null, initial_VIIIa: null, initial_VIIIa1_L: null, initial_VIIIa2: null, initial_X: null, initial_Xa: null, initial_Xa_ATIII: null, initial_Xa_TFPI: null, initial_Xa_Va: null, initial_Xa_Va_II: null, IX_init: null, IXa_ATIII_init: null, IXa_init: null, IXa_VIIIa_init: null, IXa_VIIIa_X_init: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k2: null, k20: null, k21: null, k22: null, k23: null, k24: null, k25: null, k26: null, k27: null, k28: null, k29: null, k3: null, k30: null, k31: null, k32: null, k33: null, k34: null, k35: null, k36: null, k37: null, k38: null, k39: null, k4: null, k40: null, k41: null, k42: null, k43: null, k44: null, k5: null, k6: null, k7: null, k8: null, k9: null, mIIa_ATIII_init: null, mIIa_init: null, TF_init: null, TF_VII_init: null, TF_VIIa_ATIII_init: null, TF_VIIa_init: null, TF_VIIa_IX_init: null, TF_VIIa_X_init: null, TF_VIIa_Xa_init: null, TF_VIIa_Xa_TFPI_init: null, TFPI_init: null, V_init: null, Va_init: null, VII_init: null, VIIa_init: null, VIII_init: null, VIIIa_init: null, VIIIa1_L_init: null, VIIIa2_init: null, X_init: null, Xa_ATIII_init: null, Xa_init: null, Xa_TFPI_init: null, Xa_Va_II_init: null, Xa_Va_init: null};
    this.metadata.variableOrder = {TF: null, TF_VII: null, VII: null, TF_VIIa: null, VIIa: null, Xa: null, IIa: null, TF_VIIa_X: null, X: null, TF_VIIa_Xa: null, IX: null, TF_VIIa_IX: null, IXa: null, II: null, VIII: null, VIIIa: null, IXa_VIIIa: null, IXa_VIIIa_X: null, VIIIa1_L: null, VIIIa2: null, V: null, Va: null, Xa_Va: null, Xa_Va_II: null, mIIa: null, TFPI: null, Xa_TFPI: null, TF_VIIa_Xa_TFPI: null, ATIII: null, Xa_ATIII: null, mIIa_ATIII: null, IXa_ATIII: null, IIa_ATIII: null, TF_VIIa_ATIII: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}