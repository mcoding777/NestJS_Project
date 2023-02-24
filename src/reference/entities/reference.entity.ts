import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reference' })
export class Reference {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  value: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  label: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  description: string;
}
