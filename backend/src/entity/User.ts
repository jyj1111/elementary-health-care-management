import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // 이메일은 중복되지 않도록 설계
  email: string;

  @Column({ unique: true }) // 유저이름은 중복되지 않도록 설계
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  @OneToMany((type) => Post, (post) => post.author) // posts를 Post의 author와 연결
  posts: Post[];
}
