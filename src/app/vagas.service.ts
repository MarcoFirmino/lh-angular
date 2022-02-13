import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.model';



@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "";
  constructor(private _httpCliente: HttpClient) {}

  getVagas(): Observable<Vaga[]>{
    return this._httpCliente.get<Vaga[]>(this.url);
  }
}
