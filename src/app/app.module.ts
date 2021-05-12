import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { NavbarComponent } from './core/navbar/navbar.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentoService } from './lancamentos/lancamento.service';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent
   

  ],
  imports: [
    BrowserModule,
    LancamentosModule,
    PessoasModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule ,
    ConfirmDialogModule,
    ToastyModule.forRoot()
    



  ],
  providers: [LancamentoService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
