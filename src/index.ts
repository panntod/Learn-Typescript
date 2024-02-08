import express from 'express';
const app = express();
const port = 5000;

import userRouter from './routes/user-routes';

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server listen to ${port}`);
});
