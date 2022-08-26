import { User } from 'src/app/models/user';
export interface Room {
  _id?: string
  users: string[]
  members: number
  name: string
  pass: string
  image: string
}