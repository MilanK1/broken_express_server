import { Router } from 'express';
import userRegister from './userRegister';
import getAllUsers from './getAllUsers';
const router = Router();

router.post('/userRegister', userRegister);
router.get('/', getAllUsers);

export default router;
