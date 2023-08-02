import { NgModule, isDevMode } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BookCardComponent } from './Pages/Home/book-card/book-card.component'
import { HomeManageComponent } from './Pages/Home/home-manage/home-manage.component'
import { HttpClientModule } from '@angular/common/http'
import { ErrorComponent } from './Pages/Layout/error/error.component'
import { LocalCurrencyPipe } from './Pipes/local-currency.pipe'
import { CardShimmerComponent } from './Pages/Home/card-shimmer/card-shimmer.component'
import { NavbarComponent } from './Pages/Layout/navbar/navbar.component'
import { StoreModule } from '@ngrx/store'
import { appReducer } from './Store/app.state'
import { LoaderComponent } from './Pages/Layout/loader/loader.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { BooksEffects } from './Pages/Home/store/books.effects'
import { SummaryPipe } from './Pipes/summary.pipe'
import { AuthEffects } from './Pages/Auth/store/auth.effects'

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    ErrorComponent,
    HomeManageComponent,
    LocalCurrencyPipe,
    CardShimmerComponent,
    NavbarComponent,
    LoaderComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([BooksEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
