import { LOCALE_ID, NgModule } from '@angular/core';
import localept from '@angular/common/locales/pt';
import { HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
registerLocaleData(localept, 'pt');

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';






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

  ],
  providers: [
   
    { provide:LOCALE_ID,useValue:'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
