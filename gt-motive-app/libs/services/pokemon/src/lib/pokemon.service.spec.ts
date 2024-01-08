import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonResponseDto, PokemonType, PokemonTypesFiltersResponseDto, PokemonsResponseDto } from '@gt-motive-app/libs/models';

describe('PokemonService', () => {
  let httpMock: HttpTestingController;
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonService);
  });

  describe('Unit tests', () => {
    describe('Unit tests', () => {
      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    })
    describe('Integration tests', () => {
      it('getRawPokemons should made http request', () => {
        const pageSut = 5;
        const pageSizeSut = 30
        
        const mockData = {
          count: 10000,
          next: 'next test',
          previous: 'next test',
          results: [{}, {}]
        } as PokemonsResponseDto;
  
        service.getRawPokemons(pageSut, pageSizeSut).subscribe((resp) => {
          expect(resp).toEqual(mockData)
        })
  
        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon?limit=${pageSizeSut}&offset=${pageSizeSut * pageSut}`)
        expect(req.request.method).toBe('GET'); // Verificar que se hizo un request GET
        req.flush(mockData); // Simular la respuesta del servidor
      })
  
      it('getRawPokemon should made http request', () => {
        const nameSut = 'testName';
        
        const mockData = {
          height: 8123,
          name: 'testName'
        } as PokemonResponseDto;
  
        service.getRawPokemon(nameSut).subscribe((resp) => {
          expect(resp).toEqual(mockData)
        })
  
        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${nameSut.toLowerCase()}`)
        expect(req.request.method).toBe('GET'); // Verificar que se hizo un request GET
        req.flush(mockData); // Simular la respuesta del servidor
      })
  
      it('getRawPokemonTypes should made http request', () => {      
        const mockData = {
          count: 10000,
          next: 'next test',
          previous: 'next test',
          results: [{}, {}]
        } as PokemonTypesFiltersResponseDto;
  
        service.getRawPokemonTypes().subscribe((resp) => {
          expect(resp).toEqual(mockData)
        })
  
        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/type`)
        expect(req.request.method).toBe('GET'); // Verificar que se hizo un request GET
        req.flush(mockData); // Simular la respuesta del servidor
      })
  
      it('getRawPokemonsByType should made http request', () => {     
        const typeSut: PokemonType = { name: 'typeNameTest', url: 'urlTest'};
  
  
        const mockData = {
          count: 10000,
          next: 'next test',
          previous: 'next test',
          results: [{}, {}, {}, {}]
        } as PokemonTypesFiltersResponseDto;
  
        service.getRawPokemonsByType(typeSut).subscribe((resp) => {
          expect(resp).toEqual(mockData)
        })
  
        const req = httpMock.expectOne(`https://pokeapi.co/api/v2/type/${typeSut.name}`)
        expect(req.request.method).toBe('GET'); // Verificar que se hizo un request GET
        req.flush(mockData); // Simular la respuesta del servidor
      })
    })


  })
});
