import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hussar } from '../models/hussar';

const hussarUrl: string = 'http://localhost:12735/api/hussar';

@Injectable({
  providedIn: 'root'
})
export class HussarsService {

  constructor(private httpHusar: HttpClient) { }

  getAllHussars() {
    return this.httpHusar.get(hussarUrl);
  }

  getHussar(id: number){
    return this.httpHusar.get(`${hussarUrl}/${id}`);
  }

  createHussar(data: Hussar){
    return this.httpHusar.post(hussarUrl, data);
  }

  updateHussar(id: number, data: Hussar){
    return this.httpHusar.put(`${hussarUrl}/${id}`, data);
  }

  deleteHussar(id: number){
    return this.httpHusar.delete(`${hussarUrl}/${id}`);
  }
}
