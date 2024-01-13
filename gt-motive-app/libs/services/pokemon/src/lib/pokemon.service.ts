import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonResponseDto, PokemonType, PokemonTypesFiltersResponseDto, PokemonsByTypeResponseDto, PokemonsResponseDto } from '@gt-motive-app/libs/models';
import { ApiService } from '@gt-motive-app/services/api';

export class PokemonService {
  private apiService: ApiService = inject(ApiService)

  public getRawPokemons(page: number, pageSize: number): Observable<PokemonsResponseDto> {
    return this.apiService.get<PokemonsResponseDto>(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${pageSize * page}`)
  }

  public getRawPokemon(name: string): Observable<PokemonResponseDto> {
    return this.apiService.get<PokemonResponseDto>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
  }

  public getRawPokemonTypes(): Observable<PokemonTypesFiltersResponseDto> {
    return this.apiService.get<PokemonTypesFiltersResponseDto>(`https://pokeapi.co/api/v2/type`)
  }

  public getRawPokemonsByType(type: PokemonType): Observable<PokemonsByTypeResponseDto> {
    return this.apiService.get<PokemonsByTypeResponseDto>(`https://pokeapi.co/api/v2/type/${type.name}`)
  }
}
