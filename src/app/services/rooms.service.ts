import { first, Observable, tap } from 'rxjs';
import { Room } from './../models/room';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  rooms: Room[] = []
  room: Room 
  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:5000/api/room?empty=true').pipe(
      tap(rooms => this.rooms = rooms)
    );
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>('http://localhost:5000/api/room', room)
      .pipe(
        tap(room => this.rooms.push(room))
      )
  }

  getRoom(id: string): Observable<Room> {
    return this.http.get<Room>(`http://localhost:5000/api/room/${id}`).pipe(first());
  }


  updateRoom(id: string, room: Room): Observable<Room> {

    return this.http.patch<Room>(`http://localhost:5000/api/room/${id}`, room).pipe(
      tap(room => this.room = room)
    );
  }
}
