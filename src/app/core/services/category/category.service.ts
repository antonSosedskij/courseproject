import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryShortInfoDto } from '../../interfaces/category-short-info';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) {}

  getCategories() : Observable<CategoryShortInfoDto[]> {
    let API_URL = `${environment.apiUrl}Category`;
    return this._http.get<CategoryShortInfoDto[]>(API_URL);
  }
}
