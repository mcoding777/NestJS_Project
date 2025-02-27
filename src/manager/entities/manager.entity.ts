import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'manager' })
export class Manager {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  company: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  manager: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  phone: string;
}
