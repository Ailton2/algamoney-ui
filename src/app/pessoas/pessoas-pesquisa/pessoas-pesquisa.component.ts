import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit  {

  pessoas:any=[]

  ngOnInit(): void {
    this.pesquisarTodos()
  }

  constructor(
          private pessoaService:PessoaService,
          private toasty:ToastyService,
          private errorHandler:ErrorHandlerService,
          private confirmation:ConfirmationService){}


 //buscar todas as pessoas
  pesquisarTodos(){
     this.pessoaService.todasPessoas()
        .then(pessoas => this.pessoas =pessoas)
        .catch(erro => this.errorHandler.handler(erro));
        
  }

  //espera a confirmacao para excluir
  ConfirmaExclusao(pessoa:any){
     this.confirmation.confirm({
      message :'Tem certeza que deseja excluir?',
      accept:()=>{
        this.excluir(pessoa);
      
      }
     
     })
    
  }
 //metodo excluir
  excluir(pessoa:any){
    this.pessoaService.deletar(pessoa.id)
    .then(()=>{
      this.toasty.success('Pessoa excluido com sucesso!');
      this.pesquisarTodos();
    })
    .catch(erro => this.errorHandler.handler(erro));
    
   
  }

  mudarStatusAtivo(pessoa:any){
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.id, novoStatus)
    .then(( )=>{
      const acao = novoStatus ? 'ativada' : 'desativada';

      pessoa.ativo = novoStatus;
      this.toasty.success(`Pessoa ${acao} com sucesso!`);

    })
    .catch(erro => this.errorHandler.handler(erro));

  }
}
