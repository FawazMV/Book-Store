import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { AppState } from './Store/app.state'
import {
  errorMessageSelector,
  getLoading
} from './Store/shared/shared.selector'
import { setErrorMessage } from './Store/shared/shared.actions'
import { autoLogin } from './Pages/Auth/store/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book-Store'
  showLoading = this.store.select(getLoading)
  errorMessage$ = this.store.select(errorMessageSelector)
  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.store.dispatch(autoLogin())
  }
  removeError () {
    this.store.dispatch(setErrorMessage({ message: '' }))
  }
}
