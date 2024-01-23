import { Injectable } from '@angular/core'
import { Observable, defaultIfEmpty, forkJoin } from 'rxjs'
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { PokemonService } from '@gt-motive-app/services/pokemon'

@Injectable()
export class PokemonComparitionService extends PokemonService {
    
    public getComparisonPokemons(pokemonNames: string[]): Observable<PokemonResponseDto[]> {
        return forkJoin(pokemonNames.map((pokemonName) => this.getRawPokemon(pokemonName))).pipe(
            defaultIfEmpty([])
          );
    }
}