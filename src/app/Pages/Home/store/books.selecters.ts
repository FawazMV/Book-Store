import { createSelector } from '@ngrx/store'
import { BooksModle } from '../../../Models/Books.model'
import { BooksState } from './books.state'

export const bookSelector = createSelector(
  (state: BooksState) => state.books,
  (books: ReadonlyArray<BooksModle>) => books
)
