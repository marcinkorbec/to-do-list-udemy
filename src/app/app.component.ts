import { Component } from '@angular/core';
import { Task } from './task'
import data from './data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName: string | undefined;
  config: { [key: string]: string | Date; } | undefined ;
  tasks: Task[] = data;

  constructor() {
    setTimeout(()=> {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań, All rights reserved.',
        date: new Date()
      }
    }, 500)
  }

  clearTasks() {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

  createTasks() {
    const task: Task = {
      name: this.taskName,
      deadline: '2023-03-02',
      done: false
    }
    this.tasks.push(task);
  }
}
