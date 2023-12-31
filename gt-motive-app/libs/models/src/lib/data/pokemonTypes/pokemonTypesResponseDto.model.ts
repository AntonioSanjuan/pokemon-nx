export interface PokemonTypesFiltersResponseDto {
  count: number
  next: string
  previous: any
  results: PokemonType[]
}

export interface PokemonType {
  name: string
  url: string
}

  