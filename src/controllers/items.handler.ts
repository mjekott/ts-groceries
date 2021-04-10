import { Request, Response, NextFunction } from 'express';
import { GroceryList } from '../entities/GroceryList';
import { Item } from '../entities/Item';

export const showAllItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const list = await GroceryList.findOne({
      where: { id },
      relations: ['items'],
    });

    res.status(200).json(list?.items);
  } catch (err) {
    next(err);
  }
};

export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    let item: any = await Item.create(req.body);
    item = await item.save();
    const list: any = await GroceryList.findOne({
      where: { id },
      relations: ['items'],
    });
    list?.items.push(item);
    await list.save();
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const showitem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({ where: { id: itemId } });
    if (!item) {
      throw new Error('Item with id not found');
    }

    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};

export const updateitem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { itemId } = req.params;
    const item: any = await Item.findOne({ where: { id: itemId } });
    if (!item) {
      throw new Error('Item with id not found');
    }
    item.name = req.body.name;
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};

export const deleteitem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { itemId } = req.params;
    const item: any = await Item.findOne({ where: { id: itemId } });
    if (!item) {
      throw new Error('Item with id not found');
    }
    await item.remove();

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
