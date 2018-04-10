/**
 * Modèle de données du service /profil cf le module lib-gestion-profils-java
 * @see HabilitationBean.java
 */
export interface Habilitation {
  applications: Application[];
  codePortail: string;
  dateValidite: string;
  utilisateur: string;
}

export interface Application {
  profils: string[];
  donnee?: Donnee[];
  fonctionnalites?: Fonctionnalite[];
}

export interface Donnee {
  cle: string;
  droits: string[];
  filtres?: string[];
}

export interface Fonctionnalite {
  cle: string;
  droits?: TypeDroit[];
}

export enum TypeDroit {
  Couche = "COUCHE",
  Donnee = "SERVICE",
}

export default Habilitation;
