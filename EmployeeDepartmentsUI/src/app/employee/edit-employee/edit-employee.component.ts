import { Component, OnInit} from '@angular/core';

import {MatDialogRef, MatSnackBar} from '@angular/material';

import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(public dialogBox:MatDialogRef<EditEmployeeComponent>,
    private service:EmployeeService,
    private snackBar:MatSnackBar) { }
    minDate: Date;
    maxDate: Date;
Data : any = this.service.formData;

  ngOnInit() {
    this.dropdownRefresh();
  }


  public listItems:Array<string>=[];
  dropdownRefresh(){
    this.service.getDeptDropdown().subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.listItems.push(element["DepartmentName"]);
      });
    })
    }

  onClose(){
    this.dialogBox.close();
    this.service.filter('Register click');
      }

      onSubmit(form:NgForm){
       this.service.updateEmployee(form.value).subscribe(res=>{
        this.snackBar.open(res.toString(), '', {
          duration:2000,
          verticalPosition:'top'
        });
       })
      }
}
