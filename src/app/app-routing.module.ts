import { AuthGuard } from './auth-guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//http://localhost:4200/ -> HomeComponent
//http://localhost:4200/about -> AboutComponent
//http://localhost:4200/posts -> PostComponent


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
        {path: 'extra', component: AboutComponent}
    ]},
    {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
    {path: 'posts/:id', component: PostComponent}, //Динамический роутинг по  "id"
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: '/error'}, //указывается всегда последним
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}