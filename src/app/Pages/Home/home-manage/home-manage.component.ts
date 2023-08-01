import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { getBooks } from '../store/books.actions'
import { BooksState } from '../store/books.reducers'
@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent implements OnInit {
  books$ = this.store.select('books')

  constructor (private store: Store<BooksState>) {}

  ngOnInit (): void {
    this.getBooks()
  }

  getBooks () {
    this.store.dispatch(getBooks())
  }
}
