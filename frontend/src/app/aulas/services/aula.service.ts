// frontend/src/app/services/aula.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulaService {
  private apiUrl = 'http://localhost:5000/aulas'; 

  constructor(private http: HttpClient) {}

  getAulasByModulo(modulo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${modulo}`);
  }
}
