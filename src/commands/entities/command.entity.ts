import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'commands' })
export class Command {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  command: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  end_point: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  // 이게 있어야 softDelete가 동작함
  @DeleteDateColumn()
  deletedAt?: Date;
}
