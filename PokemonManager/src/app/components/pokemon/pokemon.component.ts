import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemon = { 'id': 0, 'nombre': '', 'categoria': '', 'tipo': [''], 'altura': 0, 'peso': 0, 'imagen': "" }; 

  @Output() eventoClicImagen = new EventEmitter();
  clickEnImagen() {
  this.eventoClicImagen.emit(this.pokemon.nombre);
  }
}
