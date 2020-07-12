import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userlogin() {
    this.router.navigate(['/user/userlogin']);
  }

  adminlogin() {
    this.router.navigate(['/user/adminlogin']);
  }

}
