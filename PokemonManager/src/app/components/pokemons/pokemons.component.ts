import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons = [
    { 'id': 1, 'nombre': 'Bulbasaur', 'categoria': 'grano', 'tipo': ['planta', 'veneno'], 'altura': 0.70, 'peso': 6.9, 'imagen': "./assets/pokemons/1.png" },
    { 'id': 2, 'nombre': 'Ivysaur', 'categoria': 'grano', 'tipo': ['planta', 'veneno'], 'altura': 1, 'peso': 13, 'imagen': "./assets/pokemons/2.png" },
    { 'id': 3, 'nombre': 'Venusaur', 'categoria': 'grano', 'tipo': ['planta', 'veneno'], 'altura': 2, 'peso': 100, 'imagen': "./assets/pokemons/3.png" },
    { 'id': 4, 'nombre': 'Charmander', 'categoria': 'lagarto', 'tipo': ['lagarto', 'fuego'], 'altura': 0.60, 'peso': 8.5, 'imagen': "./assets/pokemons/4.png" },
    { 'id': 5, 'nombre': 'Charmaleon', 'categoria': 'llama', 'tipo': ['fuego'], 'altura': 1.1, 'peso': 19, 'imagen': "./assets/pokemons/5.png" },
    { 'id': 6, 'nombre': 'Charizard', 'categoria': 'llama', 'tipo': ['fuego', 'volador'], 'altura': 1.7, 'peso': 90.5, 'imagen': "./assets/pokemons/6.png" },
  ];

  pokemonSeleccionado='';
}
