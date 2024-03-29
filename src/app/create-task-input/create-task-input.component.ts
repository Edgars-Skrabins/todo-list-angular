import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type Task = {
  id: number;
  taskName: string;
  taskDescription: string;
};

@Component({
  selector: 'app-create-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task-input.component.html',
  styleUrl: './create-task-input.component.css',
})
export class CreateTaskInputComponent {
  taskName: string = '';
  taskDescription: string = '';

  @Output() onTaskCreateBtnClicked: EventEmitter<Task> =
    new EventEmitter<Task>();

  async createTask() {
    //TODO: Zod validation
    if (this.taskName === '' && this.taskDescription === '') return;

    const newTask: Task = {
      id: Math.random(),
      taskName: this.taskName,
      taskDescription: this.taskDescription,
    };
    this.onTaskCreateBtnClicked.emit(newTask);
    this.clearInputValues();
  }

  clearInputValues() {
    this.taskName = '';
    this.taskDescription = '';
  }
}
