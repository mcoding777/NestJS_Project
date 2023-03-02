import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column({ type: 'varchar', length: 200, nullable: true })
  description: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  // 이게 있어야 softDelete가 동작함
  @DeleteDateColumn()
  deletedAt?: Date;
}
