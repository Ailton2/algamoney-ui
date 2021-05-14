import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Lancamento, Pessoa } from 'src/app/core/model';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { PessoasModule } from 'src/app/pessoas/pessoas.module';
import { LancamentoService } from '../lancamento.service';

import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-lancamneto-cadastro',
  templateUrl: './lancamneto-cadastro.component.html',
  styleUrls: ['./lancamneto-cadastro.component.css']
})
export class LancamnetoCadastroComponent implements OnInit {

  tipos=[
       { label :'Receita',value:'RECEITA'},
       { label : 'Despesa', value:'DESPESA'}
  ];

  categorias:any[];

  pessoas:any=[];

  lancamento = new Lancamento();

  constructor(private categoriaService:CategoriaService,
              private lancamentoService:LancamentoService,
              private toasty:ToastyService,
              private errorHandler:ErrorHandlerService,
              private pessoasService:PessoaService,
              private route:ActivatedRoute,
              private title:Title) { }

  ngOnInit(): void {
    const codigoLancamento = this.route.snapshot.params['codigo'];
     this.title.setTitle('Cadastro de Lancamento')
    if(codigoLancamento){
      this.carregarLancamento(codigoLancamento)
    }

   this.listarCategorias();
   this.listarPessoas();
  }

  get editando(){
    return Boolean(this.lancamento.id)
  }

  novo(form:NgForm){
    form.reset();
    this.lancamento = new Lancamento();
    
  }

  carregarLancamento(codigo:number){
       this.lancamentoService.buscarPorCodigo(codigo)
       .then(lancamento =>{
          this.lancamento = lancamento
       })
       .catch(erro => this.errorHandler.handler(erro))

  }


  salvar(form: NgForm){
      if(this.editando){
        this.atualizarLancamento(form)
      }else{
        this.adicionarLancamento(form)
      }
  }
  
  adicionarLancamento(form: NgForm){
     this.lancamentoService.salvarLancamento(this.lancamento)
     .then(()=> {
         this.toasty.success('lancamento adicionado com sucesso.')
         form.reset()
         this.lancamento = new Lancamento();
     })
     .catch(erro => this.errorHandler.handler(erro))
     
  }
  atualizarLancamento(forn:NgForm){
    this.lancamentoService.atualizar(this.lancamento)
    .then(lancamento =>{
      this.lancamento = this.lancamento;
      this.toasty.success('Atualizado com sucesso!')
    })
   
  }


  listarCategorias(){
   return this.categoriaService.buscaCategorias()
      
     .then(lista => {
       this.categorias = lista.map(c => ({label:c.nome,value:c.id}));
      })
     .catch(erro => this.errorHandler.handler(erro))
  }

  listarPessoas(){
    this.pessoasService.todasPessoas()
    .then(dados => {
        this.pessoas = dados.map(p => ({label:p.nome,value:p.id}))
    })
    .catch(erro => this.errorHandler.handler(erro));
   
    
  }

}
