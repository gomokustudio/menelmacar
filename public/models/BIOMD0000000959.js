export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.BindIFN = 0.059299999999999999;
    internal.compartment = 1;
    internal.ComplFormSTAT1dimc = 7.1199999999999996e-06;
    internal.ComplFormSTAT1STAT2c = 0.0011119999999999999;
    internal.degaRecIFNBySOCS = 0.88370000000000004;
    internal.degBySOCSandUSP18 = 27.82;
    internal.degByUSP18 = 0.01644;
    internal.degRecBySOCS = 0.010279999999999999;
    internal.genOccGAS_ISREbsByISGF3n = 0.00035829999999999998;
    internal.genOccGAS_ISREbsBySTAT1STAT2n = 0.00029720000000000001;
    internal.genOccGASbsBySTAT1dimn = 1395;
    internal.hlSOCS1mRNA = 0.56440000000000001;
    internal.k1 = 2.0599999999999999e-05;
    internal.kinhBySOCS = 889.39999999999998;
    internal.kinhByUSP18 = 0.00013640000000000001;
    internal.kmIRF9 = 0.121;
    internal.kmSTAT1 = 0.97609999999999997;
    internal.kmsynthSTAT1 = 5.3730000000000002;
    internal.synthIRF2mRNA = 0.67749999999999999;
    internal.synthIRF9 = 329.89999999999998;
    internal.synthIRF9mRNA = 18.620000000000001;
    internal.synthSOCS1 = 0.90290000000000004;
    internal.synthSOCS1mRNA = 8.8480000000000008;
    internal.synthSOCS3 = 1958;
    internal.synthSOCS3mRNA = 0.01205;
    internal.synthSTAT1 = 1533000;
    internal.synthSTAT1mRNA = 4.375;
    internal.synthSTAT2 = 5274;
    internal.synthSTAT2mRNA = 1.5609999999999999;
    internal.synthUSP18 = 1658;
    internal.synthUSP18mRNA = 2.7839999999999998;
    internal.v = 16.98;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(41).fill(0);
    state[0] = internal.initial_Rec;
    state[1] = internal.initial_SOCS1;
    state[2] = internal.initial_IFN;
    state[3] = internal.initial_aRecIFN;
    state[4] = internal.initial_USP18;
    state[5] = internal.initial_STAT1c;
    state[6] = internal.initial_STAT2c;
    state[7] = internal.initial_pSTAT1pSTAT2c;
    state[8] = internal.initial_pSTAT1pSTAT2n;
    state[9] = internal.initial_STAT1n;
    state[10] = internal.initial_STAT2n;
    state[11] = internal.initial_ISGF3c;
    state[12] = internal.initial_ISGF3n;
    state[13] = internal.initial_IRF9n;
    state[14] = internal.initial_pSTAT1dimc;
    state[15] = internal.initial_pSTAT1dimn;
    state[16] = internal.initial_OccGAS_ISREbs;
    state[17] = internal.initial_OccGASbs;
    state[18] = internal.initial_IRF9c;
    state[19] = internal.initial_SOCS3;
    state[20] = internal.initial_STAT1mRNA;
    state[21] = internal.initial_STAT2mRNA;
    state[22] = internal.initial_IRF9mRNA;
    state[23] = internal.initial_IRF2mRNA;
    state[24] = internal.initial_IRF2;
    state[25] = internal.initial_USP18mRNA;
    state[26] = internal.initial_SOCS1mRNA;
    state[27] = internal.initial_SOCS3mRNA;
    state[28] = internal.initial_STAT1_LC_1;
    state[29] = internal.initial_STAT1_LC_2;
    state[30] = internal.initial_STAT1_LC_3;
    state[31] = internal.initial_STAT2_LC_1;
    state[32] = internal.initial_STAT2_LC_2;
    state[33] = internal.initial_STAT2_LC_3;
    state[34] = internal.initial_STAT2_LC_4;
    state[35] = internal.initial_STAT2_LC_5;
    state[36] = internal.initial_IRF9_LC_1;
    state[37] = internal.initial_IRF9_LC_2;
    state[38] = internal.initial_USP18_LC_1;
    state[39] = internal.initial_USP18_LC_2;
    state[40] = internal.initial_SOCS1_LC_1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aRecIFN_init", "IFN_init", "IRF2_init", "IRF2mRNA_init", "IRF9_LC_1_init", "IRF9_LC_2_init", "IRF9c_init", "IRF9mRNA_init", "IRF9n_init", "ISGF3c_init", "ISGF3n_init", "OccGAS_ISREbs_init", "OccGASbs_init", "pSTAT1dimc_init", "pSTAT1dimn_init", "pSTAT1pSTAT2c_init", "pSTAT1pSTAT2n_init", "Rec_init", "SOCS1_init", "SOCS1_LC_1_init", "SOCS1mRNA_init", "SOCS3_init", "SOCS3mRNA_init", "STAT1_LC_1_init", "STAT1_LC_2_init", "STAT1_LC_3_init", "STAT1c_init", "STAT1mRNA_init", "STAT1n_init", "STAT2_LC_1_init", "STAT2_LC_2_init", "STAT2_LC_3_init", "STAT2_LC_4_init", "STAT2_LC_5_init", "STAT2c_init", "STAT2mRNA_init", "STAT2n_init", "USP18_init", "USP18_LC_1_init", "USP18_LC_2_init", "USP18mRNA_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aRecIFN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF2mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF9_LC_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF9_LC_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF9c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF9mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRF9n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ISGF3c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ISGF3n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OccGAS_ISREbs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OccGASbs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT1dimc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT1dimn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT1pSTAT2c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT1pSTAT2n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS1_LC_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS1mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1_LC_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1_LC_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1_LC_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2_LC_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2_LC_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2_LC_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2_LC_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2_LC_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT2n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "USP18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "USP18_LC_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "USP18_LC_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "USP18mRNA_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_aRecIFN = internal.aRecIFN_init;
    internal.initial_IFN = internal.IFN_init;
    internal.initial_IRF2 = internal.IRF2_init;
    internal.initial_IRF2mRNA = internal.IRF2mRNA_init;
    internal.initial_IRF9_LC_1 = internal.IRF9_LC_1_init;
    internal.initial_IRF9_LC_2 = internal.IRF9_LC_2_init;
    internal.initial_IRF9c = internal.IRF9c_init;
    internal.initial_IRF9mRNA = internal.IRF9mRNA_init;
    internal.initial_IRF9n = internal.IRF9n_init;
    internal.initial_ISGF3c = internal.ISGF3c_init;
    internal.initial_ISGF3n = internal.ISGF3n_init;
    internal.initial_OccGAS_ISREbs = internal.OccGAS_ISREbs_init;
    internal.initial_OccGASbs = internal.OccGASbs_init;
    internal.initial_pSTAT1dimc = internal.pSTAT1dimc_init;
    internal.initial_pSTAT1dimn = internal.pSTAT1dimn_init;
    internal.initial_pSTAT1pSTAT2c = internal.pSTAT1pSTAT2c_init;
    internal.initial_pSTAT1pSTAT2n = internal.pSTAT1pSTAT2n_init;
    internal.initial_Rec = internal.Rec_init;
    internal.initial_SOCS1 = internal.SOCS1_init;
    internal.initial_SOCS1_LC_1 = internal.SOCS1_LC_1_init;
    internal.initial_SOCS1mRNA = internal.SOCS1mRNA_init;
    internal.initial_SOCS3 = internal.SOCS3_init;
    internal.initial_SOCS3mRNA = internal.SOCS3mRNA_init;
    internal.initial_STAT1_LC_1 = internal.STAT1_LC_1_init;
    internal.initial_STAT1_LC_2 = internal.STAT1_LC_2_init;
    internal.initial_STAT1_LC_3 = internal.STAT1_LC_3_init;
    internal.initial_STAT1c = internal.STAT1c_init;
    internal.initial_STAT1mRNA = internal.STAT1mRNA_init;
    internal.initial_STAT1n = internal.STAT1n_init;
    internal.initial_STAT2_LC_1 = internal.STAT2_LC_1_init;
    internal.initial_STAT2_LC_2 = internal.STAT2_LC_2_init;
    internal.initial_STAT2_LC_3 = internal.STAT2_LC_3_init;
    internal.initial_STAT2_LC_4 = internal.STAT2_LC_4_init;
    internal.initial_STAT2_LC_5 = internal.STAT2_LC_5_init;
    internal.initial_STAT2c = internal.STAT2c_init;
    internal.initial_STAT2mRNA = internal.STAT2mRNA_init;
    internal.initial_STAT2n = internal.STAT2n_init;
    internal.initial_USP18 = internal.USP18_init;
    internal.initial_USP18_LC_1 = internal.USP18_LC_1_init;
    internal.initial_USP18_LC_2 = internal.USP18_LC_2_init;
    internal.initial_USP18mRNA = internal.USP18mRNA_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Rec = state[0];
    const SOCS1 = state[1];
    const IFN = state[2];
    const aRecIFN = state[3];
    const USP18 = state[4];
    const STAT1c = state[5];
    const STAT2c = state[6];
    const pSTAT1pSTAT2c = state[7];
    const pSTAT1pSTAT2n = state[8];
    const STAT1n = state[9];
    const STAT2n = state[10];
    const ISGF3c = state[11];
    const ISGF3n = state[12];
    const IRF9n = state[13];
    const pSTAT1dimc = state[14];
    const pSTAT1dimn = state[15];
    const OccGAS_ISREbs = state[16];
    const OccGASbs = state[17];
    const IRF9c = state[18];
    const SOCS3 = state[19];
    const STAT1mRNA = state[20];
    const STAT2mRNA = state[21];
    const IRF9mRNA = state[22];
    const IRF2mRNA = state[23];
    const IRF2 = state[24];
    const USP18mRNA = state[25];
    const SOCS1mRNA = state[26];
    const SOCS3mRNA = state[27];
    const STAT1_LC_1 = state[28];
    const STAT1_LC_2 = state[29];
    const STAT1_LC_3 = state[30];
    const STAT2_LC_1 = state[31];
    const STAT2_LC_2 = state[32];
    const STAT2_LC_3 = state[33];
    const STAT2_LC_4 = state[34];
    const STAT2_LC_5 = state[35];
    const IRF9_LC_1 = state[36];
    const IRF9_LC_2 = state[37];
    const USP18_LC_1 = state[38];
    const USP18_LC_2 = state[39];
    const SOCS1_LC_1 = state[40];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.BindIFN * IFN * Rec / (1 + internal.kinhBySOCS * SOCS1) / (1 + internal.kinhByUSP18 * USP18) / SOCS3) - 1 * internal.compartment * internal.k1 * aRecIFN - 1 * internal.compartment * (aRecIFN * internal.degaRecIFNBySOCS * SOCS1) - 1 * internal.compartment * (aRecIFN * internal.degByUSP18 * USP18) - 1 * internal.compartment * (aRecIFN * internal.degBySOCSandUSP18 * SOCS1 * USP18);
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.BindIFN * IFN * Rec / (1 + internal.kinhBySOCS * SOCS1) / (1 + internal.kinhByUSP18 * USP18) / SOCS3);
    dstatedt[24] = 0 + 1 * internal.compartment * internal.k1 * IRF2mRNA - 1 * internal.compartment * internal.k1 * IRF2;
    dstatedt[23] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthIRF2mRNA * OccGAS_ISREbs) - 1 * internal.compartment * internal.k1 * IRF2mRNA;
    dstatedt[36] = 0 + 1 * internal.compartment * (internal.synthIRF9 * IRF9mRNA) - 1 * internal.compartment * internal.k1 * IRF9_LC_1;
    dstatedt[37] = 0 + 1 * internal.compartment * internal.k1 * IRF9_LC_1 - 1 * internal.compartment * internal.k1 * IRF9_LC_2;
    dstatedt[18] = 0 - 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2c * IRF9c + 1 * internal.compartment * internal.k1 * IRF9n - 1 * internal.compartment * internal.k1 * IRF9c - 1 * internal.compartment * internal.k1 * IRF9c + 1 * internal.compartment * internal.k1 * IRF9_LC_2;
    dstatedt[22] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthIRF9mRNA * OccGAS_ISREbs / (internal.kmIRF9 + OccGAS_ISREbs)) - 1 * internal.compartment * internal.k1 * IRF9mRNA;
    dstatedt[13] = 0 + 1 * internal.compartment * internal.k1 * ISGF3n - 1 * internal.compartment * internal.k1 * IRF9n + 1 * internal.compartment * internal.k1 * IRF9c;
    dstatedt[11] = 0 + 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2c * IRF9c - 1 * internal.compartment * internal.k1 * ISGF3c;
    dstatedt[12] = 0 + 1 * internal.compartment * internal.k1 * ISGF3c - 1 * internal.compartment * internal.k1 * ISGF3n;
    dstatedt[16] = 0 + 1 * internal.compartment * (internal.genOccGAS_ISREbsByISGF3n * ISGF3n) + 1 * internal.compartment * (internal.genOccGAS_ISREbsBySTAT1STAT2n * pSTAT1pSTAT2n) - 1 * internal.compartment * internal.k1 * OccGAS_ISREbs;
    dstatedt[17] = 0 + 1 * internal.compartment * (internal.genOccGASbsBySTAT1dimn * pSTAT1dimn) - 1 * internal.compartment * internal.k1 * OccGASbs;
    dstatedt[14] = 0 + 1 * internal.compartment * (internal.ComplFormSTAT1dimc * aRecIFN * STAT1c * STAT1c) - 1 * internal.compartment * internal.k1 * pSTAT1dimc;
    dstatedt[15] = 0 + 1 * internal.compartment * internal.k1 * pSTAT1dimc - 1 * internal.compartment * internal.k1 * pSTAT1dimn;
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.ComplFormSTAT1STAT2c * aRecIFN * STAT1c * STAT2c) - 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2c - 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2c * IRF9c;
    dstatedt[8] = 0 + 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2c - 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2n;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * internal.k1 * Rec - 1 * internal.compartment * (internal.degRecBySOCS * Rec * SOCS1) - 1 * internal.compartment * (internal.BindIFN * IFN * Rec / (1 + internal.kinhBySOCS * SOCS1) / (1 + internal.kinhByUSP18 * USP18) / SOCS3);
    dstatedt[1] = 0 - 1 * internal.compartment * internal.k1 * SOCS1 + 1 * internal.compartment * internal.k1 * SOCS1_LC_1;
    dstatedt[40] = 0 + 1 * internal.compartment * (internal.synthSOCS1 * SOCS1mRNA) - 1 * internal.compartment * internal.k1 * SOCS1_LC_1;
    dstatedt[26] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthSOCS1mRNA * OccGAS_ISREbs) - 1 * internal.compartment * (internal.hlSOCS1mRNA * SOCS1mRNA * (1 + IRF2));
    dstatedt[19] = 0 + 1 * internal.compartment * (internal.synthSOCS3 * SOCS3mRNA) - 1 * internal.compartment * internal.k1 * SOCS3;
    dstatedt[27] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthSOCS3mRNA * OccGASbs) - 1 * internal.compartment * internal.k1 * SOCS3mRNA;
    dstatedt[28] = 0 + 1 * internal.compartment * (internal.synthSTAT1 * STAT1mRNA / (internal.kmsynthSTAT1 + STAT1mRNA)) - 1 * internal.compartment * internal.k1 * STAT1_LC_1;
    dstatedt[29] = 0 + 1 * internal.compartment * internal.k1 * STAT1_LC_1 - 1 * internal.compartment * internal.k1 * STAT1_LC_2;
    dstatedt[30] = 0 + 1 * internal.compartment * internal.k1 * STAT1_LC_2 - 1 * internal.compartment * internal.k1 * STAT1_LC_3;
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.ComplFormSTAT1STAT2c * aRecIFN * STAT1c * STAT2c) - 2 * internal.compartment * (internal.ComplFormSTAT1dimc * aRecIFN * STAT1c * STAT1c) - 1 * internal.compartment * internal.k1 * STAT1c + 1 * internal.compartment * internal.k1 * STAT1n - 1 * internal.compartment * internal.k1 * STAT1c + 1 * internal.compartment * internal.k1 * STAT1_LC_3;
    dstatedt[20] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthSTAT1mRNA * OccGAS_ISREbs / (internal.kmSTAT1 + OccGAS_ISREbs)) - 1 * internal.compartment * internal.k1 * STAT1mRNA;
    dstatedt[9] = 0 + 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2n + 1 * internal.compartment * internal.k1 * ISGF3n + 2 * internal.compartment * internal.k1 * pSTAT1dimn - 1 * internal.compartment * internal.k1 * STAT1n + 1 * internal.compartment * internal.k1 * STAT1c;
    dstatedt[31] = 0 + 1 * internal.compartment * (internal.synthSTAT2 * STAT2mRNA) - 1 * internal.compartment * internal.k1 * STAT2_LC_1;
    dstatedt[32] = 0 + 1 * internal.compartment * internal.k1 * STAT2_LC_1 - 1 * internal.compartment * internal.k1 * STAT2_LC_2;
    dstatedt[33] = 0 + 1 * internal.compartment * internal.k1 * STAT2_LC_2 - 1 * internal.compartment * internal.k1 * STAT2_LC_3;
    dstatedt[34] = 0 + 1 * internal.compartment * internal.k1 * STAT2_LC_3 - 1 * internal.compartment * internal.k1 * STAT2_LC_4;
    dstatedt[35] = 0 + 1 * internal.compartment * internal.k1 * STAT2_LC_4 - 1 * internal.compartment * internal.k1 * STAT2_LC_5;
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.ComplFormSTAT1STAT2c * aRecIFN * STAT1c * STAT2c) - 1 * internal.compartment * internal.k1 * STAT2c + 1 * internal.compartment * internal.k1 * STAT2n - 1 * internal.compartment * internal.k1 * STAT2c + 1 * internal.compartment * internal.k1 * STAT2_LC_5;
    dstatedt[21] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthSTAT2mRNA * OccGAS_ISREbs) - 1 * internal.compartment * internal.k1 * STAT2mRNA;
    dstatedt[10] = 0 + 1 * internal.compartment * internal.k1 * pSTAT1pSTAT2n + 1 * internal.compartment * internal.k1 * ISGF3n - 1 * internal.compartment * internal.k1 * STAT2n + 1 * internal.compartment * internal.k1 * STAT2c;
    dstatedt[4] = 0 - 1 * internal.compartment * internal.k1 * USP18 + 1 * internal.compartment * internal.k1 * USP18_LC_2;
    dstatedt[38] = 0 + 1 * internal.compartment * (internal.synthUSP18 * USP18mRNA) - 1 * internal.compartment * internal.k1 * USP18_LC_1;
    dstatedt[39] = 0 + 1 * internal.compartment * internal.k1 * USP18_LC_1 - 1 * internal.compartment * internal.k1 * USP18_LC_2;
    dstatedt[25] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.synthUSP18mRNA * OccGAS_ISREbs) - 1 * internal.compartment * internal.k1 * USP18mRNA;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Rec", "SOCS1", "IFN", "aRecIFN", "USP18", "STAT1c", "STAT2c", "pSTAT1pSTAT2c", "pSTAT1pSTAT2n", "STAT1n", "STAT2n", "ISGF3c", "ISGF3n", "IRF9n", "pSTAT1dimc", "pSTAT1dimn", "OccGAS_ISREbs", "OccGASbs", "IRF9c", "SOCS3", "STAT1mRNA", "STAT2mRNA", "IRF9mRNA", "IRF2mRNA", "IRF2", "USP18mRNA", "SOCS1mRNA", "SOCS3mRNA", "STAT1_LC_1", "STAT1_LC_2", "STAT1_LC_3", "STAT2_LC_1", "STAT2_LC_2", "STAT2_LC_3", "STAT2_LC_4", "STAT2_LC_5", "IRF9_LC_1", "IRF9_LC_2", "USP18_LC_1", "USP18_LC_2", "SOCS1_LC_1"];
    this.metadata.internalOrder = {aRecIFN_init: null, BindIFN: null, compartment: null, ComplFormSTAT1dimc: null, ComplFormSTAT1STAT2c: null, degaRecIFNBySOCS: null, degBySOCSandUSP18: null, degByUSP18: null, degRecBySOCS: null, genOccGAS_ISREbsByISGF3n: null, genOccGAS_ISREbsBySTAT1STAT2n: null, genOccGASbsBySTAT1dimn: null, hlSOCS1mRNA: null, IFN_init: null, initial_aRecIFN: null, initial_IFN: null, initial_IRF2: null, initial_IRF2mRNA: null, initial_IRF9_LC_1: null, initial_IRF9_LC_2: null, initial_IRF9c: null, initial_IRF9mRNA: null, initial_IRF9n: null, initial_ISGF3c: null, initial_ISGF3n: null, initial_OccGAS_ISREbs: null, initial_OccGASbs: null, initial_pSTAT1dimc: null, initial_pSTAT1dimn: null, initial_pSTAT1pSTAT2c: null, initial_pSTAT1pSTAT2n: null, initial_Rec: null, initial_SOCS1: null, initial_SOCS1_LC_1: null, initial_SOCS1mRNA: null, initial_SOCS3: null, initial_SOCS3mRNA: null, initial_STAT1_LC_1: null, initial_STAT1_LC_2: null, initial_STAT1_LC_3: null, initial_STAT1c: null, initial_STAT1mRNA: null, initial_STAT1n: null, initial_STAT2_LC_1: null, initial_STAT2_LC_2: null, initial_STAT2_LC_3: null, initial_STAT2_LC_4: null, initial_STAT2_LC_5: null, initial_STAT2c: null, initial_STAT2mRNA: null, initial_STAT2n: null, initial_USP18: null, initial_USP18_LC_1: null, initial_USP18_LC_2: null, initial_USP18mRNA: null, IRF2_init: null, IRF2mRNA_init: null, IRF9_LC_1_init: null, IRF9_LC_2_init: null, IRF9c_init: null, IRF9mRNA_init: null, IRF9n_init: null, ISGF3c_init: null, ISGF3n_init: null, k1: null, kinhBySOCS: null, kinhByUSP18: null, kmIRF9: null, kmSTAT1: null, kmsynthSTAT1: null, OccGAS_ISREbs_init: null, OccGASbs_init: null, pSTAT1dimc_init: null, pSTAT1dimn_init: null, pSTAT1pSTAT2c_init: null, pSTAT1pSTAT2n_init: null, Rec_init: null, SOCS1_init: null, SOCS1_LC_1_init: null, SOCS1mRNA_init: null, SOCS3_init: null, SOCS3mRNA_init: null, STAT1_LC_1_init: null, STAT1_LC_2_init: null, STAT1_LC_3_init: null, STAT1c_init: null, STAT1mRNA_init: null, STAT1n_init: null, STAT2_LC_1_init: null, STAT2_LC_2_init: null, STAT2_LC_3_init: null, STAT2_LC_4_init: null, STAT2_LC_5_init: null, STAT2c_init: null, STAT2mRNA_init: null, STAT2n_init: null, synthIRF2mRNA: null, synthIRF9: null, synthIRF9mRNA: null, synthSOCS1: null, synthSOCS1mRNA: null, synthSOCS3: null, synthSOCS3mRNA: null, synthSTAT1: null, synthSTAT1mRNA: null, synthSTAT2: null, synthSTAT2mRNA: null, synthUSP18: null, synthUSP18mRNA: null, USP18_init: null, USP18_LC_1_init: null, USP18_LC_2_init: null, USP18mRNA_init: null, v: null};
    this.metadata.variableOrder = {Rec: null, SOCS1: null, IFN: null, aRecIFN: null, USP18: null, STAT1c: null, STAT2c: null, pSTAT1pSTAT2c: null, pSTAT1pSTAT2n: null, STAT1n: null, STAT2n: null, ISGF3c: null, ISGF3n: null, IRF9n: null, pSTAT1dimc: null, pSTAT1dimn: null, OccGAS_ISREbs: null, OccGASbs: null, IRF9c: null, SOCS3: null, STAT1mRNA: null, STAT2mRNA: null, IRF9mRNA: null, IRF2mRNA: null, IRF2: null, USP18mRNA: null, SOCS1mRNA: null, SOCS3mRNA: null, STAT1_LC_1: null, STAT1_LC_2: null, STAT1_LC_3: null, STAT2_LC_1: null, STAT2_LC_2: null, STAT2_LC_3: null, STAT2_LC_4: null, STAT2_LC_5: null, IRF9_LC_1: null, IRF9_LC_2: null, USP18_LC_1: null, USP18_LC_2: null, SOCS1_LC_1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}