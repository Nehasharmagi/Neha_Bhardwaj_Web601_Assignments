import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentListComponent} from "../content-list/content-list.component";
import {RouterModule, Routes} from "@angular/router";
import {ContentDetailsComponent} from "../content-details/content-details.component";
import {SearchMovieComponent} from "../search-movie/search-movie.component";


const routes: Routes = [
  // { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',

    component: ContentListComponent,
  },
  {
    path: 'detail/:id',

    component: ContentDetailsComponent,
  },
  {
    path: 'search',

    component: SearchMovieComponent,
  },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
