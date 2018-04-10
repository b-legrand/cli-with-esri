/**
 * Emballage des réponses service PMSIG.
 */
export interface MultipleResultResponse<T> {
  resultats: T[];
}

export interface SingleResultResponse<T> {
  resultat: T;
}

export type Response<T> = SingleResultResponse<T> | MultipleResultResponse<T>;
