import { Component } from '@angular/core';
import { Task } from './task'
import data from './data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNameInputEmpty = true;
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

  onNameInputChange(event: any) {
    this.isNameInputEmpty = event.target.value.length < 1;
  }
  createTasks(name: string, date: string) {
    const task: Task = {
      name: name,
      deadline: date,
      done: false
    }
    this.tasks.push(task);
  }
}
