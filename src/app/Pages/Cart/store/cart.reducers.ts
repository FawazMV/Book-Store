import { createReducer, on } from '@ngrx/store'
import { addToCart } from './cart.action'
import { intilalState } from './cart.state'

export const CartReducer = createReducer(
  intilalState,
  on(addToCart, (state, action) => {
    let item = { ...action.item }
    item.count = 1
    return {
      ...state,
      posts: [...state.items, item]
    }
  })
)
