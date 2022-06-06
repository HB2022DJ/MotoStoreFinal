import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moto } from '../models/moto';

@Injectable({
  providedIn: 'root'
})
export class MotoService {
 apiUrl = environment.api
  constructor(private http: HttpClient) { }

  getAll(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl + '/motos.json');
  }

  getOneMoto(id: number) : Observable<Moto>{
    return this.http.get<Moto>(this.apiUrl + '/motos/' + id)
    }
}
