import express from 'express';
import routes from '../routes';
import { users, userDetail, editProfile, changePassword } from '../controller/userController';
const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);
// 입력안받은경우 USER_DETAIL
export default userRouter;