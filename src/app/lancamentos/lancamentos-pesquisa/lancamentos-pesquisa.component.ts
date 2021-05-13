import { Component, Injectable, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})

@Injectable()
export class LancamentosPesquisaComponent implements OnInit  {

  filtro = new LancamentoFiltro();

  lancamentos:any =[];

  constructor(
    private lancamantoService:LancamentoService,
    private errorHandler:ErrorHandlerService,
    private toasty:ToastyService,
    private confirmation:ConfirmationService){}

  ngOnInit(){
    this.pesquisar();
  }

  pesquisar(){
       this.lancamantoService.pesquisar()
       .then(lancamentos => this.lancamentos = lancamentos)
       .catch(erro => this.errorHandler.handler(erro));

  }
  pesquisarDesc(){

    this.lancamantoService.pesquisarDesc(this.filtro)
    .then(lancamentos => this.lancamentos = lancamentos);

  }

  ConfirmaExclusao(lancamento:any){
        this.confirmation.confirm({
        message :'Tem certeza que deseja excluir?',
        accept:()=>{
          this.excluir(lancamento);
        }
        });
  }

  excluir(lancamento:any){
    this.lancamantoService.excluir(lancamento.id)
    .then(()=>{
      this.pesquisar()

      this.toasty.success('Lancamento excluido com sucesso!');
    })
    .catch(erro => this.errorHandler.handler(erro));
  }

  buscarPorParams(){
    this.lancamantoService.getLancamentoPorDescricao().
    subscribe(lancamentos => this.lancamentos = lancamentos)
  }

}
