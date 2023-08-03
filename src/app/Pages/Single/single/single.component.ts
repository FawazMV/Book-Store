import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/Store/app.state'
import { bookSelector } from '../../Home/store/books.selecters'

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  constructor (private route: ActivatedRoute, private store: Store<AppState>) {}
  // allBooks$ = this.store.select(bookSelector)

  path!: string
  ngOnInit (): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) this.getData(id)
    })
  }
  getData (id: string) {
    // this.store.select(bookSelector)
  }
}
