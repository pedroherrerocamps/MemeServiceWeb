import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Setting } from '../models/setting.model';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private apiUrl = `${environment.apiUrl}setting`;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      accept: 'text/plain'
    })
  };

  getSettings(): Observable<Setting[]> {
    return this.http.get<Setting[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<Setting> {
    return this.http.get<Setting>(`${this.apiUrl}/${id}`);
  }

  getByName(name: string): Observable<Setting> {
    return this.http.get<Setting>(`${this.apiUrl}/${name}/name`);
  }

  add(newSetting: Setting): Observable<Setting> {
    return this.http.post<Setting>(this.apiUrl, JSON.stringify(newSetting), this.httpOptions);
  }

  edit(newSetting: Setting): Observable<Setting> {
    return this.http.put<Setting>(`${this.apiUrl}`, JSON.stringify(newSetting), this.httpOptions);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}
