import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentItemEditComponent } from './student-item-edit/student-item-edit.component';
import { StudentItemAddComponent } from './student-item-add/student-item-add.component';


const routes: Routes = [
  { path: 'student-item-edit/:id', component: StudentItemEditComponent },
  { path: 'student-item-add', component: StudentItemAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

