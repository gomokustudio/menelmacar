export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1.7999999999999999e-11;
    internal.kcat = 10.800000000000001;
    internal.kcat_GAP = 10.6;
    internal.Km = 0.10000000000000001;
    internal.Km_GAP = 0.69999999999999996;
    internal.koff = 0.00040000000000000002;
    internal.kon = 0.29999999999999999;
    internal.kpermRanGDP = 0.12;
    internal.kpermRanGTP = 0.029999999999999999;
    internal.nucleus = 1.2000000000000001e-11;
    internal.r1 = 74;
    internal.r2 = 21;
    internal.r3 = 0.59999999999999998;
    internal.r4 = 55;
    internal.r5 = 100;
    internal.r6 = 19;
    internal.r7 = 11;
    internal.r8 = 55;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_RanGDP_nuc;
    state[1] = internal.initial_RCC1_RanGDP;
    state[2] = internal.initial_GDP;
    state[3] = internal.initial_RCC1;
    state[4] = internal.initial_RCC1_RanGTP;
    state[5] = internal.initial_RCC1_Ran;
    state[6] = internal.initial_GTP;
    state[7] = internal.initial_RanGTP_nuc;
    state[8] = internal.initial_RanGAP;
    state[9] = internal.initial_RanBP1;
    state[10] = internal.initial_RanGTP_cy;
    state[11] = internal.initial_RanGTP_RanBP1;
    state[12] = internal.initial_RanGDP_cy;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["GDP_init", "GTP_init", "RanBP1_init", "RanGAP_init", "RanGDP_cy_init", "RanGDP_nuc_init", "RanGTP_cy_init", "RanGTP_nuc_init", "RanGTP_RanBP1_init", "RCC1_init", "RCC1_Ran_init", "RCC1_RanGDP_init", "RCC1_RanGTP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "GDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanBP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanGAP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanGDP_cy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanGDP_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanGTP_cy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanGTP_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RanGTP_RanBP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RCC1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RCC1_Ran_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RCC1_RanGDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RCC1_RanGTP_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_GDP = internal.GDP_init;
    internal.initial_GTP = internal.GTP_init;
    internal.initial_RanBP1 = internal.RanBP1_init;
    internal.initial_RanGAP = internal.RanGAP_init;
    internal.initial_RanGDP_cy = internal.RanGDP_cy_init;
    internal.initial_RanGDP_nuc = internal.RanGDP_nuc_init;
    internal.initial_RanGTP_cy = internal.RanGTP_cy_init;
    internal.initial_RanGTP_nuc = internal.RanGTP_nuc_init;
    internal.initial_RanGTP_RanBP1 = internal.RanGTP_RanBP1_init;
    internal.initial_RCC1 = internal.RCC1_init;
    internal.initial_RCC1_Ran = internal.RCC1_Ran_init;
    internal.initial_RCC1_RanGDP = internal.RCC1_RanGDP_init;
    internal.initial_RCC1_RanGTP = internal.RCC1_RanGTP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RanGDP_nuc = state[0];
    const RCC1_RanGDP = state[1];
    const GDP = state[2];
    const RCC1 = state[3];
    const RCC1_RanGTP = state[4];
    const RCC1_Ran = state[5];
    const GTP = state[6];
    const RanGTP_nuc = state[7];
    const RanGAP = state[8];
    const RanBP1 = state[9];
    const RanGTP_cy = state[10];
    const RanGTP_RanBP1 = state[11];
    const RanGDP_cy = state[12];
    dstatedt[2] = 0;
    dstatedt[6] = 0;
    dstatedt[8] = 0;
    dstatedt[9] = 0 - 1 * (internal.kon * RanGTP_cy * RanBP1 - internal.koff * RanGTP_RanBP1) * internal.cytoplasm + 1 * internal.cytoplasm * internal.kcat * RanGTP_RanBP1 * RanGAP / (RanGTP_RanBP1 + internal.Km);
    dstatedt[12] = 0 + 1 * internal.kpermRanGDP * internal.nucleus * (RanGDP_nuc - RanGDP_cy) + 1 * internal.cytoplasm * internal.kcat * RanGTP_RanBP1 * RanGAP / (RanGTP_RanBP1 + internal.Km) + 1 * internal.cytoplasm * internal.kcat_GAP * RanGTP_cy * RanGAP / (internal.Km_GAP + RanGTP_cy);
    dstatedt[0] = 0 - 1 * internal.nucleus * (internal.r1 * RanGDP_nuc * RCC1 - internal.r8 * RCC1_RanGDP) - 1 * internal.kpermRanGDP * internal.nucleus * (RanGDP_nuc - RanGDP_cy);
    dstatedt[10] = 0 + 1 * internal.kpermRanGTP * internal.nucleus * (RanGTP_nuc - RanGTP_cy) - 1 * (internal.kon * RanGTP_cy * RanBP1 - internal.koff * RanGTP_RanBP1) * internal.cytoplasm - 1 * internal.cytoplasm * internal.kcat_GAP * RanGTP_cy * RanGAP / (internal.Km_GAP + RanGTP_cy);
    dstatedt[7] = 0 + 1 * internal.nucleus * (internal.r4 * RCC1_RanGTP - internal.r5 * RanGTP_nuc * RCC1) - 1 * internal.kpermRanGTP * internal.nucleus * (RanGTP_nuc - RanGTP_cy);
    dstatedt[11] = 0 + 1 * (internal.kon * RanGTP_cy * RanBP1 - internal.koff * RanGTP_RanBP1) * internal.cytoplasm - 1 * internal.cytoplasm * internal.kcat * RanGTP_RanBP1 * RanGAP / (RanGTP_RanBP1 + internal.Km);
    dstatedt[3] = 0 - 1 * internal.nucleus * (internal.r1 * RanGDP_nuc * RCC1 - internal.r8 * RCC1_RanGDP) + 1 * internal.nucleus * (internal.r4 * RCC1_RanGTP - internal.r5 * RanGTP_nuc * RCC1);
    dstatedt[5] = 0 + 1 * internal.nucleus * (internal.r2 * RCC1_RanGDP - internal.r7 * RCC1_Ran * GDP) - 1 * internal.nucleus * (internal.r3 * RCC1_Ran * GTP - internal.r6 * RCC1_RanGTP);
    dstatedt[1] = 0 + 1 * internal.nucleus * (internal.r1 * RanGDP_nuc * RCC1 - internal.r8 * RCC1_RanGDP) - 1 * internal.nucleus * (internal.r2 * RCC1_RanGDP - internal.r7 * RCC1_Ran * GDP);
    dstatedt[4] = 0 + 1 * internal.nucleus * (internal.r3 * RCC1_Ran * GTP - internal.r6 * RCC1_RanGTP) - 1 * internal.nucleus * (internal.r4 * RCC1_RanGTP - internal.r5 * RanGTP_nuc * RCC1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RanGDP_nuc", "RCC1_RanGDP", "GDP", "RCC1", "RCC1_RanGTP", "RCC1_Ran", "GTP", "RanGTP_nuc", "RanGAP", "RanBP1", "RanGTP_cy", "RanGTP_RanBP1", "RanGDP_cy"];
    this.metadata.internalOrder = {cytoplasm: null, GDP_init: null, GTP_init: null, initial_GDP: null, initial_GTP: null, initial_RanBP1: null, initial_RanGAP: null, initial_RanGDP_cy: null, initial_RanGDP_nuc: null, initial_RanGTP_cy: null, initial_RanGTP_nuc: null, initial_RanGTP_RanBP1: null, initial_RCC1: null, initial_RCC1_Ran: null, initial_RCC1_RanGDP: null, initial_RCC1_RanGTP: null, kcat: null, kcat_GAP: null, Km: null, Km_GAP: null, koff: null, kon: null, kpermRanGDP: null, kpermRanGTP: null, nucleus: null, r1: null, r2: null, r3: null, r4: null, r5: null, r6: null, r7: null, r8: null, RanBP1_init: null, RanGAP_init: null, RanGDP_cy_init: null, RanGDP_nuc_init: null, RanGTP_cy_init: null, RanGTP_nuc_init: null, RanGTP_RanBP1_init: null, RCC1_init: null, RCC1_Ran_init: null, RCC1_RanGDP_init: null, RCC1_RanGTP_init: null};
    this.metadata.variableOrder = {RanGDP_nuc: null, RCC1_RanGDP: null, GDP: null, RCC1: null, RCC1_RanGTP: null, RCC1_Ran: null, GTP: null, RanGTP_nuc: null, RanGAP: null, RanBP1: null, RanGTP_cy: null, RanGTP_RanBP1: null, RanGDP_cy: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
