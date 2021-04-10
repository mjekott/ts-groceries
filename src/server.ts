import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export const server = () => {
  app.listen(process.env.PORT);
  console.log(`app is listening on port ${process.env.PORT}`);
};
