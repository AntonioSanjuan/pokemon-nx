export interface PokemonQuery {
    currentPage: number,
    totalPages: number,
    totalSize: number,
    pageSize: number,
    filters: {
        byText: string,
        byType: string
    }
}