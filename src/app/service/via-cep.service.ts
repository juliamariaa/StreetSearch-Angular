import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCEPService {

  zipCode: string = ''

  private url: string = "https://viacep.com.br/ws/"

  constructor(private http: HttpClient) { }

  getCEP(zipCode: string): Observable<any> {
    const urlComplete = `${this.url}${zipCode}/json/`
    return this.http.get<any>(urlComplete)
  }
}
