import express from 'express';
import register from '../controller/auth/register.js';
import logout from '../controller/auth/logout.js';
import login from '../controller/auth/login.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);


export default router;