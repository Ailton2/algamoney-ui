import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient:HttpClient) { }


  categoriaUrl='http://localhost:8080/categorias'



  buscaCategorias(){
     return this.httpClient.get(this.categoriaUrl)
    .toPromise()
    .then()
    
  }

}
