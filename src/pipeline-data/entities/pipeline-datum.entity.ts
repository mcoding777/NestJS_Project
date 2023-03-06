import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

export class PipelineDatum {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @ManyToOne(() => Reference, (reference) => reference.id)
  description_id: number;

  @ManyToOne(() => User, (user) => user.id)
  user_id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  options: string;
}
