import { InformationUtilisateur } from "./utilisateur.vo";
import { Habilitation } from "./habilitation.vo";

/**
 * Utilisateur du kit-condor, enrichi des données SIGADM de la PMSIG.
 */
export class User {
  public login: string;
  public infos?: InformationUtilisateur;
  public rights?: Habilitation;
  public firstName: string;
  public lastName: string;
  public role: string;
  public structure: string;
  public isAnonymous: boolean = false;
  [key: string]: any;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName || ""}`;
  }

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}

export const ANONYMOUS_USER: User = {
  isAnonymous: true,
  login: "anonyme",
} as User;
