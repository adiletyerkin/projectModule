import { Component, OnInit } from '@angular/core';
import {Group} from '../../services/group';
import {User} from '../../services/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User[] = [];
  id: number | any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.snapshot.paramMap.get('id')
    this.getUser()
  }

  getUser() {
    this.userService.getUserById(this.id).subscribe(res => {
      this.user = res;
    });
  }

}
