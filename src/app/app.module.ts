import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosService } from './service/photos.service';
import { UserService } from './service/user.service';
import { FilterPipe } from './pipe/filter.pipe';
import { UserComponent } from './user/user.component';
import { ColorsComponent } from './colors/colors.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './service/cooments.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    UserComponent,
    ColorsComponent,
    FilterPipe,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PhotosService, UserService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
