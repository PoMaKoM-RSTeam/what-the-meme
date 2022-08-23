import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  users: User[] = []

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/api/user', user)
    .pipe(
      tap(user => this.users.push(user))
    )
  }
}
