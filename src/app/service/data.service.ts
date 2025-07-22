import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getData() {
    return this.httpclient.get('https://localhost:7097/api/EmployeeData');
  }

  insertData(data: any){
    return this.httpclient.post('https://localhost:7097/api/EmployeeData',data);
  }

  getEmployeeByID(id:any){
    return this.httpclient.get('https://localhost:7097/api/EmployeeData/'+id);
  }

  updateData(id:any,data:any){
    return this.httpclient.put('https://localhost:7097/api/EmployeeData/'+id,data);
  }

  deleteData(id:any) {
    return this.httpclient.delete('https://localhost:7097/api/EmployeeData/'+id);
  }
}
