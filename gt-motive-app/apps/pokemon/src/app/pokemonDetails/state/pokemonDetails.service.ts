import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { PokemonService } from '@gt-motive-app/services/pokemon';

@Injectable()
export class PokemonDetailsService extends PokemonService {

    public getPokemonByName(name: string): Observable<PokemonResponseDto> {
        return this.getRawPokemon(name)
    }
}