import { PokemonsPaginationResponseDto } from "../common/pokemonPaginationDto.model"

export type PokemonsResponseDto = PokemonsPaginationResponseDto<PokemonMinifiedDto>

export interface PokemonMinifiedDto {
  name: string
  url: string
}
