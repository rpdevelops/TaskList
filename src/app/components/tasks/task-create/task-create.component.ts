import { Component } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  testAtribute = "testing atribute";
  
  testMethod(): void {
    console.log("test sucessful!");
  }

}
