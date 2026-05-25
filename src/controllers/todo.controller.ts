import { Request, Response } from 'express';
import { ITodo } from '../types/index';

const todos: ITodo[] = [];
let nextId = 1;

export const getTodos = (req: Request, res: Response): void => {
  res.status(200).json(todos);
};

export const addTodo = (req: Request, res: Response): void => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: 'Title is required' });
    return;
  }
  const todo: ITodo = { id: nextId++, title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
};

export const deleteTodo = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }
  todos.splice(index, 1);
  res.status(200).json({ message: 'Todo deleted' });
};