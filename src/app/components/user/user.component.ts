import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service'

import { User } from '../../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService ) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      setTimeout(() => {
        this.user = user
        this.loading = false
      }, 2000);
    })
  }

}
