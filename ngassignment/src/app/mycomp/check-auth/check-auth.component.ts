import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-auth',
  templateUrl: './check-auth.component.html',
  styleUrls: ['./check-auth.component.css']
})
export class CheckAuthComponent {
  constructor(private router: Router) { }
  checkauth() {
    const name = (<HTMLInputElement>document.getElementById("name")).value
    const password = (<HTMLInputElement>document.getElementById("password")).value
   
    if (name == "user" && password == "user") {
      localStorage.setItem("username", "aadarsh");
      localStorage.setItem("islogged", "true");
      this.router.navigate(['/list'], { skipLocationChange: true })
    }
  }
}
