import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author: Author;

  constructor() {
    this.author = {
      id: 0,
      firstName: "",
      lastName: "",
      email: ""
    };
   }


  ngOnInit(): void {

  }

}
