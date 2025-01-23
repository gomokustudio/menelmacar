export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 0.20000000000000001;
    internal.k2 = 0.00024000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_p100t;
    state[1] = internal.initial_p100;
    state[2] = internal.initial_p52;
    state[3] = internal.initial_NIK;
    state[4] = internal.initial_p100_NIK;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["NIK_init", "p100_init", "p100_NIK_init", "p100t_init", "p52_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "NIK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100_NIK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p100t_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p52_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_NIK = internal.NIK_init;
    internal.initial_p100 = internal.p100_init;
    internal.initial_p100_NIK = internal.p100_NIK_init;
    internal.initial_p100t = internal.p100t_init;
    internal.initial_p52 = internal.p52_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p100t = state[0];
    const p100 = state[1];
    const p52 = state[2];
    const NIK = state[3];
    const p100_NIK = state[4];
    dstatedt[0] = 0;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k1 * p100_NIK - 1 * internal.compartment * (internal.k1 * p100 * NIK - internal.k2 * p100_NIK);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * p100t - 1 * internal.compartment * internal.k1 * p100 - 1 * internal.compartment * (internal.k1 * p100 * NIK - internal.k2 * p100_NIK);
    dstatedt[4] = 0 - 1 * internal.compartment * internal.k1 * p100_NIK + 1 * internal.compartment * (internal.k1 * p100 * NIK - internal.k2 * p100_NIK);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * p100_NIK - 1 * internal.compartment * internal.k1 * p52;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p100t", "p100", "p52", "NIK", "p100_NIK"];
    this.metadata.internalOrder = {compartment: null, initial_NIK: null, initial_p100: null, initial_p100_NIK: null, initial_p100t: null, initial_p52: null, k1: null, k2: null, NIK_init: null, p100_init: null, p100_NIK_init: null, p100t_init: null, p52_init: null};
    this.metadata.variableOrder = {p100t: null, p100: null, p52: null, NIK: null, p100_NIK: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}