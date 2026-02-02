import { Task } from '../types/task';

// Mock data (replace with database later)
const tasks: Task[] = [
    {
        id: 1,
        title: 'Learn REST APIs',
        description: 'Understand how to build REST APIs with Express',
        status: 'in-progress',
        dueDate: '2026-02-10',
        createdAt: '2026-02-02',
    },
    {
        id: 2,
        title: 'Build Task Manager',
        description: 'Create a full CRUD API for tasks',
        status: 'pending',
        dueDate: '2026-02-15',
        createdAt: '2026-02-02',
    },
];

// Find all tasks
export const findAllTasks = (): Task[] => {
    return tasks;
};

// Find task by ID
export const findTaskById = (id: number): Task | undefined => {
    return tasks.find((task) => task.id === id);
};

// Create a new task
export const createTask = (taskData: Omit<Task, 'id' | 'createdAt'>): Task => {
    const newTask: Task = {
        id: tasks.length + 1,
        ...taskData,
        createdAt: new Date().toISOString().split('T')[0],
    };
    tasks.push(newTask);
    return newTask;
};

// Update a task
export const updateTask = (id: number, taskData: Partial<Task>): Task | undefined => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) return undefined;

    tasks[index] = { ...tasks[index], ...taskData };
    return tasks[index];
};

// Delete a task
export const deleteTask = (id: number): boolean => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
};
