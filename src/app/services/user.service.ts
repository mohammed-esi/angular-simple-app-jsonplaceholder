import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = 'https://jsonplaceholder.typicode.com/users'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) {
   }

   getUsers(): Observable<User[]> {
     return this.http.get<User[]>(this.userUrl)
   }

   getUser(id: number): Observable<User> {
     const url = `${this.userUrl}/${id}`

     return this.http.get<User>(url)
   }
}