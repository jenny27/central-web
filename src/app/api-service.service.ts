import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ChargePoint } from './ChargePoint';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }
  localUrl = 'http://localhost:8080/central/api';

  headers: HttpHeaders = new HttpHeaders({
    Authorization : 'No Auth',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Content-type': 'application/json'
  });

  public getChargePoints(url?: string) {
    console.log(this.headers);
    return this.httpClient.get<ChargePoint[]>(`${this.localUrl}/chargePoint`, { headers: this.headers });
  }

  public getChargePointById(id) {
    console.log(id);
    return this.httpClient.get<ChargePoint>(`${this.localUrl}/chargePoint/${id}`, { headers: this.headers });
  }

  public createChargePoint(chargePoint: ChargePoint) {
    console.log("Estamos aqui");
    console.log(chargePoint);
    return this.httpClient.post(`${this.localUrl}/chargePoint`,  chargePoint, { headers: this.headers });
  }

  public updateChargePoint(chargePoint: ChargePoint) {
    console.log(chargePoint);
    const id = chargePoint.id;
    console.log(id);
    return this.httpClient.put(`${this.localUrl}/chargePoint/${id}`, chargePoint, { headers: this.headers });
  }

  public deleteChargePoint(id) {
    console.log(id);
    return this.httpClient.delete(`${this.localUrl}/chargePoint/${id}`, { headers: this.headers });
  }
}