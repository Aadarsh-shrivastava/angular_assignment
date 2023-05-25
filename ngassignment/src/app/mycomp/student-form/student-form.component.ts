import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  constructor(private service: ApiServiceService, private router: Router) { }
  
  apiData: any;
  
  ngOnInit(): void {
    this.service.getdata().subscribe((Response) => { this.apiData = Response; })

  }

  goBack(){
    this.router.navigate(['/list'])
  }
  saveOrUpdate() {
    // console.log(Data,"hi this is data")
    const rollno=(<HTMLInputElement>document.getElementById("rollno")).value
    const name=(<HTMLInputElement>document.getElementById("name")).value
    const dob=(<HTMLInputElement>document.getElementById("dob")).value
    const score=(<HTMLInputElement>document.getElementById("scr")).value
    const data={
      rollno:rollno,
      studentName:name,
      DOB:dob,
      score:score
    }

    this.service.addData(data).subscribe((Response) => { this.apiData = Response; });
    this.ngOnInit()
    this.router.navigate(['/list'], { skipLocationChange: true })
  }
}
