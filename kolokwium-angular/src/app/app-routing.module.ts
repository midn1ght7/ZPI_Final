import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentItemEditComponent } from './student-item-edit/student-item-edit.component';

const routes: Routes = [
  { path: 'student-item-edit/:id/edit', component: StudentItemEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

