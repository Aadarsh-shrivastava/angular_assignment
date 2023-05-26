import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient ) { }

  getdata(){
    // return this.http.get('/students')
    return this.http.get('http://localhost:3000/students');
  }

  updatedata(data:any,rollno:string){
    console.log('http://localhost:3000/students/'+rollno,'thisd i ghettign updated')
    return this.http.patch('http://localhost:3000/students/'+rollno,data);
  }

  deleteData(rollno:string){
    const api='http://localhost:3000/students/'+rollno;
    console.log(api)
    return this.http.delete(api).subscribe(() => console.log("user deleted"));
  }
  
  addData(data:any){
   
  return this.http.post('http://localhost:3000/students/',data);


  }

  searchResult(rollno:string,dob:string){
    const api:string=('http://localhost:3000/students/'+rollno);
    
    return this.http.get(api);

  }
}
