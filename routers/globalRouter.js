import express from 'express';
import routes from '../routes' //파일 하나 밖
import { home, search } from '../controller/videoController';
import { getJoin, getLogin, postJoin, postLogin, logout } from '../controller/userController';

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home); //auto import
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);
export default globalRouter;