import { createSelector } from '@ngrx/store'
import { BooksModle } from '../../../Models/Books.model'
import { BooksState } from './books.state'

export const bookSelector = createSelector(
  (state: BooksState) => state.books,
  (books: ReadonlyArray<BooksModle>) => books
)

// const getSBooksState = createFeatureSelector<AppState>('books')

// export const singleBook = createSelector(
//   (state: BooksState) => state.books,
//   (books: ReadonlyArray<BooksModle>, props: { id: string }) =>
//     books.find(book => book.id === props.id)
// )
// export const singleBookDetails = (id: string) =>
//   createSelector(
//     (state: BooksState) => state.books,
//     (books: ReadonlyArray<BooksModle>) => books.find(book => book.id === id)
//   )

// export const singleBookDetails = createSelector(
//   getSBooksState,
//   (state: AppState, props: { id: string }) => {
//     const valu = state.books.books.find(book => book.isbn13 === props.id)
//   }
// )
