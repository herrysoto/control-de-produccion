import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { HomeComponent } from './../home/home.component';
import { SharedModule } from './../../shared/shared.module';
import {CalendarModule} from 'primeng/primeng';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ SharedModule, PrincipalRoutingModule,CalendarModule],
  declarations: [PrincipalComponent],
  providers: []
})
export class PrincipalModule { }
