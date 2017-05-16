import { PrincipalComponent } from './control-de-produccion/principal/principal.component';
import { PrincipalModule } from './control-de-produccion/principal/principal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './rxjs-operators';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent} from './error404.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrincipalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
