import { CartModel } from '../../Models/Cart.model'

export interface CartState {
  items: CartModel[]
}

export const intilalState: CartState = {
  items: []
}
