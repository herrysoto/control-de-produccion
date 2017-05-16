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