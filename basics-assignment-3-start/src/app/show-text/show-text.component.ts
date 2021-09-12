import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent implements OnInit {

  showText = false;
  count = 0;
  allClick = [];

  constructor() { }

  ngOnInit(): void {
  }


  show() {
    this.showText = true;
    this.count += 1;
    this.allClick.push(this.count);
  }

}
