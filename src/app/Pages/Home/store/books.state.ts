import { BooksModle } from '../../Models/Books.model'

export interface BooksState {
  books: ReadonlyArray<BooksModle>
}

export const InitialState: ReadonlyArray<BooksModle> = []
