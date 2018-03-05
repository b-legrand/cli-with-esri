import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApplicationRef, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from "@angularclass/hmr";

import { MapModule } from "./map/map.module";
import { WidgetModule } from "./widget/widget.module";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";
import { LibraryModule } from "./library/library.module";

import { APP_CONFIG, DEFAULT_APP_CONFIG } from "./core/model/app.config";
import { routes } from "./routes";

/**
 * Module d'export des modules du socle.
 * Point d'entrée pour la compilation AOT / packaging librairie.
 */
@NgModule({
  declarations: [],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    MapModule,
    WidgetModule,
    LayoutModule,
    CoreModule,
    LibraryModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }]
})
export class SocleModule {}
