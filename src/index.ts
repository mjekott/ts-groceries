import 'dotenv/config';
import { dbConnect } from './database';
import { server } from './server';

dbConnect();
server();
