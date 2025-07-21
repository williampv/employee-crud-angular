import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-employee-edit',
  imports: [CommonModule, FormsModule],
  providers: [DataService],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee();

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    this.dataService.getEmployeeByID(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
    });
  }

  updateEmployee(){
    this.dataService.updateData(this.id,this.employee).subscribe(res => {
      
    })
  }
}
