import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas:any=[
    { nome:'Ailton Ferreira',cidade:'Fortaleza',estado:'CE',status:'Ativo' },
     {nome:'Marcelo Matos',cidade:'Rio de Janeiro',estado:'RJ',status:'Inativo'} ,
     {nome:'Maria Silva',cidade:'Sao paulo',estado:'SP',status:'Inativo'} ,
 ]

}
