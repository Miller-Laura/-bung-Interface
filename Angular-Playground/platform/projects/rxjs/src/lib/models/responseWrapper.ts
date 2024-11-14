export interface ResponseWrapper<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export type StarWarsType = 'people' | 'films' | 'planets';
