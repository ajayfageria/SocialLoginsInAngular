
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';

import { MatSort, MatDialogConfig, MatDialog,MatSnackBar} from '@angular/material';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from 'src/app/model/employee-model';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['options', 'EmployeeID', 'EmployeeName','DepartmentName','DOJ','EmailId'];
  constructor(private service:EmployeeService,
    private dialog:MatDialog,
     private snackBar:MatSnackBar) { 
       this.service.listen().subscribe((m:any)=>{

this.refreshEmpList
       })
     }
 
     refreshEmpList(){
  
      this.service.getEmpList().subscribe(data=>{
        this.listData=new MatTableDataSource(data)
      this.listData.sort=this.sort;
      })
      }

      @ViewChild(MatSort,null) sort:MatSort;
  ngOnInit() {
    this.refreshEmpList();

  }
  applyFilter(filtervalue:string){
    this.listData.filter=filtervalue.trim().toLowerCase();

}
onDelete(id:number){
  if(confirm("Are you sure to delete?")){
    this.service.deleteEmployee(id).subscribe(res=>{
  this.refreshEmpList();
  this.snackBar.open(res.toString(), '', {
    duration:2000,
    verticalPosition:'top'
  });
    });
  }
    }

onAdd(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="40%";
  this.dialog.open(AddEmployeeComponent,dialogConfig);
  }

  onEdit(emp:Employee){
    console.log(emp);
    this.service.formData=emp;
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    this.dialog.open(EditEmployeeComponent,dialogConfig);
      }
}