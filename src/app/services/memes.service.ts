import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Meme } from '../models/memes';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http: HttpClient) { }

  memes: Meme[] = []
  getAllMemes(): Observable<Meme[]> {
    return this.http.get<Meme[]>('http://localhost:5000/api/meme').pipe(
      tap(memes => this.memes = memes)
    );
  }
}
