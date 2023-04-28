import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AdvertShortInfoDto } from '../../interfaces/advert-short-info';
import { AdvertInfoDto } from '../../interfaces/advert-info';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor( private _http: HttpClient ) { 
  }

  getAdverts():Observable<AdvertShortInfoDto[]>{
    let API_URL = `${environment.apiUrl}Advert`;
    return this._http.get<AdvertShortInfoDto[]>(API_URL);
  }

  getById(id: number){
    let API_URL = `${environment.apiUrl}Advert/${id}`;
    return this._http.get<AdvertInfoDto>(API_URL);
  }
}
