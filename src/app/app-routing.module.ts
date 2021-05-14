import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamnetoCadastroComponent } from './lancamentos/lancamneto-cadastro/lancamneto-cadastro.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';


const rotas:Routes =[
       { path:'', redirectTo:'lancamentos',pathMatch:'full'},
       { path:'lancamentos',component:LancamentosPesquisaComponent},
       { path:'lancamentos/novo',component:LancamnetoCadastroComponent},
       { path:'pessoas',component:PessoasPesquisaComponent},
       { path:'pessoas/novo',component:PessoaCadastroComponent},
       { path:'lancamentos/:codigo',component:LancamnetoCadastroComponent},
       { path:'pessoas/:codigo',component:PessoaCadastroComponent},
       { path:'pagina-nao-encontrada',component:PaginaNaoEncontradaComponent},
       { path:'**', redirectTo :'pagina-nao-encontrada'},


];



@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
