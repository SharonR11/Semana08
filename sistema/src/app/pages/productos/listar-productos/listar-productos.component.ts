import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/users';
import { UsuarioService } from 'src/app/services/usuario.service';
// import {Swal} from 'sweetalert2';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit{
  
  listUsuarios: Usuario[]=[];

  constructor(private _usuarioService: UsuarioService) {

  }
  
  ngOnInit(): void {
    this.obtenerUsuarios();

  }

  private obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    })
  }
  eliminarUsuario(id:number){
    this._usuarioService.deleteUsuario(id).subscribe(data => {
      console.log(data);
      this.obtenerUsuarios();
    })
  }
  
  // eliminarProducto(id: any){
  //   this._usuarioService.deleteUsuario(id).subscribe(data => {

  //     Swal.fire({
  //       title: 'Eliminacion de Usuario',
  //       text: "¿Desea eliminar el Usuario?",
  //       icon: 'info',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Aceptar',
  //       cancelButtonText: 'Cancelar'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         console.log(data);
  //         this.obtenerUsuarios();
  //       }
  //     })
  //   })
  // }

}
