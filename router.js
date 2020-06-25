import express from 'express';

export const userRouter = express.Router(); //이 변수만

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get('/profile', (req, res) => res.send('user profile'));
userRouter.get("/password/reset", (req, res) => res.send('user password'));

