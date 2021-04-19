import { Meme, MemeSearch } from './../models/meme.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private apiUrl = `${environment.apiUrl}meme`;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
      accept: 'text/plain'
    })
  };

  getMemes(): Observable<Meme[]> {
    return this.http.get<Meme[]>(`${this.apiUrl}`);
  }

  searchMemes(memeSearch: MemeSearch): Observable<Meme[]> {
    return this.http.post<Meme[]>(`${this.apiUrl}/byCondition`,JSON.stringify(memeSearch), this.httpOptions);
  }

  getById(id: string): Observable<Meme> {
    return this.http.get<Meme>(`${this.apiUrl}/${id}`);
  }

  add(newMeme: Meme): Observable<Meme> {
    return this.http.post<Meme>(this.apiUrl, JSON.stringify(newMeme), this.httpOptions);
  }

  edit(newMeme: Meme): Observable<Meme> {
    return this.http.put<Meme>(`${this.apiUrl}`, JSON.stringify(newMeme), this.httpOptions);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}
