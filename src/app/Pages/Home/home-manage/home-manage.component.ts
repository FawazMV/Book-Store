import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent implements OnInit {
  books = []

  constructor(private service: BookService) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.service.getBooks().subscribe(response => {
      this.books = response.books;
      console.log(this.books)
    })
  }
}
