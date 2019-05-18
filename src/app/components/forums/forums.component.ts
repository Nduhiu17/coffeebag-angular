import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/Forum';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  forums: Forum[];
  constructor(private forumService: ForumService) {}

  ngOnInit() {
    this.forumService.getForums().subscribe(forums => {
      this.forums = forums;
    });
  }
}
