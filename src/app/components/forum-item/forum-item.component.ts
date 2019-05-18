import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forum } from '../../models/Forum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.css']
})
export class ForumItemComponent implements OnInit {
  @Input() forum: Forum;
  forumsUrl: string = 'https://forum-java-api.herokuapp.com/api/v1/forums';
  constructor(private http: HttpClient) {}
  //get forums
  getTodos(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.forumsUrl}`);
  }

  ngOnInit() {}
}
