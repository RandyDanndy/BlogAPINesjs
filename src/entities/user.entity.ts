import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  isActive: boolean;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  profilePicture: string;
  @Column({ nullable: true })
  bio: string;
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];
  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Comment[];
}
