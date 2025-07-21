import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-employee',
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  employees: any;
  
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
}
