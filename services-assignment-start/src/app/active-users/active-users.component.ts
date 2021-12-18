import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveUsersService } from '../active-users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users:string[] = []

  constructor (private activerUser: ActiveUsersService) {

  }

  ngOnInit(){
    this.users = this.activerUser.activeUsers
  }

  onSetToInactive(id: number) {
    this.activerUser.onSetToInactive(id);
  }

}
