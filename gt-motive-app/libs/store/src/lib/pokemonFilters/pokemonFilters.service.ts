import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { PokemonTypesFiltersResponseDto } from '@gt-motive-app/libs/models';
import { PokemonService } from '@gt-motive-app/services/pokemon';
@Injectable()
export class PokemonFiltersService extends PokemonService {

    public getPokemonTypeFilters(): Observable<PokemonTypesFiltersResponseDto> {
        return this.getRawPokemonTypes()
    }
}