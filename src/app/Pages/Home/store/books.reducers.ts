import { createReducer, on } from '@ngrx/store'
import { BooksModle } from '../../Models/Books.model'
import { getBooks, getBooksSuccess } from './books.actions'

export interface BooksState {
  books: ReadonlyArray<BooksModle>
}

const InitialState: ReadonlyArray<BooksModle> = []

export const BooksReducers = createReducer(
  InitialState,
  on(getBooksSuccess, (state, { books }) => [...books])
)
