import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

import * as moment from 'moment';

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

  pesquisar(): Promise<any>{
  return  this.http.get(`${this.lancamentosUrl}`)
     .toPromise()
     .then(response => response)
  }

  pesquisarDesc(filtro:LancamentoFiltro): Promise<any>{
    const params = new HttpParams()
  
    params.set('page',filtro.pagina.toString());
    params.set('size',filtro.itensPorPagina.toString());


    if(filtro.descricao){
      params.set('descricao',filtro.descricao.toString());
    }
    if(filtro.dataVencimentoInicio){
      params.set('dataVencimentoDe',moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }
    if(filtro.dataVencimentoFim){
      params.set('dataVencimentoAte',moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return  this.http.get(this.lancamentosUrlFiltro ,{ params})
    .pipe(
   
    )
       .toPromise()
       .then(response => response)
    }

    excluir(id:number):Promise<void>{


       return this.http.delete(`${this.lancamentosUrl}/${id}`)
       .toPromise()
       .then()


    }

}
