import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // PK와 auto increment 적용
  id: number;

  @Column()
  user_id: string;

  @Column()
  user_pw: string;

  @Column()
  client: string;

  @Column()
  manager: string;

  @Column()
  phone: string;
}
