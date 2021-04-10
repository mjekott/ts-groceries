import { Router } from 'express';
import {
  showAllItems,
  createItem,
  showitem,
  updateitem,
  deleteitem,
} from './items.handler';

export const router = Router({ mergeParams: true });

router.route('/').get(showAllItems).post(createItem);

router.route('/:itemId').get(showitem).put(updateitem).delete(deleteitem);
