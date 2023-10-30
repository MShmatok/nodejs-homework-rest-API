import express from "express";
import { authorization, isEmptyBody, upload } from '../../middlewares/index.js'
import authControlers from "../../controllers/auth-controlers.js";
import { validateBodyReq } from '../../decorators/index.js'
import { singInSchema, singUpSchema, verifySchema } from "../../models/Model-user.js";


const authRouter = express.Router()
const ValidatorSingup = validateBodyReq(singUpSchema)
const ValidatorSingin = validateBodyReq(singInSchema)
const ValidatorVerify = validateBodyReq(verifySchema)


authRouter.post('/singup', isEmptyBody, ValidatorSingup, authControlers.singup);
authRouter.post('/singin', isEmptyBody, ValidatorSingin, authControlers.singin);
authRouter.get('/verify/:verificationCode', authControlers.verify);
authRouter.post('/verify', isEmptyBody, ValidatorVerify, authControlers.resendEmail);


authRouter.post('/logout', authorization, authControlers.logout);
authRouter.patch('/avatars', authorization, upload.single('avatarURL'), authControlers.changeAvatar);

authRouter.get('/current', authorization, authControlers.current);





export default authRouter;