import {} from 'typeorm';
import { GroceryList } from '../entities/GroceryList';
import { Item } from '../entities/Item';
import { Response, Request, NextFunction } from 'express';

export const showAllGroceries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const groceries: GroceryList[] = await GroceryList.find();
    res.status(200).json(groceries);
  } catch (err) {
    next(err);
  }
};

export const showOneGroceries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const grocery = await GroceryList.findOne({
      where: { id },
      relations: ['items'],
    });
    if (!grocery) {
      throw new Error(`Grocery with id doesnt exist`);
    }
    res.status(200).json(grocery);
  } catch (err) {
    next(err);
  }
};
export const createNewGroceries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const grocery: any = await GroceryList.create(req.body);
    await grocery.save();
    res.status(201).json(grocery);
  } catch (err) {
    next(err);
  }
};
export const updateGroceries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const grocery: any = await GroceryList.findOne({
      where: { id },
      relations: ['items'],
    });
    if (!grocery) {
      throw new Error(`Grocery with id doesnt exist`);
    }
    grocery.name = req.body.name;
    await grocery.save();
    res.status(200).json(grocery);
  } catch (err) {
    next(err);
  }
};
export const deleteGroceries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const grocery: any = await GroceryList.findOne({ where: { id } });
    if (!grocery) {
      throw new Error(`Grocery with id doesnt exist`);
    }
    await grocery.remove();
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
