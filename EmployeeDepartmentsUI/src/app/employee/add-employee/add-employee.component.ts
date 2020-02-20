import { Component, OnInit} from '@angular/core';

import {MatDialogRef, MatSnackBar} from '@angular/material';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public dialogBox:MatDialogRef<AddEmployeeComponent>,private service:EmployeeService,
    private snackBar:MatSnackBar) { }
    minDate: Date;
    maxDate: Date;
    ngOnInit() {
      this.resetForm();
      this.dropdownRefresh();
    }
    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
  
      this.service.formData = {
        EmployeeID:0,
        EmployeeName:'',
        DepartmentName:'',
        DOJ:null,
        EmailID:'',


      }
    }

    onSubmit(form:NgForm){
      this.service.addEmployee(form.value).subscribe(res=>
        {
          this.resetForm(form);
          this.snackBar.open(res.toString(), '', {
            duration:2000,
            verticalPosition:'top'
          });
        }
        )
    }
  onClose(){
    this.dialogBox.close();
    this.service.filter('Register click');
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
    
}
