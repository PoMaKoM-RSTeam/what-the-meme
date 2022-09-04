import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  gameState: BehaviorSubject<string> = new BehaviorSubject('');
}
