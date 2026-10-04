import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

// Service to call the external user API and return typed user records.
@Injectable({
    providedIn:'root'
})
export class UsersApi {
constructor(private http:HttpClient){}
getUserList(): Observable<User[] | any> {
  return this.http.get<User[] | any>('https://jsonplaceholder.typicode.com/users');
}
}


