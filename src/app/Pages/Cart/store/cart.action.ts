import { props, createAction } from '@ngrx/store'
import { CartModel } from '../../Models/Cart.model'

export const addToCart = createAction(
  '[cart state] addto cart',
  props<{ item: CartModel }>()
)

export const setErrorMessage = createAction(
  '[shared state] set error message',
  props<{ message: string }>()
)
