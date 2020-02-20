import { Component, OnInit} from '@angular/core';

import {MatDialogRef, MatSnackBar} from '@angular/material';
import { DepartmentService } from 'src/app/services/department.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  constructor(public dialogBox:MatDialogRef<EditDepartmentComponent>,
    private service:DepartmentService,
    private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  onClose(){
    this.dialogBox.close();
    this.service.filter('Register click');
      }

      onSubmit(form:NgForm){
       this.service.updateDepartment(form.value).subscribe(res=>{
        this.snackBar.open(res.toString(), '', {
          duration:2000,
          verticalPosition:'top'
        });
       })
      }
}
