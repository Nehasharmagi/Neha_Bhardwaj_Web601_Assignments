import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TypePipePipe } from './type-pipe.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { ContentDetailsComponent } from './content-details/content-details.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TypePipePipe,
    HighlightImportantDataDirective,
    ContentDetailsComponent,
    SearchMovieComponent,
    PageNotFoundComponent,
    LinkComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
