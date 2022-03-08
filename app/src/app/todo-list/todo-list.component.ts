import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  newTask: string = '';

  tasks: TodoItem[] = [];

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false
    });
  }

  deleteTask(i: number) {
    console.log('Excluir posicao ' + i);
    this.tasks.splice(i, 1);
  }

}