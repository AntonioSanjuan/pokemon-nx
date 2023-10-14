import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { PokemonsResponseDto } from './models/pokemonsResponseDto.model';
@Injectable()
export class PokemonService {
    private pageSize = 20;
    private http: HttpClient = inject(HttpClient);

    public getPokemonPage(page: number): Observable<PokemonsResponseDto> {
        return this.http.get<PokemonsResponseDto>(`https://pokeapi.co/api/v2/pokemon?limit=${this.pageSize}&offset=${this.pageSize * page}`)
    }
}