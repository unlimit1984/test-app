import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: { name: string };
  isLoggedIn = false;
  data: string;

  // use public services or other stuff in case of usage that in template or outside
  constructor(public userService: UserService, private dataService: DataService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => {
      this.data = data;
      console.log(data);
    });

    const array = [10, 20, 30];
    const result = from([array]);

    result.subscribe(x => console.log('one tick x: ', x));
  }

}
