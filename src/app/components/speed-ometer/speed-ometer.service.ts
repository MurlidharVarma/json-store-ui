import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SpeedOmeterModel } from './speed-ometer.model';

@Injectable({
  providedIn: 'root'
})
export class SpeedOmeterService {

  HOST_URL = environment.hostUrl;

  constructor(private http: HttpClient) { }

  getData():Observable<SpeedOmeterModel>{
    return this.http.get<SpeedOmeterModel>(this.HOST_URL,{headers:{"Content-Type":"application/json"}});
  }

  saveData(data: SpeedOmeterModel){
    return this.http.post<SpeedOmeterModel>(this.HOST_URL, data, {"responseType": 'text' as 'json'});
  }

  updateData(data: SpeedOmeterModel){
    return this.http.put<SpeedOmeterModel>(this.HOST_URL, data, {"responseType": 'text' as 'json'});
  }
}
