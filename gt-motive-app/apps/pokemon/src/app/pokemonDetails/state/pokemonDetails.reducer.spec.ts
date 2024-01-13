import { PokemonResponseDto } from "@gt-motive-app/libs/models"
import { getPokemonByNameRequestSuccess } from "./pokemonDetails.actions"
import { initialPokemonDetailsState, pokemonDetailsReducer } from "./pokemonDetails.reducer"

describe('pokemonDetailsReducer', () => {
    describe('getPokemonByNameRequestSuccess action', () => {
        const pokemonSut = { name: 'nameTest' } as PokemonResponseDto;
        it('should handle getPokemonByNameRequestSuccess action', () => {
            const action = getPokemonByNameRequestSuccess({ pokemon: pokemonSut})
            const state = pokemonDetailsReducer(initialPokemonDetailsState, action)

            expect(state).toEqual({...initialPokemonDetailsState, pokemon: pokemonSut })
        })
    })
})