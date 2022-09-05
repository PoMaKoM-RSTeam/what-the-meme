import { RoomUser } from 'src/app/models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreSort'
})
export class ScoreSortPipe implements PipeTransform {

  transform(users: RoomUser[]): RoomUser[] {
    let user;
    user = users.sort((a: RoomUser, b: RoomUser) => +b.score! - +a.score!);
    return user
  }


}
