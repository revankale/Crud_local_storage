import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  userObj: any = {
    username: "",
    password: ""
  }

  constructor(private router: Router) {

  }

  onLogin() {
    if (this.userObj.username == 'admin' && this.userObj.password == '12345') {
      this.router.navigateByUrl("employee");
    } else {
      alert('User name & password is wrong');
    }
  }

}
