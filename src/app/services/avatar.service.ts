import { Avatar } from './../models/avatar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor( private http: HttpClient ) { }

  avatars: Avatar[] = []

  getAllAvatars(): Observable<Avatar[]> {
    
    return this.http.get<Avatar[]>('../../assets/data/avatarImages.json').pipe(
      tap(avatars => this.avatars = avatars)
    );
  }
  
}
