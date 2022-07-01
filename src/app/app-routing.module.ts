import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ColorsComponent } from "./colors/colors.component";
import { CommentsComponent } from "./comments/comments.component";
import { UserComponent } from "./user/user.component";
import { TodosComponent } from "./todos/todos.component";
import { AlbumsComponent } from "./albums/albums.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { ContentComponent } from "./main-menu/content/content.component";

const routes: Routes = [
  {
    path: "src/app/main-menu",
    component: MainMenuComponent,
    children: [
      {
        path: "content",
        component: ContentComponent,
        children: [
          { path: "colors", component: ColorsComponent },
          { path: "user", component: UserComponent },
          { path: "comments", component: CommentsComponent },
          { path: "todos", component: TodosComponent },
          { path: "albums", component: AlbumsComponent },
        ],
      },
    ],
  },
  { path: "**", redirectTo: "src/app/main-menu" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
