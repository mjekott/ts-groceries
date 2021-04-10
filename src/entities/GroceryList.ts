import { type } from 'node:os';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Item } from './Item';

@Entity('groceries')
export class GroceryList extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created: string;

  @OneToMany(() => Item, (item) => item.groceryList)
  items: Item[];
}
