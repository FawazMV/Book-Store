// import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects'
// import { Injectable } from '@angular/core';
// import { BookService } from 'src/app/Services/book.service';
// import { loadPosts, loadPostsSuccess } from './books.actions';

import { Injectable } from '@angular/core'
import { BookService } from 'src/app/Services/book.service'
import { getBooks, getBooksSuccess } from './books.actions'
import { catchError, EmptyError, exhaustMap, map, mergeMap } from 'rxjs'

// @Injectable()
// export class BooksEffects {
//     constructor(private actions$: Actions, private service: BookService) { }

//     loadPosts$ = createEffect(() => {
//         return this.actions$.pipe(
//             ofType(loadPosts),
//             mergeMap((action) => {
//                 return this.service.getBooks().pipe(
//                     map((posts) => {
//                         console.log(posts);
//                         return loadPostsSuccess({ posts });
//                     })
//                 );
//             })
//         );
//     });
// }

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBooks),
      mergeMap(() =>
        this.service.getBooks().pipe(
          map(response => {
            console.log(response)
            return getBooksSuccess({ books: response.books })
          })
          //   catchError(() => EmptyError)
        )
      )
    )
  )

  constructor (private actions$: Actions, private service: BookService) {}
}
//
