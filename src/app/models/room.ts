import { User } from 'src/app/models/user';
export interface Room {
  _id?: string
  users: User[]
  members: number
  name: string
  pass: string
  image: string
}