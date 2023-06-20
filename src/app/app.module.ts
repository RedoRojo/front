import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './paginas/posts/posts.component';
import { HeaderComponent } from './elementos/header/header.component';
import { UniquePostComponent } from './elementos/unique-post/unique-post.component';
import { CommentsForPostComponent } from './elementos/comments-for-post/comments-for-post.component';
import { DetallePComponent } from './paginas/detalle-p/detalle-p.component';
import { FormularioReactivoPostComponent } from './elementos/formulario-reactivo-post/formulario-reactivo-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MisPostsComponent } from './paginas/mis-posts/mis-posts.component';
import { DetalleCComponent } from './paginas/detalle-c/detalle-c.component';
import { UserAccountComponent } from './elementos/user-account/user-account.component';
import { MyAccountComponent } from './paginas/my-account/my-account.component';
import { DetalleUserComponent } from './paginas/detalle-user/detalle-user.component';
import { AdminPostsComponent } from './paginas/admin-posts/admin-posts.component';
import { UniquePostAdminComponent } from './elementos/unique-post-admin/unique-post-admin.component';
import { CommentsAdminComponent } from './elementos/comments-admin/comments-admin.component';
import { AdminUsersComponent } from './paginas/admin-users/admin-users.component';
import { UserFormComponent } from './elementos/user-form/user-form.component';

import { FormularioReactivoCommentComponent } from './elementos/formulario-reactivo-comment/formulario-reactivo-comment.component';

import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { LoginFormComponent } from './elementos/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    UniquePostComponent,
    CommentsForPostComponent,
    DetallePComponent,
    FormularioReactivoPostComponent,
    MisPostsComponent,
    DetalleCComponent,
    UserAccountComponent,
    MyAccountComponent,
    DetalleUserComponent,
    AdminPostsComponent,
    UniquePostAdminComponent,
    CommentsAdminComponent,
    AdminUsersComponent,
    UserFormComponent,

    FormularioReactivoCommentComponent,

    LoginComponent,
    RegisterComponent,
    LoginFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
