import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Role } from '@prisma/client';
import { Image } from 'src/images/dto/image.dto';
import { Book } from 'src/books/dto/book.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name?: string;

  @Column()
  type?: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ type: 'enum', enum: Role })
  role: Role;

  @OneToMany((type) => Image, (image) => image.user)
  @JoinColumn({ name: 'userId' })
  images: Image[];

  @OneToMany((type) => Book, (book) => book.illustratorId)
  booksIllustrated: Book[];

  @OneToMany((type) => Book, (book) => book.publisherId)
  booksPublished: Book[];
}
