import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Lancamento, Pessoa } from 'src/app/core/model';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { PessoasModule } from 'src/app/pessoas/pessoas.module';
import { LancamentoService } from '../lancamento.service';



@Component({
  selector: 'app-lancamneto-cadastro',
  templateUrl: './lancamneto-cadastro.component.html',
  styleUrls: ['./lancamneto-cadastro.component.css']
})
export class LancamnetoCadastroComponent implements OnInit {

  tipos=[];

  categorias=[{label:'Alimentacao',value:1}];

  pessoas:any=[];

  lancamento = new Lancamento();

  constructor(private categoriaService:CategoriaService,
              private lancamentoService:LancamentoService,
              private toasty:ToastyService,
              private errorHandler:ErrorHandlerService,
              private pessoasService:PessoaService) { }

  ngOnInit(): void {
   this.listarCategorias();
   this.listarPessoas();
  }

  salvar(form: NgForm){
     this.lancamentoService.salvarLancamento(this.lancamento)
     .then(()=> {
         this.toasty.success('lancamento adicionado com sucesso.')
         form.reset()
         this.lancamento = new Lancamento();
     })
     .catch(erro => this.errorHandler.handler(erro))
     
  }


  listarCategorias(){
   return  this.categoriaService.buscaCategorias()
      
     .then(categorias => {
       // this.categorias = categorias. map (c => ({label:c.nome,value:c.id}));
      })
     .catch(erro => this.errorHandler.handler(erro))
  }

  listarPessoas(){
    this.pessoasService.todasPessoas()
    .then(dados => this.pessoas = dados)
    .catch(erro => this.errorHandler.handler(erro));
   
    
  }

}
