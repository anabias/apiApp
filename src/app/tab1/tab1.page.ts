import { Component } from '@angular/core';
import { UserService } from '../servicos/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //variaveis para paginação
  public page = 1;
  public totalPaginas = 0;

  //dados dos usuarios
  public usuariosPagina = 0;
  public totalUsuario=0;

  //lista para usuarios
  public listaUsuarios =[];

  constructor(private userService: UserService ) {}

  public buscarUsuarios(pagina:number){
    this.userService.listarUsuarios(pagina).subscribe(dados=>{

    });
  }

}
