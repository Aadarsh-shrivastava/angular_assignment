import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  constructor(private service: ApiServiceService,private router: Router) { }
  apiData:any;
  search(){
    const name = (<HTMLInputElement>document.getElementById("rollno")).value
    const dob = (<HTMLInputElement>document.getElementById("dob")).value
    this.service.searchResult(name,dob).subscribe((Response) => { this.apiData = Response; })
    if(this.apiData.DOB!==dob){
      this.apiData=null;

    }

  }
}
