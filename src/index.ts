import 'dotenv/config';
import { dbConnect } from './database';
import { server } from './server';

(async () => {
  try {
    await server();
    await dbConnect();
  } catch (err) {
    console.log(err);
  }
})();
