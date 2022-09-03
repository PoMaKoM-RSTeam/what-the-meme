import { RoomUser } from './user';

export interface roundUserScore {
  id: string
  score: string
}
export interface roundMemePick {
  id: string
  meme: string
}
export interface Round {
  situation: string
  userMemePick: roundMemePick
  userScore: roundUserScore
}
export interface Room {
  _id?: string
  users: RoomUser[]
  members: number
  name: string
  pass: string
  image: string
  roomState: RooomState
  gameState: string
  admin: string
  gameProgress?: Round[]
}

export enum RooomState {
  IsOpen = 'IsOpen', 
  IsGoing = 'IsGoing', 
  IsEnd = 'IsEnd'
}