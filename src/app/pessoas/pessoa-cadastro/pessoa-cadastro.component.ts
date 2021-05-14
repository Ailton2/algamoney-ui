import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Pessoa } from 'src/app/core/model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  constructor(private pessoaSevice:PessoaService,
              private errorHandler:ErrorHandlerService,
              private toasty:ToastyService,
              private route:ActivatedRoute) { }

  pessoa=new Pessoa();


  ngOnInit(): void {

    const codigoPessoa = this.route.snapshot.params['codigo'];
    
   if(codigoPessoa){
     this.carregarPessoa(codigoPessoa)
   }
  }

  carregarPessoa(codigo:number){
    this.pessoaSevice.buscarPorCodigo(codigo)
    .then(pessoa =>{
       this.pessoa = pessoa;
    })
    .catch(erro => this.errorHandler.handler(erro))


  }
  get editando(){
    return Boolean(this.pessoa.id)
  }

  salvar(form:NgForm){
      if(this.editando){
        this.atualizarPessoa(form)
      }else{
       this.salvarPessoas(form)
      }

  }
 

  salvarPessoas(form:NgForm){
      this.pessoaSevice.salvarPessoas(this.pessoa)
      .then(()=> {
        this.toasty.success('Pessoa salva com sucesso.')
        form.reset()
        this.pessoa = new Pessoa();
    })
    .catch(erro => this.errorHandler.handler(erro))
       
  }

  atualizarPessoa(form:NgForm){
    this.pessoaSevice.atualizar(this.pessoa)
    .then(pessoa  => {
      this.pessoa = pessoa;
      this.toasty.success('Pessoa atualizada!')
 

    })
    .catch(erro => this.errorHandler.handler(erro))

  }

}
