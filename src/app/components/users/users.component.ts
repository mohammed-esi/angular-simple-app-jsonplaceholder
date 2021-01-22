import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  loading: boolean = true
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      setTimeout(() => {
        this.loading = false
        this.users= users
      }, 2000);
    })
  }

}
