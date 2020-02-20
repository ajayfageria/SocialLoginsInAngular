import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialService {
  url;  
  constructor(private http: HttpClient) { }

  Savesresponse(responce)
      {
        this.url =  'http://localhost:44380/api/account/Savesresponse';
        return this.http.post(this.url,responce);
      }
 
}
