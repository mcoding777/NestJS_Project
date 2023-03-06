import { Reference } from 'src/reference/entities/reference.entity';
import { User } from 'src/user/entities/user.entity';
import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

export class PipelineDatum {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @ManyToOne(() => Reference, (reference) => reference.id, {
    onDelete: 'CASCADE', // 참조된 키가 삭제될 때 외래 키의 동작 방식
  })
  @JoinColumn({ name: 'description_id', referencedColumnName: 'id' })
  reference: Reference;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE', // 참조된 키가 삭제될 때 외래 키의 동작 방식
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ type: 'varchar', length: 255, nullable: true })
  options: string;
}
