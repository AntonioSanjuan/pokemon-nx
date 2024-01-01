export interface PokemonsPaginationResponseDto<T> {
    count: number
    next: string
    previous: any
    results: T[]
}