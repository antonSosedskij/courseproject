import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileInfoDto } from '../../interfaces/file-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) {}


  uploadFile(file: File) : Observable<FileInfoDto> {
    const formData = new FormData();
    formData.append('file', file, file.name)

    let API_URL = `${environment.apiUrl}File`;
    return this._http.post<FileInfoDto>(API_URL, formData);
  }
}
