import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonResponseDto, PokemonsResponseDto } from '@gt-motive-app/libs/models';

export class PokemonService {
  private http: HttpClient = inject(HttpClient);

  public getRawPokemons(page: number, pageSize: number): Observable<PokemonsResponseDto> {
    return this.http.get<PokemonsResponseDto>(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${pageSize * page}`)
  }

  public getRawPokemon(name: string): Observable<PokemonResponseDto> {
    return this.http.get<PokemonResponseDto>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
}
}
