import { Injectable, EventEmitter } from '@angular/core';
import {  } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  count = 0

  counter: EventEmitter<number> = new EventEmitter()

  constructor() { }

  countStateChanges(){
    this.count ++
    this.counter.emit(this.count)
  }
}
