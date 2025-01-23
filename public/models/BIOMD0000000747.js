export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k37 = 3;
    internal.k41 = 3;
    internal.k43 = 3;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(33).fill(0);
    state[0] = internal.initial_IX;
    state[1] = internal.initial_TF_VIIa_IX;
    state[2] = internal.initial_TF_VIIa;
    state[3] = internal.initial_IXa;
    state[4] = internal.initial_TF_VIIa_X;
    state[5] = internal.initial_X;
    state[6] = internal.initial_Xa;
    state[7] = internal.initial_VIII;
    state[8] = internal.initial_Xa_VIII;
    state[9] = internal.initial_VIIIa;
    state[10] = internal.initial_IIa;
    state[11] = internal.initial_IIa_VIII;
    state[12] = internal.initial_VIIIa_IXa;
    state[13] = internal.initial_VIIIa_IXa_X;
    state[14] = internal.initial_V;
    state[15] = internal.initial_Xa_V;
    state[16] = internal.initial_Va;
    state[17] = internal.initial_IIa_V;
    state[18] = internal.initial_Va_Xa;
    state[19] = internal.initial_II;
    state[20] = internal.initial_Va_Xa_II;
    state[21] = internal.initial_Fibrinogen;
    state[22] = internal.initial_Fibrinogen_IIa;
    state[23] = internal.initial_Fibrin;
    state[24] = internal.initial_VIIIa_inact;
    state[25] = internal.initial_IXa_inact;
    state[26] = internal.initial_Xa_inact;
    state[27] = internal.initial_IIa_inact;
    state[28] = internal.initial_Xa_Xa_Inhibitor;
    state[29] = internal.initial_Xa_Inhibitor;
    state[30] = internal.initial_Va_Xa_Xa_Inhibitor;
    state[31] = internal.initial_IIa_IIa_Inhibitor;
    state[32] = internal.initial_IIa_Inhibitor;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Dummy_variable_inhibitor", "Fibrin_init", "Fibrinogen_IIa_init", "Fibrinogen_init", "II_init", "IIa_IIa_Inhibitor_init", "IIa_inact_init", "IIa_Inhibitor_init", "IIa_init", "IIa_V_init", "IIa_VIII_init", "IX_init", "IXa_inact_init", "IXa_init", "k01", "k02", "k03", "k04", "k05", "k06", "k07", "k08", "k09", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k20", "k21", "k22", "k23", "k24", "k25", "k26", "k27", "k28", "k29", "k30", "k31", "k32", "k33", "k34", "k35", "k36", "k38", "k39", "k40", "k42", "TF_VIIa_init", "TF_VIIa_IX_init", "TF_VIIa_X_init", "V_init", "Va_init", "Va_Xa_II_init", "Va_Xa_init", "Va_Xa_Xa_Inhibitor_init", "VIII_init", "VIIIa_inact_init", "VIIIa_init", "VIIIa_IXa_init", "VIIIa_IXa_X_init", "X_init", "Xa_inact_init", "Xa_Inhibitor_init", "Xa_init", "Xa_V_init", "Xa_VIII_init", "Xa_Xa_Inhibitor_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Dummy_variable_inhibitor", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fibrin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fibrinogen_IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fibrinogen_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_IIa_Inhibitor_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_inact_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_Inhibitor_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_V_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_VIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_inact_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IXa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k01", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k02", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k03", internal, 0.46999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k04", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k05", internal, 5.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k06", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k07", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k08", internal, 2.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k09", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.042999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 7.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k28", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k29", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k30", internal, 720, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 84, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k32", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k33", internal, 0.0016999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k34", internal, 0.010999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k35", internal, 0.024, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k36", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k38", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k39", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k40", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k42", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_IX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TF_VIIa_X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_Xa_II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Va_Xa_Xa_Inhibitor_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_inact_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_IXa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIIa_IXa_X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_inact_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_Inhibitor_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_V_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_VIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_Xa_Inhibitor_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Fibrin = internal.Fibrin_init;
    internal.initial_Fibrinogen = internal.Fibrinogen_init;
    internal.initial_Fibrinogen_IIa = internal.Fibrinogen_IIa_init;
    internal.initial_II = internal.II_init;
    internal.initial_IIa = internal.IIa_init;
    internal.initial_IIa_IIa_Inhibitor = internal.IIa_IIa_Inhibitor_init;
    internal.initial_IIa_inact = internal.IIa_inact_init;
    internal.initial_IIa_Inhibitor = internal.IIa_Inhibitor_init;
    internal.initial_IIa_V = internal.IIa_V_init;
    internal.initial_IIa_VIII = internal.IIa_VIII_init;
    internal.initial_IX = internal.IX_init;
    internal.initial_IXa = internal.IXa_init;
    internal.initial_IXa_inact = internal.IXa_inact_init;
    internal.initial_TF_VIIa = internal.TF_VIIa_init;
    internal.initial_TF_VIIa_IX = internal.TF_VIIa_IX_init;
    internal.initial_TF_VIIa_X = internal.TF_VIIa_X_init;
    internal.initial_V = internal.V_init;
    internal.initial_Va = internal.Va_init;
    internal.initial_Va_Xa = internal.Va_Xa_init;
    internal.initial_Va_Xa_II = internal.Va_Xa_II_init;
    internal.initial_Va_Xa_Xa_Inhibitor = internal.Va_Xa_Xa_Inhibitor_init;
    internal.initial_VIII = internal.VIII_init;
    internal.initial_VIIIa = internal.VIIIa_init;
    internal.initial_VIIIa_inact = internal.VIIIa_inact_init;
    internal.initial_VIIIa_IXa = internal.VIIIa_IXa_init;
    internal.initial_VIIIa_IXa_X = internal.VIIIa_IXa_X_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xa = internal.Xa_init;
    internal.initial_Xa_inact = internal.Xa_inact_init;
    internal.initial_Xa_Inhibitor = internal.Xa_Inhibitor_init;
    internal.initial_Xa_V = internal.Xa_V_init;
    internal.initial_Xa_VIII = internal.Xa_VIII_init;
    internal.initial_Xa_Xa_Inhibitor = internal.Xa_Xa_Inhibitor_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IX = state[0];
    const TF_VIIa_IX = state[1];
    const TF_VIIa = state[2];
    const IXa = state[3];
    const TF_VIIa_X = state[4];
    const X = state[5];
    const Xa = state[6];
    const VIII = state[7];
    const Xa_VIII = state[8];
    const VIIIa = state[9];
    const IIa = state[10];
    const IIa_VIII = state[11];
    const VIIIa_IXa = state[12];
    const VIIIa_IXa_X = state[13];
    const V = state[14];
    const Xa_V = state[15];
    const Va = state[16];
    const IIa_V = state[17];
    const Va_Xa = state[18];
    const II = state[19];
    const Va_Xa_II = state[20];
    const Fibrinogen = state[21];
    const Fibrinogen_IIa = state[22];
    const Xa_Xa_Inhibitor = state[28];
    const Xa_Inhibitor = state[29];
    const Va_Xa_Xa_Inhibitor = state[30];
    const IIa_IIa_Inhibitor = state[31];
    const IIa_Inhibitor = state[32];
    dstatedt[23] = 0 + 1 * internal.compartment * internal.k31 * Fibrinogen_IIa;
    dstatedt[21] = 0 - 1 * internal.compartment * (internal.k29 * Fibrinogen * IIa - internal.k30 * Fibrinogen_IIa);
    dstatedt[22] = 0 + 1 * internal.compartment * (internal.k29 * Fibrinogen * IIa - internal.k30 * Fibrinogen_IIa) - 1 * internal.compartment * internal.k31 * Fibrinogen_IIa;
    dstatedt[19] = 0 - 1 * internal.compartment * (internal.k26 * Va_Xa * II - internal.k27 * Va_Xa_II);
    dstatedt[10] = 0 - 1 * internal.compartment * (internal.k10 * IIa * VIII - internal.k11 * IIa_VIII) + 1 * internal.compartment * internal.k12 * IIa_VIII - 1 * internal.compartment * (internal.k21 * IIa * V - internal.k22 * IIa_V) + 1 * internal.compartment * internal.k23 * IIa_V + 1 * internal.compartment * internal.k28 * Va_Xa_II - 1 * internal.compartment * (internal.k29 * Fibrinogen * IIa - internal.k30 * Fibrinogen_IIa) + 1 * internal.compartment * internal.k31 * Fibrinogen_IIa - 1 * internal.compartment * internal.k35 * IIa - 1 * internal.compartment * (internal.k42 * IIa * IIa_Inhibitor - internal.k43 * IIa_IIa_Inhibitor);
    dstatedt[31] = 0 + 1 * internal.compartment * (internal.k42 * IIa * IIa_Inhibitor - internal.k43 * IIa_IIa_Inhibitor);
    dstatedt[27] = 0 + 1 * internal.compartment * internal.k35 * IIa;
    dstatedt[32] = 0 - 1 * internal.compartment * (internal.k42 * IIa * IIa_Inhibitor - internal.k43 * IIa_IIa_Inhibitor);
    dstatedt[17] = 0 + 1 * internal.compartment * (internal.k21 * IIa * V - internal.k22 * IIa_V) - 1 * internal.compartment * internal.k23 * IIa_V;
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.k10 * IIa * VIII - internal.k11 * IIa_VIII) - 1 * internal.compartment * internal.k12 * IIa_VIII;
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k01 * TF_VIIa * IX - internal.k02 * TF_VIIa_IX);
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k03 * TF_VIIa_IX - 1 * internal.compartment * (internal.k13 * VIIIa * IXa - internal.k14 * VIIIa_IXa) - 1 * internal.compartment * internal.k33 * IXa;
    dstatedt[25] = 0 + 1 * internal.compartment * internal.k33 * IXa;
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.k01 * TF_VIIa * IX - internal.k02 * TF_VIIa_IX) + 1 * internal.compartment * internal.k03 * TF_VIIa_IX - 1 * internal.compartment * (internal.k04 * TF_VIIa * X - internal.k05 * TF_VIIa_X) + 1 * internal.compartment * internal.k06 * TF_VIIa_X;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k01 * TF_VIIa * IX - internal.k02 * TF_VIIa_IX) - 1 * internal.compartment * internal.k03 * TF_VIIa_IX;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k04 * TF_VIIa * X - internal.k05 * TF_VIIa_X) - 1 * internal.compartment * internal.k06 * TF_VIIa_X;
    dstatedt[14] = 0 - 1 * internal.compartment * (internal.k18 * Xa * V - internal.k19 * Xa_V) - 1 * internal.compartment * (internal.k21 * IIa * V - internal.k22 * IIa_V);
    dstatedt[16] = 0 + 1 * internal.compartment * internal.k20 * Xa_V + 1 * internal.compartment * internal.k23 * IIa_V - 1 * internal.compartment * (internal.k24 * Xa * Va - internal.k25 * Va_Xa) - 1 * internal.compartment * (internal.k38 * Va * Xa_Xa_Inhibitor - internal.k39 * Va_Xa_Xa_Inhibitor);
    dstatedt[18] = 0 + 1 * internal.compartment * (internal.k24 * Xa * Va - internal.k25 * Va_Xa) - 1 * internal.compartment * (internal.k26 * Va_Xa * II - internal.k27 * Va_Xa_II) + 1 * internal.compartment * internal.k28 * Va_Xa_II - 1 * internal.compartment * (internal.k40 * Va_Xa * Xa_Inhibitor - internal.k41 * Va_Xa_Xa_Inhibitor);
    dstatedt[20] = 0 + 1 * internal.compartment * (internal.k26 * Va_Xa * II - internal.k27 * Va_Xa_II) - 1 * internal.compartment * internal.k28 * Va_Xa_II;
    dstatedt[30] = 0 + 1 * internal.compartment * (internal.k38 * Va * Xa_Xa_Inhibitor - internal.k39 * Va_Xa_Xa_Inhibitor) + 1 * internal.compartment * (internal.k40 * Va_Xa * Xa_Inhibitor - internal.k41 * Va_Xa_Xa_Inhibitor);
    dstatedt[7] = 0 - 1 * internal.compartment * (internal.k07 * Xa * VIII - internal.k08 * Xa_VIII) - 1 * internal.compartment * (internal.k10 * IIa * VIII - internal.k11 * IIa_VIII);
    dstatedt[9] = 0 + 1 * internal.compartment * internal.k09 * Xa_VIII + 1 * internal.compartment * internal.k12 * IIa_VIII - 1 * internal.compartment * (internal.k13 * VIIIa * IXa - internal.k14 * VIIIa_IXa) - 1 * internal.compartment * internal.k32 * VIIIa;
    dstatedt[24] = 0 + 1 * internal.compartment * internal.k32 * VIIIa;
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.k13 * VIIIa * IXa - internal.k14 * VIIIa_IXa) - 1 * internal.compartment * (internal.k15 * VIIIa_IXa * X - internal.k16 * VIIIa_IXa_X) + 1 * internal.compartment * internal.k17 * VIIIa_IXa_X;
    dstatedt[13] = 0 + 1 * internal.compartment * (internal.k15 * VIIIa_IXa * X - internal.k16 * VIIIa_IXa_X) - 1 * internal.compartment * internal.k17 * VIIIa_IXa_X;
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.k04 * TF_VIIa * X - internal.k05 * TF_VIIa_X) - 1 * internal.compartment * (internal.k15 * VIIIa_IXa * X - internal.k16 * VIIIa_IXa_X);
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k06 * TF_VIIa_X - 1 * internal.compartment * (internal.k07 * Xa * VIII - internal.k08 * Xa_VIII) + 1 * internal.compartment * internal.k09 * Xa_VIII + 1 * internal.compartment * internal.k17 * VIIIa_IXa_X - 1 * internal.compartment * (internal.k18 * Xa * V - internal.k19 * Xa_V) + 1 * internal.compartment * internal.k20 * Xa_V - 1 * internal.compartment * (internal.k24 * Xa * Va - internal.k25 * Va_Xa) - 1 * internal.compartment * internal.k34 * Xa - 1 * internal.compartment * (internal.k36 * Xa * Xa_Inhibitor - internal.k37 * Xa_Xa_Inhibitor);
    dstatedt[26] = 0 + 1 * internal.compartment * internal.k34 * Xa;
    dstatedt[29] = 0 - 1 * internal.compartment * (internal.k36 * Xa * Xa_Inhibitor - internal.k37 * Xa_Xa_Inhibitor) - 1 * internal.compartment * (internal.k40 * Va_Xa * Xa_Inhibitor - internal.k41 * Va_Xa_Xa_Inhibitor);
    dstatedt[15] = 0 + 1 * internal.compartment * (internal.k18 * Xa * V - internal.k19 * Xa_V) - 1 * internal.compartment * internal.k20 * Xa_V;
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k07 * Xa * VIII - internal.k08 * Xa_VIII) - 1 * internal.compartment * internal.k09 * Xa_VIII;
    dstatedt[28] = 0 + 1 * internal.compartment * (internal.k36 * Xa * Xa_Inhibitor - internal.k37 * Xa_Xa_Inhibitor) - 1 * internal.compartment * (internal.k38 * Va * Xa_Xa_Inhibitor - internal.k39 * Va_Xa_Xa_Inhibitor);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IX", "TF_VIIa_IX", "TF_VIIa", "IXa", "TF_VIIa_X", "X", "Xa", "VIII", "Xa_VIII", "VIIIa", "IIa", "IIa_VIII", "VIIIa_IXa", "VIIIa_IXa_X", "V", "Xa_V", "Va", "IIa_V", "Va_Xa", "II", "Va_Xa_II", "Fibrinogen", "Fibrinogen_IIa", "Fibrin", "VIIIa_inact", "IXa_inact", "Xa_inact", "IIa_inact", "Xa_Xa_Inhibitor", "Xa_Inhibitor", "Va_Xa_Xa_Inhibitor", "IIa_IIa_Inhibitor", "IIa_Inhibitor"];
    this.metadata.internalOrder = {compartment: null, Dummy_variable_inhibitor: null, Fibrin_init: null, Fibrinogen_IIa_init: null, Fibrinogen_init: null, II_init: null, IIa_IIa_Inhibitor_init: null, IIa_inact_init: null, IIa_Inhibitor_init: null, IIa_init: null, IIa_V_init: null, IIa_VIII_init: null, initial_Fibrin: null, initial_Fibrinogen: null, initial_Fibrinogen_IIa: null, initial_II: null, initial_IIa: null, initial_IIa_IIa_Inhibitor: null, initial_IIa_inact: null, initial_IIa_Inhibitor: null, initial_IIa_V: null, initial_IIa_VIII: null, initial_IX: null, initial_IXa: null, initial_IXa_inact: null, initial_TF_VIIa: null, initial_TF_VIIa_IX: null, initial_TF_VIIa_X: null, initial_V: null, initial_Va: null, initial_Va_Xa: null, initial_Va_Xa_II: null, initial_Va_Xa_Xa_Inhibitor: null, initial_VIII: null, initial_VIIIa: null, initial_VIIIa_inact: null, initial_VIIIa_IXa: null, initial_VIIIa_IXa_X: null, initial_X: null, initial_Xa: null, initial_Xa_inact: null, initial_Xa_Inhibitor: null, initial_Xa_V: null, initial_Xa_VIII: null, initial_Xa_Xa_Inhibitor: null, IX_init: null, IXa_inact_init: null, IXa_init: null, k01: null, k02: null, k03: null, k04: null, k05: null, k06: null, k07: null, k08: null, k09: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k20: null, k21: null, k22: null, k23: null, k24: null, k25: null, k26: null, k27: null, k28: null, k29: null, k30: null, k31: null, k32: null, k33: null, k34: null, k35: null, k36: null, k37: null, k38: null, k39: null, k40: null, k41: null, k42: null, k43: null, TF_VIIa_init: null, TF_VIIa_IX_init: null, TF_VIIa_X_init: null, V_init: null, Va_init: null, Va_Xa_II_init: null, Va_Xa_init: null, Va_Xa_Xa_Inhibitor_init: null, VIII_init: null, VIIIa_inact_init: null, VIIIa_init: null, VIIIa_IXa_init: null, VIIIa_IXa_X_init: null, X_init: null, Xa_inact_init: null, Xa_Inhibitor_init: null, Xa_init: null, Xa_V_init: null, Xa_VIII_init: null, Xa_Xa_Inhibitor_init: null};
    this.metadata.variableOrder = {IX: null, TF_VIIa_IX: null, TF_VIIa: null, IXa: null, TF_VIIa_X: null, X: null, Xa: null, VIII: null, Xa_VIII: null, VIIIa: null, IIa: null, IIa_VIII: null, VIIIa_IXa: null, VIIIa_IXa_X: null, V: null, Xa_V: null, Va: null, IIa_V: null, Va_Xa: null, II: null, Va_Xa_II: null, Fibrinogen: null, Fibrinogen_IIa: null, Fibrin: null, VIIIa_inact: null, IXa_inact: null, Xa_inact: null, IIa_inact: null, Xa_Xa_Inhibitor: null, Xa_Inhibitor: null, Va_Xa_Xa_Inhibitor: null, IIa_IIa_Inhibitor: null, IIa_Inhibitor: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}