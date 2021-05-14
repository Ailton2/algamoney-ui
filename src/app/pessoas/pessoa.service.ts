import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Pessoa } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //injetando o httpClient
  constructor(private httpClient:HttpClient) { }

  //api rest
  pessoasUrl='http://localhost:8080/pessoas';

  //Headers
  httpOptions={
     headers : new HttpHeaders({
       'Content-Type':'application/json'
     })
  }

  todasPessoas(){

    return this.httpClient.get(this.pessoasUrl)
    .toPromise()
    .then()

  }

  salvarPessoas(pessoa:Pessoa){
   return  this.httpClient.post(this.pessoasUrl,JSON.stringify(pessoa), this.httpOptions)
    .toPromise()
    .then(res => res)

  }

  deletar(id:number){

    return this.httpClient.delete(this.pessoasUrl+'/'+id)
    .toPromise()
    .then()
    
  }

  mudarStatus(id:number,ativo:boolean){
    return this.httpClient.put(this.pessoasUrl+'/'+id+'/ativo',ativo, this.httpOptions)
    .toPromise()
    .then()

  }

  buscarPorCodigo(id:number){
    return this.httpClient.get(this.pessoasUrl+'/'+id)
    .toPromise()
    


  }

  atualizar(pessoa:Pessoa){
  return this.httpClient.put(this.pessoasUrl+'/'+pessoa.id,this.httpOptions)
    .toPromise()
    .then(pessoa => pessoa)

  }



}
