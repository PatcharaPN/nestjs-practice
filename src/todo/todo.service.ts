import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import * as uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
@Injectable() //Class สามารถถูกเรียกผ่าน constructure ได้
export class TodoService {
  todoArray: Todo[] = []; //entity
  addTodo(title: string, subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuidv4();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo);
  }

  getTodo() {
    return this.todoArray;
  }
  removeTodoById(id: string) {
    const found = this.todoArray.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Todo with id ${id} Not found`);
    }
    this.todoArray = this.todoArray.filter((item) => {
      return item.id !== id;
    });
  }
}
