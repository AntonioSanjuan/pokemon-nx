import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { PokemonResponseDto } from '@gt-motive-app/libs/models';

@Injectable()
export class PokemonDetailsService {
    private http: HttpClient = inject(HttpClient);

    public getPokemonByName(name: string): Observable<PokemonResponseDto> {
        return this.http.get<PokemonResponseDto>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }
}