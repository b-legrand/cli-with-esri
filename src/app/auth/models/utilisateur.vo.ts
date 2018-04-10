export enum AuthType {
  Caiman = "CAIMAN",
  Sumatra = "SUMATRA",
  Mock = "MOCK",
}

/**
 * Utilisateur authentifié pmsig.
 * @see InformationUtilisateurBean.java
 */
export interface InformationUtilisateur {
  login?: string;
  mail?: string;
  nom?: string;
  prenom?: string;
  profils: string[];
  typeConnexion: AuthType;
}
