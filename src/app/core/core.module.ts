import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

    ConfirmDialogModule,
    ToastyModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers:[
    ErrorHandlerService,
    LancamentoService,
    ConfirmationService,
    PessoaService
  ]

})
export class CoreModule { }
