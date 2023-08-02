import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs'
import { Store } from '@ngrx/store'
import {
  addToCart,
  addToCartSuccess,
  cartCountChange,
  cartDelete,
  localCart,
  localCartSuccess
} from './cart.action'
import { setModal } from 'src/app/Store/shared/shared.actions'
import { CartService } from 'src/app/Services/cart.service'
import { getCartStates } from './cart.selectors'

@Injectable()
export class CartEffects {
  constructor (
    private actions$: Actions,
    private store: Store,
    private service: CartService
  ) {}

  addToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToCart),
      map(() => addToCartSuccess())
    )
  })

  addToCartSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addToCartSuccess),
        tap(() => {
          this.store.dispatch(
            setModal({ message: 'Successfully added to cart' })
          )
          this.store.select(getCartStates).subscribe(items => {
            this.service.setCartinLocal(items)
          })
        })
      )
    },
    { dispatch: false }
  )

  cartCountChangeEffects$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartCountChange),
        tap(() => {
          this.store.select(getCartStates).subscribe(items => {
            this.service.setCartinLocal(items)
          })
        })
      ),
    { dispatch: false }
  )

  cartDeleteEffects$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cartDelete),
        tap(() => {
          this.store.select(getCartStates).subscribe(items => {
            this.service.setCartinLocal(items)
          })
        })
      ),
    { dispatch: false }
  )

  autoLoadCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(localCart),
      mergeMap(() => {
        const data = this.service.getCartinLocal()
        if (data) return of(localCartSuccess(data))
        return of()
      })
    )
  })
}
