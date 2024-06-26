import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private toDoService: TodoService) {}
  @Get()
  getTodos() {
    return this.toDoService.getTodo();
  }
  @Post()
  postTodos(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    this.toDoService.addTodo(title, subtitle);
    return `todoTitle: ${title} ,todoSubtitle: ${subtitle}`;
  }

  @Delete('/:id')
  deleteTodosById(@Param('id') id: string) {
    console.log(`id: ${id}`);
    return this.toDoService.removeTodoById(id);
  }
}
