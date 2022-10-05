import { Directive, Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/modelos/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://api.solodata.es/";
  constructor(private http:HttpClient) { }
  loginByEmail(params:LoginI):Observable<ResponseI>{
    let url = this.url + "auth"; 
    console.log("Datos a enviar");
    console.log(params);
    return this.http.post<ResponseI>(url,params);
  }

  actualizar(params: any):Observable<ResponseI>{
    let url = this.url + "pacientes"; 
    console.log("Datos a enviar");
    console.log(params);
    return this.http.put<ResponseI>(url,params);
  }
  eliminarPaciente(params: any):Observable<ResponseI>{
    console.log("datos a enviar")
    console.log(params)
    let url = this.url + "pacientes"; 
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'appication/json'
      }),
      body: params
    }
    return this.http.delete<ResponseI>(url, options);
  }
  nuevo(params: any):Observable<ResponseI>{
    let url = this.url + "pacientes"
    console.log("Datos a enviar");
    console.log(params);
    return this.http.post<ResponseI>(url,params);
  }

  Paciente(params:any):Observable<ResponseI>{
    let url = this.url + "pacientes"; 
    console.log("Datos a enviar");
    console.log(params);
    return this.http.get<ResponseI>(url, {
      params: params
    });
  }
}
