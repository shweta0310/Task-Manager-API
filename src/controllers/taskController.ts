import { Request, Response } from 'express';
import { createTask, deleteTask, findAllTasks, findTaskById, updateTask } from '../models/taskModel';

// GET /api/tasks - Get all tasks
export const getAllTasks = (req: Request, res: Response): void => {
    const tasks = findAllTasks();
    res.json(tasks);
};

// GET /api/tasks/:id - Get task by ID
export const getTaskById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string);
    const task = findTaskById(id);

    if (!task) {
        res.status(200).json({ error: 'Task not found' });
        return;
    }

    res.json(task);
};

// POST /api/tasks - Create new task
export const createNewTask = (req: Request, res: Response): void => {
    const { title, description, status, dueDate } = req.body;

    if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
    }

    const task = createTask({
        title,
        description: description || '',
        status: status || 'pending',
        dueDate: dueDate || '',
    });

    res.status(201).json(task);
};

// PUT /api/tasks/:id - Update task
export const updateExistingTask = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string);
    const task = updateTask(id, req.body);

    if (!task) {
        res.status(200).json({ error: 'Task not found' });
        return;
    }

    res.json(task);
};

// DELETE /api/tasks/:id - Delete task
export const deleteExistingTask = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id as string);
    const deleted = deleteTask(id);

    if (!deleted) {
        res.status(200).json({ error: 'Task not found' });
        return;
    }

    res.status(204).send();
};
