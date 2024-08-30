import { Component, Input } from '@angular/core';
import { MensajesComponent } from "../mensajes/mensajes.component";
import { Usuario } from '../models/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajesComponent,CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
 @Input() usuario:Usuario []=[]
 recibirUsuario(nuevosUsuarios: Usuario[]) {
  this.usuario = [...this.usuario, ...nuevosUsuarios];  
}
}
