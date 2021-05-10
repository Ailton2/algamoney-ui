import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {

  lancamentos:any =[

    {tipo:'DESPESA',descricao:'compra de pao',dataVencimento:new Date(5/6/2017),
    dataPagamento:null,valor:4.34 ,pessoa:'Seu ze'},
    {tipo:'RECEITA',descricao:'compra ',dataVencimento:new Date(2018/5/30),
    dataPagamento:new Date(2017/5/30),valor:8.34 ,pessoa:'DONA MARIA'},
    {tipo:'RECEITA',descricao:'compra nada ',dataVencimento:new Date(2016/5/30),
    dataPagamento:null,valor:89.34 ,pessoa:'DONA Joana'},
  ]
}
