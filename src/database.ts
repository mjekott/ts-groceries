import { createConnection } from 'typeorm';

export const dbConnect = async () => {
  try {
    await createConnection();
    console.log('connected');
  } catch (err) {
    console.log(err);
  }
};
