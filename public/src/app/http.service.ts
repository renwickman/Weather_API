import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
}

  
  getWeather(api){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+api+'&appid=2b666f4bc6b268577c602fb4a2bd7280')
  }
}
