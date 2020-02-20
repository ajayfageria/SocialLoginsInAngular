import { Component, OnInit} from '@angular/core';

import {MatDialogRef, MatSnackBar} from '@angular/material';
import { DepartmentService } from 'src/app/services/department.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(public dialogBox:MatDialogRef<AddDepartmentComponent>,private service:DepartmentService,
    private snackBar:MatSnackBar) {

   }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData = {
      DepartmentID:0,
      DepartmentName:''
    }
  }
  onClose(){
this.dialogBox.close();
this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    this.service.addDepartment(form.value).subscribe(res=>
      {
        this.resetForm(form);
        this.snackBar.open(res.toString(), '', {
          duration:2000,
          verticalPosition:'top'
        });
      }
      )
  }
}
