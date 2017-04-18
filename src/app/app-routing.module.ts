import { EmpresaComponent } from './administracion/empresa/empresa.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { PageNotFoundComponent} from './error404.component';

export const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', redirectTo: 'control', pathMatch: 'full' },
  { path: 'control', component : EmpresaComponent },
  // {path: 'g-data.motriz/users-login', component: LoginComponent },
  // { path: 'control', loadChildren : 'app/administracion/empresa.module#EmpresaModule' },
  // { path: 'g-data.motriz/users-login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
