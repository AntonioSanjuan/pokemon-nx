import { PokemonTypesFiltersResponseDto } from "@gt-motive-app/libs/models"
import { getpokemonTypesFiltersRequestError, getpokemonTypesFiltersRequestSuccess, initialPokemonFiltersState, pokemonFiltersReducer } from "../pokemonFilters"

describe('pokemonListReducer', () => {
    beforeEach(() => {

    })
    describe('getpokemonTypesFiltersRequestError action', () => {
        it('should handle getpokemonTypesFiltersRequestError action', () => {
            const action = getpokemonTypesFiltersRequestError()
            const state = pokemonFiltersReducer(initialPokemonFiltersState, action)

            expect(state).toEqual(initialPokemonFiltersState)
        })
    })
    
    describe('getpokemonTypesFiltersRequestSuccess action', () => {
        const pokemonTypeFiltersSut = {count: 2, results: [{}, {}]} as PokemonTypesFiltersResponseDto;
        
        it('should handle getpokemonTypesFiltersRequestSuccess action', () => {
            const action = getpokemonTypesFiltersRequestSuccess({ pokemonsTypeFilters: pokemonTypeFiltersSut})
            const state = pokemonFiltersReducer(initialPokemonFiltersState, action)

            expect(state).toEqual({...initialPokemonFiltersState,types: pokemonTypeFiltersSut})
        })
    })

})