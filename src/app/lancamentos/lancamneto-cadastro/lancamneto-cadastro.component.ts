import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamneto-cadastro',
  templateUrl: './lancamneto-cadastro.component.html',
  styleUrls: ['./lancamneto-cadastro.component.css']
})
export class LancamnetoCadastroComponent implements OnInit {

  tipos=[
         { label:'Receita',value:'RECEITA'},
         { label:'Despesa',value:'DESPESA'},

  ];

  categorias=[
    { label:'Alimentacao',value:1},
    { label:'transporte',value:2},
  ];

  pessoas=[
    { label:'Jao',value:1},
    { label:'Maria',value:2},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
