import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express();
const port = process.env.APP_PORT;

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from './routes/user-route';
import authRouter from './routes/auth-route';

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server listen to ${port}`);
});
