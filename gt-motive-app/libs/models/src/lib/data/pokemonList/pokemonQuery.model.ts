import { PokemonType } from "../pokemonTypes/pokemonTypesResponseDto.model"

export interface PokemonQuery {
    currentPage: number,
    totalPages: number,
    totalSize: number,
    pageSize: number,
    filters: PokemonQueryFilters
}

export interface PokemonQueryFilters {
    byText: string,
    byType: string
    byTypes: PokemonType[]
}