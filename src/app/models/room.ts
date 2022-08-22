import { User } from 'src/app/models/user';
export interface Room {
  id?: string
  users: User[]
  image: string
}