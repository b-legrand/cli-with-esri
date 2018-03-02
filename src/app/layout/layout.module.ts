import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProgressBarModule } from 'primeng/primeng';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SpacePageComponent } from './pages/space-page/space-page.component';

import { SncfHeaderComponent } from './components/sncf-header/sncf-header.component';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';

import { MapModule } from '../map/map.module';
import { SidebarPageComponent } from './components/sidebar-page/sidebar-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SncfThemeComponent } from './components/sncf-theme/sncf-theme.component';

@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent,
    SncfHeaderComponent,
    KitchenSinkComponent,
    SpacePageComponent,
    SidebarPageComponent,
    HelpPageComponent,
    AboutPageComponent,
    SncfThemeComponent,
  ],
  exports: [
    SncfHeaderComponent,
    SncfThemeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapModule,
    // primeng
    SidebarModule,
    ScrollPanelModule,
    ProgressBarModule,
  ],
})
export class LayoutModule { }
