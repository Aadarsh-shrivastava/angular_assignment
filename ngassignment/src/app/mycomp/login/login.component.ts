import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}
  sendAuth(){
    this.router.navigate(['/auth'], { skipLocationChange: true });
  }
  sendResult(){
    this.router.navigate(['/search'], { skipLocationChange: true });
  }
}
