import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";
import { AuthResponseData } from "../../Models/AuthResponseData";
import { loginStart, loginSuccess } from "./auth.actions";



@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private service: AuthService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap(action => {
                return this.service.login(action.email, action.password).pipe(
                    map((data: AuthResponseData) => {
                        const user = this.service.formatUser(data)
                        console.log(data)
                        return loginSuccess({ user })
                    })
                )
            })
        )
    })
}