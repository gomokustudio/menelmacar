export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    internal.delta = 3.8999999999999999 / 53.200000000000003;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_Vm;
    state[1] = internal.initial_n;
    state[2] = internal.initial_G6P;
    state[3] = internal.initial_FBP;
    state[4] = internal.initial_NADHm;
    state[5] = internal.initial_delta_psi;
    state[6] = internal.initial_Cam;
    state[7] = internal.initial_ADPm;
    state[8] = internal.initial_adp;
    state[9] = internal.initial_c;
    state[10] = internal.initial_Caer;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["adp_init", "ADPm_init", "alpha", "AMP", "Amtot", "atot", "bottom1", "c_init", "Caer_init", "Cam_init", "Cbas", "cm", "Cmito", "delta_psi_init", "f13", "f23", "f41", "f42", "f43", "FBP_init", "fcyt", "fer", "fmito", "FRT", "G6P_init", "gamma", "gCa", "gK", "gkATP_", "gkCa", "JGK", "JGPDHbas", "k1", "k2", "k3", "k4", "kappa", "kd", "kGPDH", "khyd", "khydbas", "kPMCA", "kSERCA", "lambda", "n_init", "NADHm_init", "NADmtot", "p1", "p10", "p11", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p2", "p20", "p21", "p22", "p23", "p24", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "pleak", "tau_n", "topa1", "Vc_Ver", "VCa", "VK", "Vm_init", "VmaxPFK", "weight1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "adp_init", internal, 1137, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADPm_init", internal, 11.1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 4.5000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMP", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Amtot", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atot", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bottom1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Caer_init", internal, 345, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cam_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cbas", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cm", internal, 5300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cmito", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_psi_init", internal, 164, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f13", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f23", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f41", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f42", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f43", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_init", internal, 2.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fcyt", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fer", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fmito", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FRT", internal, 0.037410132999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_init", internal, 301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gCa", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gK", internal, 2700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gkATP_", internal, 16000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gkCa", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JGK", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JGPDHbas", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 220, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kGPDH", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "khyd", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "khydbas", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kPMCA", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSERCA", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADHm_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADmtot", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p10", internal, 177, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p11", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p13", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p14", internal, 190, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p15", internal, 8.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p16", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p17", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p18", internal, - 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p19", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p20", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p21", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p22", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p23", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p24", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p6", internal, 177, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p7", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p8", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p9", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pleak", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_n", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "topa1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vc_Ver", internal, 31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VCa", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VK", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm_init", internal, - 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxPFK", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "weight1", internal, 1, -Infinity, Infinity, false);
    internal.initial_adp = internal.adp_init;
    internal.initial_ADPm = internal.ADPm_init;
    internal.initial_c = internal.c_init;
    internal.initial_Caer = internal.Caer_init;
    internal.initial_Cam = internal.Cam_init;
    internal.initial_delta_psi = internal.delta_psi_init;
    internal.initial_FBP = internal.FBP_init;
    internal.initial_G6P = internal.G6P_init;
    internal.initial_n = internal.n_init;
    internal.initial_NADHm = internal.NADHm_init;
    internal.initial_Vm = internal.Vm_init;
    internal.JGK_ms = internal.kappa * internal.JGK;
    internal.topa2 = internal.topa1;
    internal.weight9 = internal.AMP / internal.k1;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Vm = state[0];
    const n = state[1];
    const G6P = state[2];
    const FBP = state[3];
    const NADHm = state[4];
    const delta_psi = state[5];
    const Cam = state[6];
    const ADPm = state[7];
    const adp = state[8];
    const c = state[9];
    const Caer = state[10];
    var adp3m = 0.13500000000000001 * adp;
    var atp = internal.atot - adp;
    var ATPm = internal.Amtot - ADPm;
    var F6P = 0.29999999999999999 * G6P;
    var Ik = internal.gK * n * (Vm - internal.VK);
    var Ikca = internal.gkCa * (Math.pow((c), (2)) / (Math.pow((c), (2)) + Math.pow((internal.kd), (2)))) * (Vm - internal.VK);
    var JGPDH = internal.kGPDH * Math.pow((FBP), (1 / 2));
    var JHleak = internal.p17 * delta_psi + internal.p18;
    var JHres = internal.p8 * (NADHm / (internal.p9 + NADHm)) * (1 / (1 + Math.exp((delta_psi - internal.p10) / internal.p11)));
    var Jleak = internal.pleak * (Caer - c);
    var JNaCa = internal.p23 * (Cam / c) * Math.exp(internal.p24 * delta_psi);
    var JO = internal.p4 * NADHm / (internal.p5 + NADHm) / (1 + Math.exp((delta_psi - internal.p6) / internal.p7));
    var JSERCA = internal.kSERCA * c;
    var Juni = (internal.p21 * delta_psi - internal.p22) * Math.pow((c), (2));
    var m_infinity = 1 / (1 + Math.exp(- (20 + Vm) / 12));
    var mgadp = 0.16500000000000001 * adp;
    var n_infinity = 1 / (1 + Math.exp(- (16 + Vm) / 5));
    var NADm = internal.NADmtot - NADHm;
    var weight13 = internal.AMP * FBP / (internal.k1 * internal.k2);
    var weight5 = FBP / internal.k2;
    var atp4m = 0.050000000000000003 * atp;
    dstatedt[1] = 0 + (n_infinity - n) / internal.tau_n;
    var Ica = internal.gCa * m_infinity * (Vm - internal.VCa);
    var Jer = Jleak - JSERCA;
    var JF1F0 = internal.p16 * internal.p13 / (internal.p13 + ATPm) * (1 / (1 + Math.exp((internal.p14 - delta_psi) / internal.p15)));
    var Jhyd = (internal.khyd * c + internal.khydbas) * atp;
    var Jmito = JNaCa - Juni;
    var JPDH = internal.p1 / (internal.p2 + NADHm / NADm) * (Cam / (internal.p3 + Cam)) * (JGPDH + internal.JGPDHbas);
    var RATm = ATPm / ADPm;
    var topo = 0.080000000000000002 * (1 + 2 * mgadp / 17) + 0.89000000000000001 * Math.pow((mgadp / 17), (2));
    var weight10 = internal.AMP * Math.pow((atp), (2)) / (internal.k1 * internal.k4 * internal.f41);
    var weight11 = internal.AMP * Math.pow((F6P), (2)) / (internal.k1 * internal.k3 * internal.f13);
    var weight12 = internal.AMP * Math.pow((F6P), (2)) * Math.pow((atp), (2)) / (internal.k1 * internal.f13 * internal.f41 * internal.f43 * internal.k3 * internal.k4);
    var weight14 = internal.AMP * FBP * Math.pow((atp), (2)) / (internal.k1 * internal.k2 * internal.f42 * internal.f41 * internal.k4);
    var weight15 = internal.AMP * FBP * Math.pow((F6P), (2)) / (internal.k1 * internal.k2 * internal.f23 * internal.f13 * internal.k3);
    var weight16 = internal.AMP * FBP * Math.pow((F6P), (2)) * Math.pow((atp), (2)) / (internal.k1 * internal.k2 * internal.k3 * internal.k4 * internal.f23 * internal.f13 * internal.f42 * internal.f41 * internal.f43);
    var weight2 = Math.pow((atp), (2)) / internal.k4;
    var weight3 = Math.pow((F6P), (2)) / internal.k3;
    var weight4 = Math.pow((F6P * atp), (2)) / (internal.k3 * internal.k4 * internal.f43);
    var weight6 = FBP * Math.pow((atp), (2)) / (internal.k2 * internal.f42 * internal.k4);
    var weight7 = FBP * Math.pow((F6P), (2)) / (internal.k2 * internal.f23 * internal.k3);
    var weight8 = FBP * Math.pow((F6P), (2)) * Math.pow((atp), (2)) / (internal.k2 * internal.f23 * internal.f42 * internal.f43 * internal.k3 * internal.k4);
    var bottom2 = internal.bottom1 + weight2;
    var bottomo = Math.pow((1 + mgadp / 17), (2)) * (1 + adp3m / 26 + atp4m / 1);
    dstatedt[10] = 0 + - internal.fer * internal.Vc_Ver * Jer;
    dstatedt[6] = 0 + - internal.fmito * Jmito;
    dstatedt[4] = 0 + internal.gamma * (JPDH - JO);
    var JANT = internal.p19 * (RATm / (RATm + internal.p20)) * Math.exp(0.5 * internal.FRT * delta_psi);
    var JHatp = 3 * JF1F0;
    var Jmem = - (internal.alpha * Ica + internal.kPMCA * (c - internal.Cbas));
    var topa3 = internal.topa2 + weight3;
    var topb = weight15;
    var bottom3 = bottom2 + weight3;
    dstatedt[8] = 0 + - internal.delta * JANT + Jhyd;
    dstatedt[7] = 0 + internal.gamma * (JANT - JF1F0);
    dstatedt[9] = 0 + internal.fcyt * (Jmem + Jer + internal.delta * Jmito);
    dstatedt[5] = 0 + (JHres - (JHatp + JANT + JHleak + JNaCa + 2 * Juni)) / internal.Cmito;
    var katpo = topo / bottomo;
    var topa4 = topa3 + weight4;
    var bottom4 = bottom3 + weight4;
    var Ikatp = internal.gkATP_ * katpo * (Vm - internal.VK);
    var topa5 = topa4;
    var bottom5 = bottom4 + weight5;
    dstatedt[0] = 0 + - (Ik + Ica + Ikca + Ikatp) / internal.cm;
    var topa6 = topa5;
    var bottom6 = bottom5 + weight6;
    var topa7 = topa6 + weight7;
    var bottom7 = bottom6 + weight7;
    var topa8 = topa7 + weight8;
    var bottom8 = bottom7 + weight8;
    var topa9 = topa8;
    var bottom9 = bottom8 + internal.weight9;
    var topa10 = topa9;
    var bottom10 = bottom9 + weight10;
    var topa11 = topa10 + weight11;
    var bottom11 = bottom10 + weight11;
    var topa12 = topa11 + weight12;
    var bottom12 = bottom11 + weight12;
    var topa13 = topa12;
    var bottom13 = bottom12 + weight13;
    var topa14 = topa13;
    var bottom14 = bottom13 + weight14;
    var topa15 = topa14;
    var bottom15 = bottom14 + weight15;
    var topa16 = topa15 + weight16;
    var bottom16 = bottom15 + weight16;
    var JPFK = (internal.VmaxPFK * internal.lambda * topa16 + internal.VmaxPFK * topb) / bottom16;
    var JPFK_ms = internal.kappa * JPFK;
    dstatedt[3] = 0 + JPFK_ms - 0.5 * JGPDH;
    dstatedt[2] = 0 + internal.JGK_ms - JPFK_ms;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Vm", "n", "G6P", "FBP", "NADHm", "delta_psi", "Cam", "ADPm", "adp", "c", "Caer"];
    this.metadata.internalOrder = {adp_init: null, ADPm_init: null, alpha: null, AMP: null, Amtot: null, atot: null, bottom1: null, c_init: null, Caer_init: null, Cam_init: null, Cbas: null, cm: null, Cmito: null, Compartment: null, delta: null, delta_psi_init: null, f13: null, f23: null, f41: null, f42: null, f43: null, FBP_init: null, fcyt: null, fer: null, fmito: null, FRT: null, G6P_init: null, gamma: null, gCa: null, gK: null, gkATP_: null, gkCa: null, initial_adp: null, initial_ADPm: null, initial_c: null, initial_Caer: null, initial_Cam: null, initial_delta_psi: null, initial_FBP: null, initial_G6P: null, initial_n: null, initial_NADHm: null, initial_Vm: null, JGK: null, JGK_ms: null, JGPDHbas: null, k1: null, k2: null, k3: null, k4: null, kappa: null, kd: null, kGPDH: null, khyd: null, khydbas: null, kPMCA: null, kSERCA: null, lambda: null, n_init: null, NADHm_init: null, NADmtot: null, p1: null, p10: null, p11: null, p13: null, p14: null, p15: null, p16: null, p17: null, p18: null, p19: null, p2: null, p20: null, p21: null, p22: null, p23: null, p24: null, p3: null, p4: null, p5: null, p6: null, p7: null, p8: null, p9: null, pleak: null, tau_n: null, topa1: null, topa2: null, Vc_Ver: null, VCa: null, VK: null, Vm_init: null, VmaxPFK: null, weight1: null, weight9: null};
    this.metadata.variableOrder = {Vm: null, n: null, G6P: null, FBP: null, NADHm: null, delta_psi: null, Cam: null, ADPm: null, adp: null, c: null, Caer: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}