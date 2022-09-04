
export interface Meme {
  _id?: string
  link?: string
}
export interface CurrentMeme extends Meme {
  id?: string
  meme?: string
}