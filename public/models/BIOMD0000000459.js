export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_IPTG;
    state[1] = internal.initial_sigb;
    state[2] = internal.initial_lacz;
    state[3] = internal.initial_x;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["IPTG_init", "kbd", "kbs", "kxd", "kxs", "kzd", "kzs", "kzx", "lacz_init", "sigb_init", "x_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "IPTG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbd", internal, 0.016481200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbs", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxd", internal, 1.08559e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxs", internal, 9.3251700000000004e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kzd", internal, 1.3461499999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kzs", internal, 9.03538e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kzx", internal, 0.0031777200000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lacz_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IPTG = internal.IPTG_init;
    internal.initial_lacz = internal.lacz_init;
    internal.initial_sigb = internal.sigb_init;
    internal.initial_x = internal.x_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IPTG = state[0];
    const sigb = state[1];
    const lacz = state[2];
    const x = state[3];
    dstatedt[0] = 0;
    dstatedt[2] = 0 + 1 * internal.kzs * sigb - lacz * (internal.kzd + internal.kzx * x);
    dstatedt[1] = 0 + 1 * IPTG * internal.kbs - internal.kbd * sigb - 1 * internal.kzs * sigb - lacz * (internal.kzd + internal.kzx * x) - 1 * internal.kxs * sigb - internal.kxd * x;
    dstatedt[3] = 0 + 1 * internal.kxs * sigb - internal.kxd * x;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IPTG", "sigb", "lacz", "x"];
    this.metadata.internalOrder = {compartment: null, initial_IPTG: null, initial_lacz: null, initial_sigb: null, initial_x: null, IPTG_init: null, kbd: null, kbs: null, kxd: null, kxs: null, kzd: null, kzs: null, kzx: null, lacz_init: null, sigb_init: null, x_init: null};
    this.metadata.variableOrder = {IPTG: null, sigb: null, lacz: null, x: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
