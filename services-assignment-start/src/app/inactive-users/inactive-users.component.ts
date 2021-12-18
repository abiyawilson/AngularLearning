import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveUsersService } from '../active-users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users:string[] = []

  constructor (private inactiverUser: ActiveUsersService) {

  }

  ngOnInit(): void {
      this.users = this.inactiverUser.inactiveUsers
  }

  onSetToActive(id: number) {
    this.inactiverUser.onSetToActive(id);
  }
}
