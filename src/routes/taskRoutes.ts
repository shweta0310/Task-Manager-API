import { Router } from 'express';
import {
    createNewTask,
    deleteExistingTask,
    getAllTasks,
    getTaskById,
    updateExistingTask,
} from '../controllers/taskController';

const router = Router();

// GET /api/tasks - Get all tasks
router.get('/', getAllTasks);

// GET /api/tasks/:id - Get task by ID
router.get('/:id', getTaskById);

// POST /api/tasks - Create new task
router.post('/', createNewTask);

// PUT /api/tasks/:id - Update task
router.put('/:id', updateExistingTask);

// DELETE /api/tasks/:id - Delete task
router.delete('/:id', deleteExistingTask);

export default router;
