import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonType } from '@gt-motive-app/libs/models';
import { ApiService } from '@gt-motive-app/services/api';

describe('PokemonService', () => {
  let service: PokemonService;
  let apiService: ApiService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService, ApiService]
    });
    service = TestBed.inject(PokemonService);
    apiService = TestBed.inject(ApiService)
  });

  describe('Unit tests', () => {
    describe('Unit tests', () => {
      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    })
    describe('Integration tests', () => {
      it('getRawPokemons should made apiService request', () => {
        const apiServiceSpy = jest.spyOn(apiService, 'get')
        const pageSut = 5;
        const pageSizeSut = 30
  
        service.getRawPokemons(pageSut, pageSizeSut).subscribe((resp) => {
          expect(apiServiceSpy).toHaveBeenCalled()
        })
  
      })
  
      it('getRawPokemon should made apiService request', () => {
        const apiServiceSpy = jest.spyOn(apiService, 'get')
        const nameSut = 'testName';
  
        service.getRawPokemon(nameSut).subscribe((resp) => {
          expect(apiServiceSpy).toHaveBeenCalled()
        })
      })
  
      it('getRawPokemonTypes should made apiService request', () => {      
        const apiServiceSpy = jest.spyOn(apiService, 'get')

        service.getRawPokemonTypes().subscribe((resp) => {
          expect(apiServiceSpy).toHaveBeenCalled()
        })
      })
  
      it('getRawPokemonsByType should made http request', () => {     
        const apiServiceSpy = jest.spyOn(apiService, 'get')
        const typeSut: PokemonType = { name: 'typeNameTest', url: 'urlTest'};
  
        service.getRawPokemonsByType(typeSut).subscribe((resp) => {
          expect(apiServiceSpy).toHaveBeenCalled()
        })
      })
    })


  })
});
