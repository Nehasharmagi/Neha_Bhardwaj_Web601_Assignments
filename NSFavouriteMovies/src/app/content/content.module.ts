import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentListComponent } from '../content-list/content-list.component';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypePipePipe } from '../type-pipe.pipe';
import { HighlightImportantDataDirective } from '../highlight-important-data.directive';

@NgModule({
  declarations: [
    ContentListComponent,
    ContentCardComponent,
    TypePipePipe,
    HighlightImportantDataDirective,
  ],
  imports: [CommonModule, ContentRoutingModule],
})
export class ContentModule {}
