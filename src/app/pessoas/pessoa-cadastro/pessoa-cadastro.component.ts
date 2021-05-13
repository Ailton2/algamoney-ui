import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
              private toasty:ToastyService) { }

  pessoa=new Pessoa();

  ngOnInit(): void {
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

}
