export interface PokemonsResponseDto {
    count: number
    next: string
    previous: any
    results: PokemonMinifiedDto[]
  }
  
  export interface PokemonMinifiedDto {
    name: string
    url: string
  }
  