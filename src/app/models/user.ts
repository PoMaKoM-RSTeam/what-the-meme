import { Meme } from "./memes"

export interface User {
  _id?: string
  name?: string
  image?: string
}
export interface RoomUser extends User {
  score: number,
  memes: Meme[],
}

