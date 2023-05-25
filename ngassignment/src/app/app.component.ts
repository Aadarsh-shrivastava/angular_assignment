import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngassignment';

  constructor(private router: Router){
    this.router.navigate(['login'], { skipLocationChange: true });

  }
  logged:boolean=false;
  ngOnInit(): void {
    if(localStorage.getItem("islogged")!="true")this.logged=false;
    else true
  }
  logout(){
    localStorage.setItem("islogged","false");
    this.router.navigate(['login'], { skipLocationChange: true });
  }
  sendlist(){
  
    this.router.navigate(['login'], { skipLocationChange: true });
  }

  
}
