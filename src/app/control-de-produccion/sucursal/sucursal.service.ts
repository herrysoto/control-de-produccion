import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Sucursal } from './sucursal';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class SucursalService {
  private baseUrl: string = environment.API_ENDPOINT;
  constructor(private http: Http) { }
  getAll(empresaId: string): Observable<Sucursal[]> {
    let sucursal$ = this.http
      .get(`${this.baseUrl}/sucursales/${empresaId}`, { headers: this.getHeaders() })
      .map(mapSucursales);
    return sucursal$;
  }
  obtener(sucursalId: string): Observable<any> {
    let sucursal$ = this.http
      .get(`${this.baseUrl}/sucursal/${sucursalId}`, { headers: this.getHeaders() })
      .map(mapSucursal);
    return sucursal$;
  }
  crear(sucursal: Sucursal, empresaId: string): Observable<Response> {
    return this
      .http
      .post(`${this.baseUrl}/sucursal/${empresaId}`, JSON.stringify(sucursal), { headers: this.getHeaders() }).catch(handleError);
  }
  actualizar(sucursal: Sucursal): Observable<Response> {
    console.log(sucursal)
    return this
      .http.put(`${this.baseUrl}/sucursal/${sucursal.sucursalId}`, JSON.stringify(sucursal),
      { headers: this.getHeaders() }).catch(handleError);
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
function toSucursal(r: any): Sucursal {
  let sucursal = <Sucursal>({
    nombre: r.nombre,
    direccion: r.direccion,
    contacto: r.contacto,
    estado: r.estado,
    sucursalId: r.sucursalId,
    ubigeoId: r.ubigeoId,
    ubigeo: r.ubigeo
  });
  return sucursal;
}
function mapSucursal(response: Response): Sucursal {
  return toSucursal(response.json());
}

function mapSucursales(response: Response): Sucursal[] {
  return response.json().map(toSucursal);
}


function handleError(error: any) {
  let errorMsg = error.message || `Error al consumir api_endpoint`;
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}