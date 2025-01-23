export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Wuhan = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Susceptible_init = internal.initial_Total_population - internal.initial_Exposed - internal.initial_Infected - internal.initial_Recovered;
    internal.initial_Susceptible = Susceptible_init;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected;
    state[3] = internal.initial_Recovered;
    state[4] = internal.initial_Total_population;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta_o", "Exposed_init", "gamma", "Infected_init", "kxk", "omega", "Recovered_init", "Total_population_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta_o", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.097560999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.14285700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_population_init", internal, 10000000, -Infinity, Infinity, false);
    internal.beta = internal.kxk * internal.beta_o;
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Infected = internal.Infected_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Total_population = internal.Total_population_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Exposed = state[1];
    const Infected = state[2];
    const Total_population = state[4];
    dstatedt[4] = 0;
    dstatedt[2] = 0 + 1 * internal.Wuhan * internal.omega * Exposed - 1 * internal.Wuhan * internal.gamma * Infected;
    dstatedt[3] = 0 + 1 * internal.Wuhan * internal.gamma * Infected;
    dstatedt[1] = 0 + 1 * internal.Wuhan * (internal.beta * Susceptible * Infected / Total_population) - 1 * internal.Wuhan * internal.omega * Exposed;
    dstatedt[0] = 0 - 1 * internal.Wuhan * (internal.beta * Susceptible * Infected / Total_population);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected", "Recovered", "Total_population"];
    this.metadata.internalOrder = {beta: null, beta_o: null, Exposed_init: null, gamma: null, Infected_init: null, initial_Exposed: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, initial_Total_population: null, kxk: null, omega: null, Recovered_init: null, Total_population_init: null, Wuhan: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected: null, Recovered: null, Total_population: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
