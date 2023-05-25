import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.css']
})
export class ListResultComponent implements OnInit {
  apiData:any;
  logged:boolean=true;

    
  
  ngOnInit(): void {
    
    this.service.getdata().subscribe((Response) => { this.apiData = Response; })

  }

  constructor(private service: ApiServiceService,private router: Router) { }

  getDataFromAPI() {

  }

  editPageRedirect(){

  }

  deleteRequest(rollno:string){
    alert("Are you sure you want to delete this studeent's data");
    
    this.service.deleteData(rollno);
    this.service.getdata().subscribe((Response) => { this.apiData = Response; })
    this.ngOnInit()
  }

  saveOrUpdate(method:string){
    
    this.router.navigate(['/add'], { skipLocationChange: true })
    // if(method=="POST"){
    //   this.service.addData().subscribe((Response) => { this.apiData = Response; });
    //   this.ngOnInit()
    // }
  }

}
