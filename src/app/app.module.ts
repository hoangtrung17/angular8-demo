import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { NotifierModule } from "angular-notifier";
import {
  MatSidenavModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material'
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { DemoContentComponent } from './components/demo-content/demo-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { MatCardModule } from '@angular/material/card';
import { EditPostComponent } from './edit-post/edit-post.component'
@NgModule({
  declarations: [
    AppComponent,
    DateInputComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    PostsComponent,
    CommentsComponent,
    UsersComponent,
    DemoContentComponent,
    AddUserComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
    MatListModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NotifierModule.withConfig({})
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
