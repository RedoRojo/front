import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './paginas/posts/posts.component';
import { DetallePComponent } from './paginas/detalle-p/detalle-p.component';
import { MisPostsComponent } from './paginas/mis-posts/mis-posts.component';
import { DetalleCComponent } from './paginas/detalle-c/detalle-c.component';
import { MyAccountComponent } from './paginas/my-account/my-account.component';
import { DetalleUserComponent } from './paginas/detalle-user/detalle-user.component';
import { AdminPostsComponent } from './paginas/admin-posts/admin-posts.component';
import { AdminUsersComponent } from './paginas/admin-users/admin-users.component';
import { UserFormComponent } from './elementos/user-form/user-form.component';

const routes: Routes = [
  {
    path: "posts", component: PostsComponent
  },
  {
    path:"detallePost/:id/:idDos", component: DetallePComponent
  },
  {
    path:"detalleUser/:id", component: DetalleUserComponent
  },
  {
    path:"modificarUser/:id", component: UserFormComponent
  },
  {
    path: "misPosts", component: MisPostsComponent
  },
  {
    path:"detalleComment/:id/:idDos", component: DetalleCComponent
  },
  {
    path:"cuenta", component: MyAccountComponent
  }, 
  {
    path:"admin/posts", component: AdminPostsComponent
  }, 
  {
    path:"admin/users", component: AdminUsersComponent
  }
];

@NgModule({
  imports: [
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
