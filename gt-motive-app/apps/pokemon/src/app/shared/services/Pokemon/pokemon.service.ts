import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { PokemonsResponseDto } from './models/pokemonsResponseDto.model';
@Injectable()
export class PokemonService {
    private http: HttpClient = inject(HttpClient);

    public getPokemonPage(page: number, pageSize: number): Observable<PokemonsResponseDto> {
        return this.http.get<PokemonsResponseDto>(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${pageSize * page}`)
    }
}