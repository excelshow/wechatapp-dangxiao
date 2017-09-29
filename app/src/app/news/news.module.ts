import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsListComponent
  ]
})
export class NewsModule { }
