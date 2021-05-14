import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient:HttpClient) { }


  categoriaUrl='http://localhost:8080/categorias'



  buscaCategorias():Promise<Categoria[]>{
     return this.httpClient.get(this.categoriaUrl)
    .toPromise()
    .then()
    
  }

}
