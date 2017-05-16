import { BeanControldeproduccion } from './Bean/BeanControldeproduccion';
import { Controlproduccionservice } from './principal.service';
import { Pipe, PipeTransform } from '@angular/core';


import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'principal',
    styleUrls: ['principal.component.css'],
    templateUrl: 'principal.component.html'
})
export class PrincipalComponent implements OnInit {
    fechaini: Date= new Date();
    fechafin: Date= new Date();
    es: any;
    beancontroldeproduccion: BeanControldeproduccion[];
    errorMessage: string;

    fecIniS:string;
    fecFinS:string;
    dateFormat:string =  'dd/MM/yyyy';

  ngAfterViewInit(): void {

      // Valoreses inicales de las fechas
      //   this._titleService.setTitle( 'Orden de servicio' );
      this.fechaini.setDate(this.fechaini.getDate() - 4);
  }
    constructor(private _controlproduccionservice : Controlproduccionservice) {
     }

    categoriaservicio(valor:string){
        console.log(valor);
        this._controlproduccionservice.getgrillaporcategoria(valor,'01')
                .subscribe(
                       cuadro => {this.beancontroldeproduccion = cuadro
                        },
                       error =>  this.errorMessage = <any>error);}

    ObtenerGrillaPorTecnico(codnumtecnico:string){
        this._controlproduccionservice.getgrillaportecnico('01',codnumtecnico)
                .subscribe(
                       cuadro => {this.beancontroldeproduccion = cuadro
                           
                        },
                       error =>  this.errorMessage = <any>error);}


    Mandarfecha(){
      
    //   fecha inicial 
      let dayini = this.fechaini.toISOString().slice(8,10).replace(/\//g,'-');
      let monthini = this.fechaini.toISOString().slice(5,7).replace(/\//g,'-');
      let yearini = this.fechaini.toISOString().slice(0,4).replace(/\//g,'-');
      this.fecIniS = dayini+'-'+monthini+'-'+yearini;
      console.log(this.fecIniS);
        // fecha final
      let dayfin = this.fechafin.toISOString().slice(8,10).replace(/\//g,'-');
      let monthfin = this.fechafin.toISOString().slice(5,7).replace(/\//g,'-');
      let yearfin = this.fechafin.toISOString().slice(0,4).replace(/\//g,'-');
      this.fecFinS = dayfin+'-'+monthfin+'-'+yearfin;
      console.log(this.fecFinS);

    //   LLAMANDO AL SERVICIOS PARA OBTENER LA GRILLA ENVIANDO LA FECHA
    this._controlproduccionservice.getgrillaporfecha('01',this.fecIniS,this.fecFinS)
        .subscribe(
            grillaxfecha => {this.beancontroldeproduccion = grillaxfecha
                           
                        },
                       error =>  this.errorMessage = <any>error
        );
    }

    ngOnInit() { 
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
        }
    }
}