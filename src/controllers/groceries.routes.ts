import { Router } from 'express';
import {
  showAllGroceries,
  showOneGroceries,
  createNewGroceries,
  updateGroceries,
  deleteGroceries,
} from './groceries.handlers';

import { router as itemsRouter } from './items.routes';

export const router = Router();

router.route('/').get(showAllGroceries).post(createNewGroceries);

router
  .route('/:id')
  .get(showOneGroceries)
  .put(updateGroceries)
  .delete(deleteGroceries);

router.use('/:id/items', itemsRouter);
