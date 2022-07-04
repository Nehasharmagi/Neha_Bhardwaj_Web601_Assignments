import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TypePipePipe } from './type-pipe.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { ContentDetailsComponent } from './content-details/content-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TypePipePipe,
    HighlightImportantDataDirective,
    ContentDetailsComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
