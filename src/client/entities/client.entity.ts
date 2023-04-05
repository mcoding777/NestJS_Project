import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  company: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  manager: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  phone: string;
}
