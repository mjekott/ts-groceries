import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { GroceryList } from './GroceryList';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created: string;

  @ManyToOne(() => GroceryList, (groceryList) => groceryList.items)
  groceryList: GroceryList;
}
