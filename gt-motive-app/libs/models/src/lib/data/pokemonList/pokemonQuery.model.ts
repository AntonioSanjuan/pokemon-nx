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
}