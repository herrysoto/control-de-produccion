import { BeanClienteVehiculo } from './Bean/BeanClienteVehiculo';
import { BeanCliente } from './Bean/BeanCliente';
import { BeanControldeproduccion } from './Bean/BeanControldeproduccion';

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Controlproduccionservice {

  //para local
    private _produccion1Url = 'http://localhost:8080/api/v1/ordenesservicio'; //JAVA
    private _produccion2Url = 'http://localhost:8080/api/v1/grillaportecnico';
    private _produccion3Url = 'http://localhost:8080/api/v1/grillaporfecha';
    private _produccion4Url = 'http://localhost:8080/api/v1/grillaporOS';
    private _produccion5Url = 'http://localhost:8080/api/v1/grillapornrollave';
    private _produccion6Url = 'http://localhost:8080/api/v1/datoscliente';
    private _produccion7Url = 'http://localhost:8080/api/v1/datosclientevehiculo';
   
  lessons = [];
  constructor(private http: Http) { }

  getgrillaporcategoria(codestado: string,codsucursal:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion1Url + '/' + codestado+'/'+codsucursal)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getgrillaportecnico(codsucursal: string,codnumtecnico:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion2Url + '/' + codsucursal+'/'+codnumtecnico)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getgrillaporfecha(codsucursal: string,fechainicial:string,fechafinal:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion3Url + '/' + codsucursal+'/'+fechainicial+'/'+fechafinal)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getgrillaporOS(codsucursal: string,codigoOS:string): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion4Url + '/' + codsucursal+'/'+codigoOS)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  getgrillaporLlave(codsucursal: string,nroLlave:number): Observable<BeanControldeproduccion[]> {
    return this.http.get(this._produccion5Url + '/' + codsucursal+'/'+nroLlave)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getcliente(doccliente: string): Observable<BeanCliente[]> {
    return this.http.get(this._produccion6Url + '/' + doccliente)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getclientevehiculo(placa: string,chasis:string): Observable<BeanClienteVehiculo[]> {
    return this.http.get(this._produccion7Url + '/' + placa+'/'+chasis)
      .map((res: Response) => res.json())

      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}