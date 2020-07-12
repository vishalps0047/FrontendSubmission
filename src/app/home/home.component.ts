import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Shared/user.service';
import { Local } from 'protractor/built/driverProviders';


interface user {
  id?: number;
  name: string;
  email: string;
  usertype: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize: any;
  users: user[];

  userDetails;
  isAdmin: boolean = false;

  constructor(private router: Router, private service: UserService) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('userType') == "admin") {
      this.isAdmin = true;
    }
    this.service.getAllUsers().subscribe(
      res => {
        this.userDetails = res;
        this.collectionSize = this.userDetails.length;
      },
      err => {
        console.log(err);
      },
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/userlogin']);
  }

  addUser() {
    this.router.navigate(['/registration']);
  }

  refreshusers() {
    this.users = this.userDetails
      .map((user, i) => ({ id: i + 1, ...user }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
