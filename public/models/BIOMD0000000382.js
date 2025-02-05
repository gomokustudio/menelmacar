export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_z;
    state[3] = internal.initial_h1;
    state[4] = internal.initial_h2;
    state[5] = internal.initial_h3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["E", "h1_init", "h2_init", "h3_init", "I", "t1", "t2", "t3", "v1", "v2", "v3", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1_init", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2_init", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h3_init", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I", internal, 216, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t2", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t3", internal, 36, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 180, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 13000, -Infinity, Infinity, false);
    internal.initial_h1 = internal.h1_init;
    internal.initial_h2 = internal.h2_init;
    internal.initial_h3 = internal.h3_init;
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    internal.initial_z = internal.z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y = state[1];
    const z = state[2];
    const h1 = state[3];
    const h2 = state[4];
    const h3 = state[5];
    dstatedt[3] = 0 + 3 * (x - h1) / internal.t3;
    dstatedt[4] = 0 + 3 * (h1 - h2) / internal.t3;
    dstatedt[5] = 0 + 3 * (h2 - h3) / internal.t3;
    dstatedt[1] = 0 + internal.E * (x / internal.v1 - y / internal.v2) - y / internal.t2;
    var f1 = 209 / (1 + Math.exp(- z / (300 * internal.v3) + 6.5999999999999996));
    var f2 = 72 * (1 - Math.exp(- z / 144 * internal.v3));
    var f3 = 0.01 * z / internal.v3;
    var f4 = 90 / (1 + Math.exp(- 1.772 * Math.log(y * (1 / internal.v2 + 1 / (internal.E * internal.t2))) + 7.7599999999999998)) + 4;
    var f5 = 180 / (1 + Math.exp(0.28999999999999998 * h3 / internal.v1 - 7.5));
    dstatedt[0] = 0 + f1 - internal.E * (x / internal.v1 - y / internal.v2) - x / internal.t1;
    dstatedt[2] = 0 + f5 + internal.I - f2 - f3 * f4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z", "h1", "h2", "h3"];
    this.metadata.internalOrder = {compartment1: null, E: null, h1_init: null, h2_init: null, h3_init: null, I: null, initial_h1: null, initial_h2: null, initial_h3: null, initial_x: null, initial_y: null, initial_z: null, t1: null, t2: null, t3: null, v1: null, v2: null, v3: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null, h1: null, h2: null, h3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
