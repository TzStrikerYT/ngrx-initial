import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from './redux/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter: Observable<number>

  constructor (private store: Store<{count: number}>){

    this.counter = store.select('count')

  }

  add(){
    this.store.dispatch(increment())
  }

}
