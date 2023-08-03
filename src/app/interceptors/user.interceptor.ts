import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { switchMap, take } from 'rxjs/operators'
import { AppState } from '../Store/app.state'
import { getToken } from '../Pages/Auth/store/auth.selectors'
import { Router } from '@angular/router'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private store: Store<AppState>, private router: Router) {}
  path = this.router.url
  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      take(1),
      switchMap(token => {
        console.log(this.path)

        if (token && this.path != '/') {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          })
        }
        return next.handle(req)
      })
    )
  }
}
