import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { WidgetModule } from './widget/widget.module';
import { LayoutModule } from './layout/layout.module';

import { APP_CONFIG, DEFAULT_APP_CONFIG } from './core/model/app.config';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MapModule,
    WidgetModule,
    LayoutModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
