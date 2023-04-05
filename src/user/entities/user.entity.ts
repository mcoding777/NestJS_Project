import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' }) // PK와 auto increment 적용
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  user_id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  user_pw: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  client: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  manager: string;

  @Column({ type: 'varchar', length: 15, nullable: true, default: null })
  phone: string;
}
