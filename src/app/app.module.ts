
import { ContextMenuModule,GrowlModule,SplitButtonModule,DropdownModule,DialogModule,TieredMenuModule,DataTableModule, SharedModule,
    ButtonModule,PasswordModule,InputTextModule,MessagesModule,InputMaskModule,ConfirmDialogModule ,ConfirmationService} from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './rxjs-operators';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent} from './error404.component';
import { AppComponent } from './app.component';
import { HomeModule } from './administracion/home/home.module';
import { EmpresaModule } from './administracion/empresa/empresa.module';
import { SucursalModule } from './administracion/sucursal/sucursal.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    EmpresaModule,
    AppRoutingModule,
    ContextMenuModule,GrowlModule,SplitButtonModule,DropdownModule,DialogModule,TieredMenuModule,DataTableModule, SharedModule,
    ButtonModule,PasswordModule,InputTextModule,MessagesModule,InputMaskModule,ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
