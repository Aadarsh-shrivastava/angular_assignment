import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngassignment';
  islogged:boolean =false;

    
  constructor(private router: Router){
    this.router.navigate(['login'], { skipLocationChange: true });
    
    if(localStorage.getItem("islogged")!="true")this.islogged=false;
    else true

  }
  
  ngOnInit(): void {
   
  }
  
  sendlist(){
  
    this.router.navigate(['login'], { skipLocationChange: true });
  }

  
}
