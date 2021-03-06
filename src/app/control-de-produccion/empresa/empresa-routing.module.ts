import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent} from './empresa.component';
import { EmpresaListarComponent } from './empresa-listar.component';
import { EmpresaDetalleComponent } from './empresa-detalle.component';
import { EmpresaCrearComponent } from './empresa-crear.component';

const routes: Routes = [
  { path: '', redirectTo: 'control', pathMatch: 'full' },
  {
    path : 'control', component : EmpresaComponent,
    children: [
      {path: '', component: EmpresaListarComponent},
      {path: 'empresas', component :  EmpresaCrearComponent},
      {path: 'empresas/:empresaId', component: EmpresaDetalleComponent },
      ]
  },
  { path: 'g-data.motriz/users-admin/sucursal/:empresaId', loadChildren : 'app/control-de-produccion/sucursal/sucursal.module#SucursalModule' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
