import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import { DepartmentService } from 'src/app/services/department.service';
import { MatSort, MatDialogConfig, MatDialog,MatSnackBar} from '@angular/material';
import {AddDepartmentComponent} from 'src/app/departments/add-department/add-department.component';
import { Department } from 'src/app/model/department-model';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
import { Socialusers } from 'src/app/model/socialusers-model';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['options', 'DepartmentID', 'DepartmentName'];
  socialusers = new Socialusers();  
  constructor(private service:DepartmentService,
    private dialog:MatDialog, public OAuth: AuthService,private router:Router,
    private snackBar:MatSnackBar) { 
    this.service.listen().subscribe((m:any)=>{
    
      this.refreshDepList();
      
    })
  }



 
refreshDepList(){
  
this.service.getDeptList().subscribe(data=>{
  this.listData=new MatTableDataSource(data)
this.listData.sort=this.sort;
})
}
@ViewChild(MatSort,null) sort:MatSort;
ngOnInit() {
    
  this.refreshDepList();
  this.socialusers = JSON.parse(localStorage.getItem('socialusers')); 
}
applyFilter(filtervalue:string){
this.listData.filter=filtervalue.trim().toLowerCase();
}
logout() {  
  alert(1);  
   this.OAuth.signOut().then(data => {  
     debugger;  
     this.router.navigate([`/login`]);  
   });  
 } 
onAdd(){
const dialogConfig=new MatDialogConfig();
dialogConfig.disableClose=true;
dialogConfig.autoFocus=true;
dialogConfig.width="40%";
this.dialog.open(AddDepartmentComponent,dialogConfig);

  
}
  onEdit(dep:Department){
this.service.formData=dep;
const dialogConfig=new MatDialogConfig();
dialogConfig.disableClose=true;
dialogConfig.autoFocus=true;
dialogConfig.width="40%";
this.dialog.open(EditDepartmentComponent,dialogConfig);
  }

  onDelete(id:number){
if(confirm("Are you sure to delete?")){
  this.service.deleteDepartment(id).subscribe(res=>{
this.refreshDepList();
this.snackBar.open(res.toString(), '', {
  duration:2000,
  verticalPosition:'top'
});
  });
}
  }

  
}
