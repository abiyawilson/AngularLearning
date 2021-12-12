import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() valueEmitted = new EventEmitter<number>()

  currentValue:number = 1
  interval:any

  constructor() { }

  ngOnInit(): void {
  }

  onStart() : any {
    this.interval = setInterval ( () => {
        this.valueEmitted.emit(this.currentValue);
        this.currentValue++;
      } , 1000)
    }

  onStop() :any {
    clearInterval(this.interval);
  }

}
