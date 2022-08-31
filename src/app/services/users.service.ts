import { HttpClient } from '@angular/common/http';
import { Observable, tap, first } from 'rxjs';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 

  constructor( private http: HttpClient ) { }

  user: User

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/api/user', user)
    .pipe(
      tap(user => this.user = user)
    )
  }
  getUser(id?: string): Observable<User> {
    return this.http.get<User>(`http://localhost:5000/api/user/${id}`).pipe(
      tap(user => this.user = user)
    );
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.patch<User>(`http://localhost:5000/api/user/${id}`, user).pipe(
      tap(user => this.user = user)
    );
  }
}
