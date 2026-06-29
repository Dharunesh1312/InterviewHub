import express from 'express';
import createExperience from '../controller/experience/createExperience.js';
import protect from '../utils/middleware.js';
import getAllExperience from '../controller/experience/getAllExperience.js';
import getSingleExperience from '../controller/experience/getSingleExperience.js';

const router = express.Router();

router.post('/create',protect, createExperience);
router.get('/all', getAllExperience);
router.get('/:id', getSingleExperience);



export default router;