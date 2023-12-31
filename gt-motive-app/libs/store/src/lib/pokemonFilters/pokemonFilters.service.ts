import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { PokemonsResponseDto, PokemonResponseDto, PokemonTypesFiltersResponseDto } from '@gt-motive-app/libs/models';
@Injectable()
export class PokemonFiltersService {
    private http: HttpClient = inject(HttpClient);

    public getPokemonTypeFilters(): Observable<PokemonTypesFiltersResponseDto> {
        return this.http.get<PokemonTypesFiltersResponseDto>(`https://pokeapi.co/api/v2/type`)
    }
}