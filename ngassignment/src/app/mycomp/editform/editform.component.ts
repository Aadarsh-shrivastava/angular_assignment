import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit{
  constructor(private service: ApiServiceService, private router: Router,private route:ActivatedRoute) {  
    this.route.params.subscribe((params) => {
    this.rollno = params["rollno"];
  });}
  rollno!:string
  apiData:any
  ngOnInit(): void {
    this.service.getdata().subscribe((Response) => { this.apiData = Response; })

  }
  goBack() {
    this.router.navigate(['/list'])
  }
  Update() {
    alert("are you sure you want to update data for this student??")
    
    
    const name = (<HTMLInputElement>document.getElementById("name")).value
    const dob = (<HTMLInputElement>document.getElementById("dob")).value
    const score = (<HTMLInputElement>document.getElementById("scr")).value
    const data = {
      studentName: name,
      DOB: dob,
      score: score
    }

    this.service.updatedata(data,this.rollno).subscribe((Response) => { this.apiData = Response; });
    this.ngOnInit()
    this.router.navigate(['/list'], { skipLocationChange: true })
  }
}
