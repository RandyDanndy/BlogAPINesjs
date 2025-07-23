import { Comment } from 'src/comment';
import { User } from 'src/user';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postID: number;
  @Column({ length: 255 })
  title: string;
  @Column('text')
  content: string;
  @Column({ length: 100 })
  category: string;
  @Column('timestamp')
  publicationDate: Date;
  @Column({ length: 255 })
  tags: string;
  @OneToMany(() => User, (user) => user.post)
  user: User;
  @OneToMany(() => Comment, (comment) => comment.post)
  comment: Comment[];
}
