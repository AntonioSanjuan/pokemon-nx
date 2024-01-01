import { PokemonsPaginationResponseDto } from "../common/pokemonPaginationDto.model"

export type PokemonTypesFiltersResponseDto = PokemonsPaginationResponseDto<PokemonType>

export interface PokemonType {
  name: string
  url: string
}

  