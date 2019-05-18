import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {
  @Output() addForum: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const forum = {
      title: this.title
    };
    this.addForum.emit(forum);
  }
}
