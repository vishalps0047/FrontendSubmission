import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  { path: '', redirectTo: '/user/userlogin', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'userlogin', component: UserLoginComponent },
      { path: 'adminlogin', component: AdminLoginComponent }
    ]
  },
  { path: 'registration', component: UserRegistrationComponent, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
