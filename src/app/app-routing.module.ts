import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { WeekdaysComponent } from './views/weekdays/weekdays.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';

const routes: Routes = [{
  path: "",
  component:HomeComponent
},
{
  path:"weekdays",
  component:WeekdaysComponent
},
{
  path:"tasks/create",
  component:TaskCreateComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
