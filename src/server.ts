import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export const server = () => {
  app.listen(8090);
  console.log('app is listening on port 8090');
};
