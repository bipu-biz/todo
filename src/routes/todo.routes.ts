import { Router } from 'express';
import { getTodos, addTodo, deleteTodo } from '../controllers/todo.controller';

const router = Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);

export default router;