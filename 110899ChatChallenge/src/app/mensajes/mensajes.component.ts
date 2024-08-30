import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {
  
  @Output() usu = new EventEmitter<Usuario[]>();
  @Input() nombre:string="";

  mensaje :string="";


  enviar(){
    if(this.mensaje!=""){
      const nuevoUsuario: Usuario = { nombre: this.nombre, fecha: new Date(), texto: this.mensaje };
    this.usu.emit([nuevoUsuario]);  

    this.mensaje=""
    }else{
      alert("Sebe ingresar un mensaje en "+ this.nombre)
    }
    
  }

}
