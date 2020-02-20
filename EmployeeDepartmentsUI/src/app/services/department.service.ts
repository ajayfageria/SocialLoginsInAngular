import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Department} from 'src/app/model/department-model';
import{Observable, Subject} from 'rxjs'
 @Injectable({
  providedIn: 'root'
})
export class DepartmentService {
readonly Url="https://localhost:44380/api"


  constructor(private http:HttpClient) { }
  formData: Department;
  getDeptList():Observable<Department[]>{

    return this.http.get<Department[]>(this.Url+'/department/get')
    
    }
    addDepartment(dep:Department){
      return this.http.post(this.Url+'/department/addDepartment', dep)
    }
  deleteDepartment(id:number){
    return this.http.delete(this.Url+'/department/deleteDept/'+id);
  }
  updateDepartment(dep:Department ){
    return this.http.put(this.Url+'/department/updateDepartment',dep);
  }

    private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }


}
