import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'src/app/colors', component: ColorsComponent },
  { path: 'src/app/user', component: UserComponent },
  { path: 'src/app/comments', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
