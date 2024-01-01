import { Injectable, inject } from '@angular/core'
import { Observable, combineLatest, forkJoin, map, of, switchMap } from 'rxjs'
import { PokemonsResponseDto, PokemonResponseDto } from '@gt-motive-app/libs/models';
import { PokemonService } from '@gt-motive-app/services/pokemon'

@Injectable()
export class PokemonListService extends PokemonService {
    
    public getPokemonPage(page: number, pageSize: number): Observable<PokemonsResponseDto> {
        return this.getRawPokemons(page, pageSize).pipe(
            switchMap((pokemons: PokemonsResponseDto) => {
                const requests = pokemons.results.map((pokemon: PokemonResponseDto) => this.getRawPokemon(pokemon.name))
                return combineLatest([of(pokemons), forkJoin<PokemonResponseDto[]>(requests)]);
            }),
            map(([pokemons, rawPokemons]: [PokemonsResponseDto, PokemonResponseDto[]]) => {
                return {
                    ...pokemons,
                    results: rawPokemons
                };
            })
        )
    }
}