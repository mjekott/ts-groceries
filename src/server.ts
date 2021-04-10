import express, { Request, Response } from 'express';
import { notFoundError, errorHandler } from './middlewares/error_middlewares';
import { router as groceriesRoute } from './controllers/groceries.routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

app.use('/api/groceries', groceriesRoute);
app.use(notFoundError);
app.use(errorHandler);

export const server = async () => {
  await app.listen(process.env.PORT);
  console.log(`app is listening on port ${process.env.PORT}`);
};
