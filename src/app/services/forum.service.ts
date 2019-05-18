import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forum } from '../models/Forum';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  forumsUrl: string = 'https://forum-java-api.herokuapp.com/api/v1/forums';
  constructor(private http: HttpClient) {}

  //getting forums
  getForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.forumsUrl}`);
  }

  //adding forums
  addForum(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(this.forumsUrl, forum, httpOptions);
  }
}
