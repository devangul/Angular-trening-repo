import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ColorsComponent } from "./colors/colors.component";
import { CommentsComponent } from "./comments/comments.component";
import { UserComponent } from "./user/user.component";
import { TodosComponent } from "./todos/todos.component";
import { AlbumsComponent } from "./albums/albums.component";

const routes: Routes = [
  { path: "src/app/colors", component: ColorsComponent },
  { path: "src/app/user", component: UserComponent },
  { path: "src/app/comments", component: CommentsComponent },
  { path: "src/app/todos", component: TodosComponent },
  { path: "src/app/albums", component: AlbumsComponent },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
