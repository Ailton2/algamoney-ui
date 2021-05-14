import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';

import * as moment from 'moment';
import { Lancamento } from '../core/model';

export class LancamentoFiltro{
  descricao:String;
  dataVencimentoInicio:Date;
  dataVencimentoFim:Date;
  pagina =0;
  itensPorPagina =5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

lancamentosUrl='http://localhost:8080/lancamentos';
lancamentosUrlFiltro='http://localhost:8080/lancamentos/filtro';

  constructor(private http:HttpClient) { }

    //Headers
    httpOptions={
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
   }

  pesquisar(): Promise<any>{
  return  this.http.get(`${this.lancamentosUrl}`)
     .toPromise()
     .then(response => response)
  }

  pesquisarDesc(filtro:LancamentoFiltro): Promise<any>{
    const httpParams = new HttpParams()
  
    httpParams.set('page',filtro.pagina.toString());
    httpParams.set('size',filtro.itensPorPagina.toString());


    if(filtro.descricao){
      httpParams.set('descricao',filtro.descricao.toString());
    }
    if(filtro.dataVencimentoInicio){
      httpParams.set('dataVencimentoDe',moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }
    if(filtro.dataVencimentoFim){
      httpParams.set('dataVencimentoAte',moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return  this.http.get(this.lancamentosUrlFiltro ,{ params:httpParams})
    .pipe()
       .toPromise()
       .then(response => response)
    }

    excluir(id:number):Promise<void>{
       return this.http.delete(`${this.lancamentosUrl}/${id}`)
       .toPromise()
       .then()

    }

    getLancamentoPorDescricao(){
      const httpParams = new HttpParams({
          fromObject:{
            descricao:'sal'
          }

      });

     return this.http.get(this.lancamentosUrlFiltro,{params:httpParams})
    }

    salvarLancamento(lancamento:Lancamento){
    return  this.http.post(this.lancamentosUrl,JSON.stringify(lancamento),this.httpOptions)
       .toPromise()
       .then(response => response);
    }

    atualizar(lancamento: Lancamento): Promise<Lancamento> {
      return this.http.put(`${this.lancamentosUrl}/${lancamento.id}`,
          JSON.stringify(lancamento),this.httpOptions)
        .toPromise()
        .then(response => {
          const lancamentoAlterado = response as Lancamento;
  
          this.converterStringsParaDatas([lancamentoAlterado]);
  
          return lancamentoAlterado;
        });
    }
  
    buscarPorCodigo(id: number): Promise<Lancamento> {
      return this.http.get(`${this.lancamentosUrl}/${id}`)
        .toPromise()
        .then(response => {
          const lancamento = response as Lancamento;
          
          this.converterStringsParaDatas([lancamento]);
  
          return lancamento;
        });
    }
  
    private converterStringsParaDatas(lancamentos: Lancamento[]) {
      for (const lancamento of lancamentos) {
        lancamento.dataVencimento = moment(lancamento.dataVencimento,
          'YYYY-MM-DD').toDate();
  
        if (lancamento.dataPagamento) {
          lancamento.dataPagamento = moment(lancamento.dataPagamento,
            'YYYY-MM-DD').toDate();
        }
      }
    }
}
