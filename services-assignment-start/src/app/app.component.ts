import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from './counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor (private countService: CounterServiceService) {

  }

  ngOnInit(): void {
      this.countService.counter.subscribe(
        (count) => alert("State Changes Counter : "+count)
      )
    }
}
