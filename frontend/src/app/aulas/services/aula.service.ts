import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulaService {
  private apiUrl = 'http://localhost:5000/aulas';

  constructor(private http: HttpClient) { }

  getAula(modulo: string, numero: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${modulo}/${numero}`);
  }

}
