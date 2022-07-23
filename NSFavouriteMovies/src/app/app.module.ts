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
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ChangeContentComponent} from "./change-content/change-content.component";
import {FormsModule} from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    ChangeContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
