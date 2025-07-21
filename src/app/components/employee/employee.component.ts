import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';

@Component({
  standalone: true,
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  providers: [DataService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  employees: any;
  employee = new Employee();
  
  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    console.log('inside getEmployeeData');
    this.dataService.getData().subscribe(data => {
      this.employees = data;
      console.log('Employee data fetched successfully', this.employees);
    }, error => {
      console.error('Error fetching employee data', error);
    });
  }

  insertData(){
    this.dataService.insertData(this.employee).subscribe(data =>{
      this.getEmployeeData();
    });
  }

}
