import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { AppState } from './Store/app.state';
import { getLoading } from './Store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book-Store';
  showLoading?: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.showLoading = this.store.select(getLoading)
  }
}
