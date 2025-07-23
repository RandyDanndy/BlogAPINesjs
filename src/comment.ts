import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post/post';
import { User } from './user';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  CommentID: number;
  @Column('text')
  content: string;
  @Column('timestamp')
  timestamp: Date;
  @OneToMany(() => Post, (post) => post.comment)
  post: Post;
  @OneToMany(() => User, (user) => user.comment)
  user: User;
}
