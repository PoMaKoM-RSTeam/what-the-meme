import { Observable, tap } from 'rxjs';
import { Room } from './../models/room';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor( private http: HttpClient ) { }

  rooms: Room[] = []

  getAllRooms(): Observable<Room[]> {
    
    return this.http.get<Room[]>('../../assets/data/rooms.json').pipe(
      tap(rooms => this.rooms = rooms)
    );
  }
}
