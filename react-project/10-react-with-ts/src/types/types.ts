export default interface CommentRow {
  writer: string,
  title: string
}

export interface Props {
  post: Post,
}
  
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}