import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './login/user';
@Injectable({
  providedIn: 'root'
})
export class UserauthService {
private url : string = "http://localhost:8080/userAuth";
private geturl :string = "http://localhost:8080/getUsers";
  constructor(private http: HttpClient) { 
  }

  public authUser( u : User  ) {
    return this.http.post<string>(this.url,u);
  }

  public getUsers():Observable<String>{
    return this.http.get<String>(this.geturl);
  }
}
