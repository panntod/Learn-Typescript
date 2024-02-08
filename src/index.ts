import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from './routes/user-routes';

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server listen to ${port}`);
});
