import { User } from 'src/app/models/user';
export interface Room {
  id?: string
  users: string[]
  members: number
  name: string
  pass: string
  image: string
}