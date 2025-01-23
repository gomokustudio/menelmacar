export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell_nsclc = 1;
    internal.k_A_SOS_I = 500;
    internal.k_AKT_PI3K = 0.056627900000000002;
    internal.k_D_SOS_P90Rsk = 161197;
    internal.k_ERK_MekActive = 9.8536699999999993;
    internal.k_ERKactive_PP2A = 8.8911999999999995;
    internal.k_Mek_PP2A = 185.75899999999999;
    internal.k_MekActivePP2A = 2.83243;
    internal.k_PI3K_EGF1R = 10.6737;
    internal.k_PI3K_IGF1R = 10.6737;
    internal.k_PI3K_Ras = 0.0771067;
    internal.k_Raf_AKT = 15.1212;
    internal.k_Raf_RasActive = 0.88409599999999999;
    internal.k_Ras_SOS = 32.344000000000001;
    internal.k_RasActive_RafPP = 0.126329;
    internal.k_RasActiveRasGap = 1509.3599999999999;
    internal.k_SOS_E = 694.73099999999999;
    internal.kd_AKT = 0.0050000000000000001;
    internal.kd_P90Rsk = 0.0050000000000000001;
    internal.KM_A_SOS_I = 100000;
    internal.KM_AKT_PI3K = 653951;
    internal.KM_D_SOS_P90Rsk = 896896;
    internal.KM_ERK_MekActive = 1007340;
    internal.KM_ERKactive_PP2A = 3496490;
    internal.KM_MekActivePP2A = 518753;
    internal.KM_MekPP2A = 4768350;
    internal.KM_PI3K_EGF1R = 184912;
    internal.KM_PI3K_IGF1R = 184912;
    internal.KM_PI3K_Ras = 272056;
    internal.KM_Raf_AKT = 119355;
    internal.KM_Raf_RasActive = 62464.599999999999;
    internal.KM_Ras_SOS = 35954.300000000003;
    internal.KM_RasActive_RafPP = 1061.71;
    internal.KM_RasActiveRasGap = 1432410;
    internal.KM_SOS_E = 6086070;
    internal.n_A_SOS_I = 1;
    internal.n_AKT_PI3K = 1;
    internal.n_D_SOS = 1;
    internal.n_ERKactive_PP2A = 1;
    internal.n_Mek_PP2A = 1;
    internal.n_MekActivePP2A = 1;
    internal.n_PI3K_E = 1;
    internal.n_PI3K_I = 1;
    internal.n_PI3K_Ras = 1;
    internal.n_Raf_AKT = 1;
    internal.n_Raf_RasActive = 1;
    internal.n_Ras_SOS = 1;
    internal.n_RasActive_RafPP = 1;
    internal.n_RasActiveRasGap = 1;
    internal.n_SOS = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(21).fill(0);
    state[0] = internal.initial_EGFR_active;
    state[1] = internal.initial_D_SOS;
    state[2] = internal.initial_A_SOS;
    state[3] = internal.initial_Raf;
    state[4] = internal.initial_Ras_active;
    state[5] = internal.initial_Mek_active;
    state[6] = internal.initial_ERK;
    state[7] = internal.initial_ERK_active;
    state[8] = internal.initial_IGFR_active;
    state[9] = internal.initial_PI3KCA;
    state[10] = internal.initial_PI3KCA_active;
    state[11] = internal.initial_AKT_active;
    state[12] = internal.initial_AKT;
    state[13] = internal.initial_PP2A;
    state[14] = internal.initial_Ras;
    state[15] = internal.initial_Raf_active;
    state[16] = internal.initial_Mek;
    state[17] = internal.initial_RasGapActive;
    state[18] = internal.initial_RafPP;
    state[19] = internal.initial_P90RskInactive;
    state[20] = internal.initial_P90Rsk_Active;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_SOS_init", "AKT_active_init", "AKT_init", "D_SOS_init", "EGFR_active_init", "ERK_active_init", "ERK_init", "gamma_EGFR", "gamma_IGFR", "IGFR_active_init", "k_P90Rsk_ERKActive", "kd_PI3K_a", "KM_P90Rsk_ERKActive", "Mek_active_init", "Mek_init", "P90Rsk_Active_init", "P90RskInactive_init", "PI3KCA_active_init", "PI3KCA_init", "PP2A_init", "Raf_active_init", "Raf_init", "RafPP_init", "Ras_active_init", "Ras_init", "RasGapActive_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_SOS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKT_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKT_init", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_SOS_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_active_init", internal, 8000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERK_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERK_init", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_EGFR", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_IGFR", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IGFR_active_init", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_P90Rsk_ERKActive", internal, 0.021369699999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_PI3K_a", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KM_P90Rsk_ERKActive", internal, 763523, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mek_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mek_init", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P90Rsk_Active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P90RskInactive_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3KCA_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3KCA_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PP2A_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Raf_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Raf_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RafPP_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ras_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ras_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGapActive_init", internal, 120000, -Infinity, Infinity, false);
    internal.initial_A_SOS = internal.A_SOS_init;
    internal.initial_AKT = internal.AKT_init;
    internal.initial_AKT_active = internal.AKT_active_init;
    internal.initial_D_SOS = internal.D_SOS_init;
    internal.initial_EGFR_active = internal.EGFR_active_init;
    internal.initial_ERK = internal.ERK_init;
    internal.initial_ERK_active = internal.ERK_active_init;
    internal.initial_IGFR_active = internal.IGFR_active_init;
    internal.initial_Mek = internal.Mek_init;
    internal.initial_Mek_active = internal.Mek_active_init;
    internal.initial_P90Rsk_Active = internal.P90Rsk_Active_init;
    internal.initial_P90RskInactive = internal.P90RskInactive_init;
    internal.initial_PI3KCA = internal.PI3KCA_init;
    internal.initial_PI3KCA_active = internal.PI3KCA_active_init;
    internal.initial_PP2A = internal.PP2A_init;
    internal.initial_Raf = internal.Raf_init;
    internal.initial_Raf_active = internal.Raf_active_init;
    internal.initial_RafPP = internal.RafPP_init;
    internal.initial_Ras = internal.Ras_init;
    internal.initial_Ras_active = internal.Ras_active_init;
    internal.initial_RasGapActive = internal.RasGapActive_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const EGFR_active = state[0];
    const D_SOS = state[1];
    const A_SOS = state[2];
    const Raf = state[3];
    const Ras_active = state[4];
    const Mek_active = state[5];
    const ERK = state[6];
    const ERK_active = state[7];
    const IGFR_active = state[8];
    const PI3KCA = state[9];
    const PI3KCA_active = state[10];
    const AKT_active = state[11];
    const AKT = state[12];
    const PP2A = state[13];
    const Ras = state[14];
    const Raf_active = state[15];
    const Mek = state[16];
    const RasGapActive = state[17];
    const RafPP = state[18];
    const P90RskInactive = state[19];
    const P90Rsk_Active = state[20];
    dstatedt[2] = 0 + 1 * internal.k_SOS_E * EGFR_active * Math.pow((D_SOS), (internal.n_SOS)) / (Math.pow((internal.KM_SOS_E), (internal.n_SOS)) + Math.pow((D_SOS), (internal.n_SOS))) + 1 * A_SOS * internal.k_Ras_SOS * Math.pow((Ras), (internal.n_Ras_SOS)) / (Math.pow((internal.KM_Ras_SOS), (internal.n_Ras_SOS)) + Math.pow((Ras), (internal.n_Ras_SOS))) - 1 * A_SOS * internal.k_Ras_SOS * Math.pow((Ras), (internal.n_Ras_SOS)) / (Math.pow((internal.KM_Ras_SOS), (internal.n_Ras_SOS)) + Math.pow((Ras), (internal.n_Ras_SOS))) - 1 * P90Rsk_Active * internal.k_D_SOS_P90Rsk * Math.pow((A_SOS), (internal.n_D_SOS)) / (Math.pow((internal.KM_D_SOS_P90Rsk), (internal.n_D_SOS)) + Math.pow((A_SOS), (internal.n_D_SOS))) + 1 * IGFR_active * internal.k_A_SOS_I * Math.pow((D_SOS), (internal.n_A_SOS_I)) / (Math.pow((internal.KM_A_SOS_I), (internal.n_A_SOS_I)) + Math.pow((D_SOS), (internal.n_A_SOS_I)));
    dstatedt[12] = 0 - 1 * PI3KCA_active * internal.k_AKT_PI3K * Math.pow((AKT), (internal.n_AKT_PI3K)) / (Math.pow((internal.KM_AKT_PI3K), (internal.n_AKT_PI3K)) + Math.pow((AKT), (internal.n_AKT_PI3K))) + 1 * internal.kd_AKT * AKT_active;
    dstatedt[11] = 0 + 1 * PI3KCA_active * internal.k_AKT_PI3K * Math.pow((AKT), (internal.n_AKT_PI3K)) / (Math.pow((internal.KM_AKT_PI3K), (internal.n_AKT_PI3K)) + Math.pow((AKT), (internal.n_AKT_PI3K))) - 1 * internal.kd_AKT * AKT_active + 1 * AKT_active * internal.k_Raf_AKT * Math.pow((Raf_active), (internal.n_Raf_AKT)) / (Math.pow((internal.KM_Raf_AKT), (internal.n_Raf_AKT)) + Math.pow((Raf_active), (internal.n_Raf_AKT))) - 1 * AKT_active * internal.k_Raf_AKT * Math.pow((Raf_active), (internal.n_Raf_AKT)) / (Math.pow((internal.KM_Raf_AKT), (internal.n_Raf_AKT)) + Math.pow((Raf_active), (internal.n_Raf_AKT)));
    dstatedt[1] = 0 - 1 * internal.k_SOS_E * EGFR_active * Math.pow((D_SOS), (internal.n_SOS)) / (Math.pow((internal.KM_SOS_E), (internal.n_SOS)) + Math.pow((D_SOS), (internal.n_SOS))) + 1 * P90Rsk_Active * internal.k_D_SOS_P90Rsk * Math.pow((A_SOS), (internal.n_D_SOS)) / (Math.pow((internal.KM_D_SOS_P90Rsk), (internal.n_D_SOS)) + Math.pow((A_SOS), (internal.n_D_SOS))) - 1 * IGFR_active * internal.k_A_SOS_I * Math.pow((D_SOS), (internal.n_A_SOS_I)) / (Math.pow((internal.KM_A_SOS_I), (internal.n_A_SOS_I)) + Math.pow((D_SOS), (internal.n_A_SOS_I)));
    dstatedt[0] = 0 + 1 * internal.k_SOS_E * EGFR_active * Math.pow((D_SOS), (internal.n_SOS)) / (Math.pow((internal.KM_SOS_E), (internal.n_SOS)) + Math.pow((D_SOS), (internal.n_SOS))) - 1 * internal.k_SOS_E * EGFR_active * Math.pow((D_SOS), (internal.n_SOS)) / (Math.pow((internal.KM_SOS_E), (internal.n_SOS)) + Math.pow((D_SOS), (internal.n_SOS))) - 1 * internal.gamma_EGFR * EGFR_active + 1 * EGFR_active * internal.k_PI3K_EGF1R * EGFR_active * Math.pow((PI3KCA), (internal.n_PI3K_E)) / (Math.pow((internal.KM_PI3K_EGF1R), (internal.n_PI3K_E)) + Math.pow((PI3KCA), (internal.n_PI3K_E))) - 1 * EGFR_active * internal.k_PI3K_EGF1R * EGFR_active * Math.pow((PI3KCA), (internal.n_PI3K_E)) / (Math.pow((internal.KM_PI3K_EGF1R), (internal.n_PI3K_E)) + Math.pow((PI3KCA), (internal.n_PI3K_E)));
    dstatedt[6] = 0 - 1 * Mek_active * internal.k_ERK_MekActive * ERK / (internal.KM_ERK_MekActive + ERK) + 1 * PP2A * internal.k_ERKactive_PP2A * Math.pow((ERK_active), (internal.n_ERKactive_PP2A)) / (Math.pow((internal.KM_ERKactive_PP2A), (internal.n_ERKactive_PP2A)) + Math.pow((ERK_active), (internal.n_ERKactive_PP2A)));
    dstatedt[7] = 0 + 1 * Mek_active * internal.k_ERK_MekActive * ERK / (internal.KM_ERK_MekActive + ERK) - 1 * PP2A * internal.k_ERKactive_PP2A * Math.pow((ERK_active), (internal.n_ERKactive_PP2A)) / (Math.pow((internal.KM_ERKactive_PP2A), (internal.n_ERKactive_PP2A)) + Math.pow((ERK_active), (internal.n_ERKactive_PP2A))) + 1 * ERK_active * internal.k_P90Rsk_ERKActive * P90RskInactive / (internal.KM_P90Rsk_ERKActive + P90RskInactive) - 1 * ERK_active * internal.k_P90Rsk_ERKActive * P90RskInactive / (internal.KM_P90Rsk_ERKActive + P90RskInactive);
    dstatedt[8] = 0 + 1 * IGFR_active * internal.k_A_SOS_I * Math.pow((D_SOS), (internal.n_A_SOS_I)) / (Math.pow((internal.KM_A_SOS_I), (internal.n_A_SOS_I)) + Math.pow((D_SOS), (internal.n_A_SOS_I))) - 1 * IGFR_active * internal.k_A_SOS_I * Math.pow((D_SOS), (internal.n_A_SOS_I)) / (Math.pow((internal.KM_A_SOS_I), (internal.n_A_SOS_I)) + Math.pow((D_SOS), (internal.n_A_SOS_I))) + 1 * IGFR_active * internal.k_PI3K_IGF1R * Math.pow((PI3KCA), (internal.n_PI3K_I)) / (Math.pow((internal.KM_PI3K_IGF1R), (internal.n_PI3K_I)) + Math.pow((PI3KCA), (internal.n_PI3K_I))) - 1 * IGFR_active * internal.k_PI3K_IGF1R * Math.pow((PI3KCA), (internal.n_PI3K_I)) / (Math.pow((internal.KM_PI3K_IGF1R), (internal.n_PI3K_I)) + Math.pow((PI3KCA), (internal.n_PI3K_I))) - 1 * internal.gamma_IGFR * IGFR_active;
    dstatedt[16] = 0 - 1 * Raf_active * internal.k_Mek_PP2A * Math.pow((Mek), (internal.n_Mek_PP2A)) / (Math.pow((internal.KM_MekPP2A), (internal.n_Mek_PP2A)) + Math.pow((Mek), (internal.n_Mek_PP2A))) + 1 * PP2A * internal.k_MekActivePP2A * Math.pow((Mek_active), (internal.n_MekActivePP2A)) / (Math.pow((internal.KM_MekActivePP2A), (internal.n_MekActivePP2A)) + Math.pow((Mek_active), (internal.n_MekActivePP2A)));
    dstatedt[5] = 0 + 1 * Mek_active * internal.k_ERK_MekActive * ERK / (internal.KM_ERK_MekActive + ERK) - 1 * Mek_active * internal.k_ERK_MekActive * ERK / (internal.KM_ERK_MekActive + ERK) + 1 * Raf_active * internal.k_Mek_PP2A * Math.pow((Mek), (internal.n_Mek_PP2A)) / (Math.pow((internal.KM_MekPP2A), (internal.n_Mek_PP2A)) + Math.pow((Mek), (internal.n_Mek_PP2A))) - 1 * PP2A * internal.k_MekActivePP2A * Math.pow((Mek_active), (internal.n_MekActivePP2A)) / (Math.pow((internal.KM_MekActivePP2A), (internal.n_MekActivePP2A)) + Math.pow((Mek_active), (internal.n_MekActivePP2A)));
    dstatedt[20] = 0 + 1 * P90Rsk_Active * internal.k_D_SOS_P90Rsk * Math.pow((A_SOS), (internal.n_D_SOS)) / (Math.pow((internal.KM_D_SOS_P90Rsk), (internal.n_D_SOS)) + Math.pow((A_SOS), (internal.n_D_SOS))) - 1 * P90Rsk_Active * internal.k_D_SOS_P90Rsk * Math.pow((A_SOS), (internal.n_D_SOS)) / (Math.pow((internal.KM_D_SOS_P90Rsk), (internal.n_D_SOS)) + Math.pow((A_SOS), (internal.n_D_SOS))) + 1 * ERK_active * internal.k_P90Rsk_ERKActive * P90RskInactive / (internal.KM_P90Rsk_ERKActive + P90RskInactive) - 1 * internal.kd_P90Rsk * P90Rsk_Active;
    dstatedt[19] = 0 - 1 * ERK_active * internal.k_P90Rsk_ERKActive * P90RskInactive / (internal.KM_P90Rsk_ERKActive + P90RskInactive) + 1 * internal.kd_P90Rsk * P90Rsk_Active;
    dstatedt[9] = 0 - 1 * IGFR_active * internal.k_PI3K_IGF1R * Math.pow((PI3KCA), (internal.n_PI3K_I)) / (Math.pow((internal.KM_PI3K_IGF1R), (internal.n_PI3K_I)) + Math.pow((PI3KCA), (internal.n_PI3K_I))) - 1 * EGFR_active * internal.k_PI3K_EGF1R * EGFR_active * Math.pow((PI3KCA), (internal.n_PI3K_E)) / (Math.pow((internal.KM_PI3K_EGF1R), (internal.n_PI3K_E)) + Math.pow((PI3KCA), (internal.n_PI3K_E))) - 1 * Ras_active * internal.k_PI3K_Ras * Math.pow((PI3KCA), (internal.n_PI3K_Ras)) / (Math.pow((internal.KM_PI3K_Ras), (internal.n_PI3K_Ras)) + Math.pow((PI3KCA), (internal.n_PI3K_Ras))) + 1 * internal.kd_PI3K_a * PI3KCA_active;
    dstatedt[10] = 0 + 1 * IGFR_active * internal.k_PI3K_IGF1R * Math.pow((PI3KCA), (internal.n_PI3K_I)) / (Math.pow((internal.KM_PI3K_IGF1R), (internal.n_PI3K_I)) + Math.pow((PI3KCA), (internal.n_PI3K_I))) + 1 * EGFR_active * internal.k_PI3K_EGF1R * EGFR_active * Math.pow((PI3KCA), (internal.n_PI3K_E)) / (Math.pow((internal.KM_PI3K_EGF1R), (internal.n_PI3K_E)) + Math.pow((PI3KCA), (internal.n_PI3K_E))) + 1 * PI3KCA_active * internal.k_AKT_PI3K * Math.pow((AKT), (internal.n_AKT_PI3K)) / (Math.pow((internal.KM_AKT_PI3K), (internal.n_AKT_PI3K)) + Math.pow((AKT), (internal.n_AKT_PI3K))) - 1 * PI3KCA_active * internal.k_AKT_PI3K * Math.pow((AKT), (internal.n_AKT_PI3K)) / (Math.pow((internal.KM_AKT_PI3K), (internal.n_AKT_PI3K)) + Math.pow((AKT), (internal.n_AKT_PI3K))) + 1 * Ras_active * internal.k_PI3K_Ras * Math.pow((PI3KCA), (internal.n_PI3K_Ras)) / (Math.pow((internal.KM_PI3K_Ras), (internal.n_PI3K_Ras)) + Math.pow((PI3KCA), (internal.n_PI3K_Ras))) - 1 * internal.kd_PI3K_a * PI3KCA_active;
    dstatedt[13] = 0 + 1 * PP2A * internal.k_ERKactive_PP2A * Math.pow((ERK_active), (internal.n_ERKactive_PP2A)) / (Math.pow((internal.KM_ERKactive_PP2A), (internal.n_ERKactive_PP2A)) + Math.pow((ERK_active), (internal.n_ERKactive_PP2A))) - 1 * PP2A * internal.k_ERKactive_PP2A * Math.pow((ERK_active), (internal.n_ERKactive_PP2A)) / (Math.pow((internal.KM_ERKactive_PP2A), (internal.n_ERKactive_PP2A)) + Math.pow((ERK_active), (internal.n_ERKactive_PP2A))) + 1 * PP2A * internal.k_MekActivePP2A * Math.pow((Mek_active), (internal.n_MekActivePP2A)) / (Math.pow((internal.KM_MekActivePP2A), (internal.n_MekActivePP2A)) + Math.pow((Mek_active), (internal.n_MekActivePP2A))) - 1 * PP2A * internal.k_MekActivePP2A * Math.pow((Mek_active), (internal.n_MekActivePP2A)) / (Math.pow((internal.KM_MekActivePP2A), (internal.n_MekActivePP2A)) + Math.pow((Mek_active), (internal.n_MekActivePP2A)));
    dstatedt[3] = 0 - 1 * Ras_active * internal.k_Raf_RasActive * Math.pow((Raf), (internal.n_Raf_RasActive)) / (internal.KM_Raf_RasActive + Math.pow((Raf), (internal.n_Raf_RasActive))) + 1 * AKT_active * internal.k_Raf_AKT * Math.pow((Raf_active), (internal.n_Raf_AKT)) / (Math.pow((internal.KM_Raf_AKT), (internal.n_Raf_AKT)) + Math.pow((Raf_active), (internal.n_Raf_AKT))) + 1 * RafPP * internal.k_RasActive_RafPP * Math.pow((Raf_active), (internal.n_RasActive_RafPP)) / (Math.pow((internal.KM_RasActive_RafPP), (internal.n_RasActive_RafPP)) + Math.pow((Raf_active), (internal.n_RasActive_RafPP)));
    dstatedt[15] = 0 + 1 * Ras_active * internal.k_Raf_RasActive * Math.pow((Raf), (internal.n_Raf_RasActive)) / (internal.KM_Raf_RasActive + Math.pow((Raf), (internal.n_Raf_RasActive))) + 1 * Raf_active * internal.k_Mek_PP2A * Math.pow((Mek), (internal.n_Mek_PP2A)) / (Math.pow((internal.KM_MekPP2A), (internal.n_Mek_PP2A)) + Math.pow((Mek), (internal.n_Mek_PP2A))) - 1 * Raf_active * internal.k_Mek_PP2A * Math.pow((Mek), (internal.n_Mek_PP2A)) / (Math.pow((internal.KM_MekPP2A), (internal.n_Mek_PP2A)) + Math.pow((Mek), (internal.n_Mek_PP2A))) - 1 * AKT_active * internal.k_Raf_AKT * Math.pow((Raf_active), (internal.n_Raf_AKT)) / (Math.pow((internal.KM_Raf_AKT), (internal.n_Raf_AKT)) + Math.pow((Raf_active), (internal.n_Raf_AKT))) - 1 * RafPP * internal.k_RasActive_RafPP * Math.pow((Raf_active), (internal.n_RasActive_RafPP)) / (Math.pow((internal.KM_RasActive_RafPP), (internal.n_RasActive_RafPP)) + Math.pow((Raf_active), (internal.n_RasActive_RafPP)));
    dstatedt[18] = 0 + 1 * RafPP * internal.k_RasActive_RafPP * Math.pow((Raf_active), (internal.n_RasActive_RafPP)) / (Math.pow((internal.KM_RasActive_RafPP), (internal.n_RasActive_RafPP)) + Math.pow((Raf_active), (internal.n_RasActive_RafPP))) - 1 * RafPP * internal.k_RasActive_RafPP * Math.pow((Raf_active), (internal.n_RasActive_RafPP)) / (Math.pow((internal.KM_RasActive_RafPP), (internal.n_RasActive_RafPP)) + Math.pow((Raf_active), (internal.n_RasActive_RafPP)));
    dstatedt[14] = 0 - 1 * A_SOS * internal.k_Ras_SOS * Math.pow((Ras), (internal.n_Ras_SOS)) / (Math.pow((internal.KM_Ras_SOS), (internal.n_Ras_SOS)) + Math.pow((Ras), (internal.n_Ras_SOS))) + 1 * RasGapActive * internal.k_RasActiveRasGap * Math.pow((Ras_active), (internal.n_RasActiveRasGap)) / (Math.pow((internal.KM_RasActiveRasGap), (internal.n_RasActiveRasGap)) + Math.pow((Ras_active), (internal.n_RasActiveRasGap)));
    dstatedt[4] = 0 + 1 * A_SOS * internal.k_Ras_SOS * Math.pow((Ras), (internal.n_Ras_SOS)) / (Math.pow((internal.KM_Ras_SOS), (internal.n_Ras_SOS)) + Math.pow((Ras), (internal.n_Ras_SOS))) + 1 * Ras_active * internal.k_PI3K_Ras * Math.pow((PI3KCA), (internal.n_PI3K_Ras)) / (Math.pow((internal.KM_PI3K_Ras), (internal.n_PI3K_Ras)) + Math.pow((PI3KCA), (internal.n_PI3K_Ras))) - 1 * Ras_active * internal.k_PI3K_Ras * Math.pow((PI3KCA), (internal.n_PI3K_Ras)) / (Math.pow((internal.KM_PI3K_Ras), (internal.n_PI3K_Ras)) + Math.pow((PI3KCA), (internal.n_PI3K_Ras))) + 1 * Ras_active * internal.k_Raf_RasActive * Math.pow((Raf), (internal.n_Raf_RasActive)) / (internal.KM_Raf_RasActive + Math.pow((Raf), (internal.n_Raf_RasActive))) - 1 * Ras_active * internal.k_Raf_RasActive * Math.pow((Raf), (internal.n_Raf_RasActive)) / (internal.KM_Raf_RasActive + Math.pow((Raf), (internal.n_Raf_RasActive))) - 1 * RasGapActive * internal.k_RasActiveRasGap * Math.pow((Ras_active), (internal.n_RasActiveRasGap)) / (Math.pow((internal.KM_RasActiveRasGap), (internal.n_RasActiveRasGap)) + Math.pow((Ras_active), (internal.n_RasActiveRasGap)));
    dstatedt[17] = 0 + 1 * RasGapActive * internal.k_RasActiveRasGap * Math.pow((Ras_active), (internal.n_RasActiveRasGap)) / (Math.pow((internal.KM_RasActiveRasGap), (internal.n_RasActiveRasGap)) + Math.pow((Ras_active), (internal.n_RasActiveRasGap))) - 1 * RasGapActive * internal.k_RasActiveRasGap * Math.pow((Ras_active), (internal.n_RasActiveRasGap)) / (Math.pow((internal.KM_RasActiveRasGap), (internal.n_RasActiveRasGap)) + Math.pow((Ras_active), (internal.n_RasActiveRasGap)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EGFR_active", "D_SOS", "A_SOS", "Raf", "Ras_active", "Mek_active", "ERK", "ERK_active", "IGFR_active", "PI3KCA", "PI3KCA_active", "AKT_active", "AKT", "PP2A", "Ras", "Raf_active", "Mek", "RasGapActive", "RafPP", "P90RskInactive", "P90Rsk_Active"];
    this.metadata.internalOrder = {A_SOS_init: null, AKT_active_init: null, AKT_init: null, cell_nsclc: null, D_SOS_init: null, EGFR_active_init: null, ERK_active_init: null, ERK_init: null, gamma_EGFR: null, gamma_IGFR: null, IGFR_active_init: null, initial_A_SOS: null, initial_AKT: null, initial_AKT_active: null, initial_D_SOS: null, initial_EGFR_active: null, initial_ERK: null, initial_ERK_active: null, initial_IGFR_active: null, initial_Mek: null, initial_Mek_active: null, initial_P90Rsk_Active: null, initial_P90RskInactive: null, initial_PI3KCA: null, initial_PI3KCA_active: null, initial_PP2A: null, initial_Raf: null, initial_Raf_active: null, initial_RafPP: null, initial_Ras: null, initial_Ras_active: null, initial_RasGapActive: null, k_A_SOS_I: null, k_AKT_PI3K: null, k_D_SOS_P90Rsk: null, k_ERK_MekActive: null, k_ERKactive_PP2A: null, k_Mek_PP2A: null, k_MekActivePP2A: null, k_P90Rsk_ERKActive: null, k_PI3K_EGF1R: null, k_PI3K_IGF1R: null, k_PI3K_Ras: null, k_Raf_AKT: null, k_Raf_RasActive: null, k_Ras_SOS: null, k_RasActive_RafPP: null, k_RasActiveRasGap: null, k_SOS_E: null, kd_AKT: null, kd_P90Rsk: null, kd_PI3K_a: null, KM_A_SOS_I: null, KM_AKT_PI3K: null, KM_D_SOS_P90Rsk: null, KM_ERK_MekActive: null, KM_ERKactive_PP2A: null, KM_MekActivePP2A: null, KM_MekPP2A: null, KM_P90Rsk_ERKActive: null, KM_PI3K_EGF1R: null, KM_PI3K_IGF1R: null, KM_PI3K_Ras: null, KM_Raf_AKT: null, KM_Raf_RasActive: null, KM_Ras_SOS: null, KM_RasActive_RafPP: null, KM_RasActiveRasGap: null, KM_SOS_E: null, Mek_active_init: null, Mek_init: null, n_A_SOS_I: null, n_AKT_PI3K: null, n_D_SOS: null, n_ERKactive_PP2A: null, n_Mek_PP2A: null, n_MekActivePP2A: null, n_PI3K_E: null, n_PI3K_I: null, n_PI3K_Ras: null, n_Raf_AKT: null, n_Raf_RasActive: null, n_Ras_SOS: null, n_RasActive_RafPP: null, n_RasActiveRasGap: null, n_SOS: null, P90Rsk_Active_init: null, P90RskInactive_init: null, PI3KCA_active_init: null, PI3KCA_init: null, PP2A_init: null, Raf_active_init: null, Raf_init: null, RafPP_init: null, Ras_active_init: null, Ras_init: null, RasGapActive_init: null};
    this.metadata.variableOrder = {EGFR_active: null, D_SOS: null, A_SOS: null, Raf: null, Ras_active: null, Mek_active: null, ERK: null, ERK_active: null, IGFR_active: null, PI3KCA: null, PI3KCA_active: null, AKT_active: null, AKT: null, PP2A: null, Ras: null, Raf_active: null, Mek: null, RasGapActive: null, RafPP: null, P90RskInactive: null, P90Rsk_Active: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
