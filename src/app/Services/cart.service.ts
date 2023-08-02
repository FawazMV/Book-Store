import { Injectable } from '@angular/core'
import { CartState } from '../Pages/Cart/store/cart.state'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor () {}

  setCartinLocal (itmes: CartState) {
    localStorage.setItem('cart', JSON.stringify(itmes))
  }

  getCartinLocal () {
    const res = localStorage.getItem('cart')
    if (res) return JSON.parse(res)
  }
}
