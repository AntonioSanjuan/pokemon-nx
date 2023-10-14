export interface PokemonQuery {
    currentPage: number,
    filters: {
        byText: string,
        byType: string
    }
}