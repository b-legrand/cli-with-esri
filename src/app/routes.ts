import { SpacePageComponent } from "./layout/pages/space-page/space-page.component";
import { KitchenSinkComponent } from "./layout/components";
import { Routes } from "@angular/router";
import { AboutPageComponent } from "./layout/pages/about-page/about-page.component";
import { HelpPageComponent } from "./layout/pages/help-page/help-page.component";
import { HomePageComponent } from "./layout/pages";

/**
 * Routes génériques des applications socle.
 */
export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "kitchen-sink",
    component: KitchenSinkComponent,
  },
  {
    path: "space/:spaceId",
    component: SpacePageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "help",
    component: HelpPageComponent,
  },
];

export default APP_ROUTES;
