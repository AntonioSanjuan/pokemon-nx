export interface PokemonsResponseDto {
    count: number
    next: string
    previous: any
    results: PokemonDto[]
  }
  
  export interface PokemonDto {
    name: string
    url: string
  }
  