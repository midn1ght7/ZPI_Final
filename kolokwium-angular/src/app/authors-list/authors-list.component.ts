import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Author } from "src/app/models/author";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private route: ActivatedRoute) { 
    this.authors = [];
  }

  getAuthors = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/Authors");
      const authorsJson = await response.json();
      this.authors = authorsJson;
    }
    catch (err)
    {
      console.log(err);
    }
  }

  ngOnInit(): void {
    this.getAuthors();
  }

}
