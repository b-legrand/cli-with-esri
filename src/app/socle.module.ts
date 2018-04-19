import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MapModule } from "./map/map.module";
import { WidgetModule } from "./widget/widget.module";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";

import { APP_CONFIG, DEFAULT_APP_CONFIG } from "./core/models/app.config";
import { APP_ROUTES } from "./routes";

/**
 * Module d'export des modules du socle.
 * Point d'entrée pour la compilation AOT / packaging librairie.
 */
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    // modules internes
    MapModule,
    WidgetModule,
    LayoutModule,
    CoreModule,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: DEFAULT_APP_CONFIG,
    },
  ],
})
export class SocleModule {}
