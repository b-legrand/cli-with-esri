import { User } from "./user";

/**
 * Utilisateur Caiman du kit condor.
 */
export class CaimanUser extends User {
  public customParameters: Map<string, string>;
}
