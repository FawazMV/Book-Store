import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './Pages/Home/book-card/book-card.component';
import { HomeManageComponent } from './Pages/Home/home-manage/home-manage.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './Pages/Layout/error/error.component';
import { LocalCurrencyPipe } from './Pipes/local-currency.pipe';
import { CardShimmerComponent } from './Pages/Home/card-shimmer/card-shimmer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    ErrorComponent,
    HomeManageComponent,
    LocalCurrencyPipe,
    CardShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
