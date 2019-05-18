import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './login/user';
@Injectable({
  providedIn: 'root'
})
export class UserauthService {
private url : string = "https://obscure-springs-69062.herokuapp.com/userAuth";
private geturl :string = "https://obscure-springs-69062.herokuapp.com/getUsers";
  constructor(private http: HttpClient) { 
  }

  public authUser( u : User  ) {
    return this.http.post<string>(this.url,u);
  }

  public getUsers():Observable<String>{
    return this.http.get<String>(this.geturl);
  }
}
