import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/Forum';
import { ForumService } from '../../services/forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-forum',
  templateUrl: './post-forum.component.html',
  styleUrls: ['./post-forum.component.css']
})
export class PostForumComponent implements OnInit {
  forums: Forum[];
  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit() {}

  addForum(forum: Forum) {
    this.forumService.addForum(forum).subscribe(forum => {
      this.router.navigate(['./']);
      this.forums.push(forum);
    });
  }
}
