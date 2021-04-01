import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../../services/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group: Group[] = [];
  id: number | any;

  constructor(
    private groupService: UserService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getGroup();
  }

  getGroup() {
    this.groupService.getUserById(this.id).subscribe(res => {
      this.group = res;
    });
  }

}
