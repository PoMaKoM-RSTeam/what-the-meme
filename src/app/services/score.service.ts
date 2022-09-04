import { RoomUser } from './../models/user';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

 score: RoomUser[] = [{}];
}
