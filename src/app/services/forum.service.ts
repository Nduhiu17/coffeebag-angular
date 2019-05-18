import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forum } from '../models/Forum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  forumsUrl: string = 'https://forum-java-api.herokuapp.com/api/v1/forums';
  constructor(private http: HttpClient) {}
  getForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.forumsUrl}`);
  }
}
