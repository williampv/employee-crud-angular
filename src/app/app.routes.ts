import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

export const routes: Routes = [
    { path: '', component:EmployeeComponent },
    { path: 'edit/:id', component:EmployeeEditComponent }
];
