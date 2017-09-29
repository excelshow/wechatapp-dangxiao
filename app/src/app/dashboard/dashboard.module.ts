import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RootComponent } from './root/root.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MsgIconBtnComponent } from './msgiconbtn/msgiconbtn.component';
import { FigurecardComponent } from './figurecard/figurecard.component';
import { FooterComponent } from './footer/footer.component';
import { ImagecardComponent } from './imagecard/imagecard.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    RootComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    MsgIconBtnComponent,
    FigurecardComponent,
    FooterComponent,
    ImagecardComponent,
    SettingsComponent,
    ProfileComponent,
    NewsListComponent,
    TableComponent,
  ]
})
export class DashboardModule { }
