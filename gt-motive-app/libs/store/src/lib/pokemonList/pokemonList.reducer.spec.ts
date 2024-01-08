import { PokemonQueryFilters, PokemonResponseDto, PokemonType, PokemonsResponseDto } from "@gt-motive-app/libs/models"
import { clearPokemonList, getNextPokemonListPageRequestError, getNextPokemonListPageRequestSuccess, getPokemonListRequestError, getPokemonListRequestSuccess, setSelectedPokemon, updatePokemonListQueryFilters, updatePokemonTypeFilter } from "./pokemonList.actions"
import { PokemonListState, initialPokemonListState, pokemonListReducer } from "./pokemonList.reducer"
import { initialPokemonFiltersState } from "../pokemonFilters"

describe('pokemonListReducer', () => {
    beforeEach(() => {

    })
    describe('getPokemonListRequestError action', () => {
        it('should handle getPokemonListRequestError action', () => {
            const action = getPokemonListRequestError()
            const state = pokemonListReducer(initialPokemonListState, action)

            expect(state).toEqual(initialPokemonListState)
        })
    })

    describe('getPokemonListRequestSuccess action', () => {
        const pokemonsSut = {
            count: 123,
            results: [{}, {}]
        } as PokemonsResponseDto;
        it('should handle getPokemonListRequestSuccess action', () => {
            const action = getPokemonListRequestSuccess({ pokemons: pokemonsSut })
            const state = pokemonListReducer(initialPokemonListState, action)

            expect(state.list).toEqual(pokemonsSut.results)
            expect(state.selected).toEqual([])
            expect(state.query).toEqual({
                ...state.query,
                currentPage: 1,
                totalPages: Math.ceil(pokemonsSut.count / pokemonsSut.results.length),
                totalSize: pokemonsSut.count
            })
        })
    })

    describe('getNextPokemonListPageRequestError action', () => {
        it('should handle getNextPokemonListPageRequestError action', () => {
            const action = getNextPokemonListPageRequestError()
            const state = pokemonListReducer(initialPokemonListState, action)

            expect(state).toEqual(initialPokemonListState)
        })
    })

    describe('getNextPokemonListPageRequestSuccess action', () => {
        const pokemonsSut = {
            count: 123,
            results: [{}, {}]
        } as PokemonsResponseDto;
        it('should handle getNextPokemonListPageRequestSuccess action', () => {
            const action = getNextPokemonListPageRequestSuccess({ pokemons: pokemonsSut})
            const state = pokemonListReducer(initialPokemonListState, action)

            expect(state.list).toEqual(initialPokemonListState.list.concat(pokemonsSut.results))
            expect(state.query).toEqual({
                ...state.query,
                currentPage: initialPokemonListState.query.currentPage + 1,
            })
        })
    })

    describe('clearPokemonList action', () => {
        it('should handle clearPokemonList action', () => {
            const action = clearPokemonList()
            const state = pokemonListReducer(initialPokemonListState, action)

            expect(state).toEqual(initialPokemonListState)
        })
    })
    
    describe('setSelectedPokemon action', () => {
        const pokemonSut = {
             name: 'pokemonName'
        } as PokemonResponseDto;

        it('should handle setSelectedPokemon action if pokemon is not selected', () => {
            const initialState = {
                ...initialPokemonListState,
                selected: [{}],
                list: [ pokemonSut, {} ]
            } as PokemonListState

            const action = setSelectedPokemon({ pokemon: pokemonSut})
            const state = pokemonListReducer(initialState, action)

            expect(state.selected).toEqual([...initialState.selected, pokemonSut])
            expect(state.list).toEqual(initialState.list)
        })

        it('should handle setSelectedPokemon action if pokemon is selected', () => {
            const initialState = {
                ...initialPokemonListState,
                selected: [{}, pokemonSut],
                list: [ pokemonSut, {} ]
            } as PokemonListState

            const action = setSelectedPokemon({ pokemon: pokemonSut})
            const state = pokemonListReducer(initialState, action)

            expect(state.selected).toEqual([...initialState.selected.filter((pokemon) => pokemon !== pokemonSut)])
            expect(state.list).toEqual(initialState.list)
        })
    })

    describe('updatePokemonListQueryFilters action', () => {
        const filtersSut = {
             byText: 'testing by testt'
        } as PokemonQueryFilters;

        it('should handle updatePokemonListQueryFilters action', () => {

            const action = updatePokemonListQueryFilters({ filters: filtersSut})
            const state = pokemonListReducer(initialPokemonListState, action)

            expect(state).toEqual({
                ...initialPokemonListState, 
                query: {...initialPokemonListState.query, 
                    filters: filtersSut
                }
            })
        })
    })
    
    describe('updatePokemonTypeFilter action', () => {
        const byTypeSut = {
             name: 'by type name test'
        } as PokemonType;

        it('should handle updatePokemonTypeFilter action if byType is selected', () => {
            const initialState = {
                ...initialPokemonListState,
                query: {
                    ...initialPokemonListState.query,
                    filters: {
                        ...initialPokemonListState.query.filters,
                    }
                },
            } as PokemonListState

            const action = updatePokemonTypeFilter({ selectedPokemonType: byTypeSut})
            const state = pokemonListReducer(initialState, action)

            expect(state).toEqual({
                ...initialPokemonListState, 
                query: {...initialPokemonListState.query, 
                    filters: {
                        ...initialPokemonListState.query.filters,
                        byType: byTypeSut
                    }
                }
            })
        })

        it('should handle updatePokemonTypeFilter action if byType isnt selected', () => {
            const initialState = {
                ...initialPokemonListState,
                query: {
                    ...initialPokemonListState.query,
                    filters: {
                        ...initialPokemonListState.query.filters,
                        byType: byTypeSut
                    }
                },
            } as PokemonListState

            const action = updatePokemonTypeFilter({ selectedPokemonType: byTypeSut})
            const state = pokemonListReducer(initialState, action)

            expect(state).toEqual({
                ...initialPokemonListState, 
                query: {...initialPokemonListState.query, 
                    filters: {
                        ...initialPokemonListState.query.filters,
                        byType: undefined
                    }
                }
            })
        })
    })
})