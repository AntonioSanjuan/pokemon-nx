import { PokemonsPaginationResponseDto } from "../common/pokemonPaginationDto.model"
import { PokemonResponseDto } from "../pokemon/pokemonResponseDto.model"

export type PokemonsResponseDto = PokemonsPaginationResponseDto<PokemonResponseDto>

