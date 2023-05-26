import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  islogged:boolean=false
  constructor(private router: Router){
    if(localStorage.getItem("islogged")=="true")this.islogged=true;
    else false
    console.log(this.islogged);
  }

  logout(){
    localStorage.setItem("islogged","false");
    this.router.navigate(['login'], { skipLocationChange: true });
  }
}
