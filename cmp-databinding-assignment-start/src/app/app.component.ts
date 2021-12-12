import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumber:number[] = []
  evenNumber:number[] = []


  onValueTriggered (numberFired : number) {
    if (numberFired % 2 != 0){
      this.oddNumber.push(numberFired)
    } else {
      this.evenNumber.push(numberFired)
    }
  }


}
