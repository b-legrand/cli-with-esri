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
import { LoremIpsumDirective } from './directives/lorem-ipsum.directive';
import { MenuModule } from 'primeng/menu';

/**
 * Module offrant des composants de disposition générique aux applications.
 */
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
    LoremIpsumDirective,
  ],
  exports: [
    SncfHeaderComponent,
    SncfThemeComponent,
    LoremIpsumDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapModule,
    // primeng
    SidebarModule,
    ScrollPanelModule,
    ProgressBarModule,
    MenuModule,
  ],
})
export class LayoutModule { }
