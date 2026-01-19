export interface Pokemon {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
}

export interface PokemonListResponse {
  count: number;
  results: Array<{ name: string; url: string }>;
}

export interface Type {
  name: string;
}

export interface TypeResponse {
  results: Type[];
}
