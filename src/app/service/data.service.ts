import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }

  getData() {
    return this.httpclient.get('https://localhost:7097/api/EmployeeData');
  }

  insertData(data: any){
    return this.httpclient.post('https://localhost:7097/api/EmployeeData',data);
  }
}
