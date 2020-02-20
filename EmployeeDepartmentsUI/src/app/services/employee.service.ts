import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee-model';
import { Observable, Subject } from 'rxjs';
import { Department } from '../model/department-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly Url="https://localhost:44380/api"
  constructor(private http:HttpClient) { }
  formData: Employee;
  getEmpList():Observable<Employee[]>{

    return this.http.get<Employee[]>(this.Url+'/employee/get')
    
    }
   addEmployee(emp:Employee){
      return this.http.post(this.Url+'/employee/addEmployee', emp)
    }
    deleteEmployee(id:number){
      return this.http.delete(this.Url+'/employee/deleteEmployee/'+id);
    }
    updateEmployee(emp:Employee ){
      return this.http.put(this.Url+'/employee/updateEmployee',emp);
    }
  getDeptDropdown():Observable<any>{
return this.http.get<Department[]>(this.Url+'/department/get')
  }

    private _listners = new Subject<any>();
    listen(): Observable<any>{
      return this._listners.asObservable();
    }
    filter(filterBy: string){
      this._listners.next(filterBy);
    }
}
