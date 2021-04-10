import { Router } from 'express';
import info from './info';

const router = Router();
router.get('/', info);
export default router;
