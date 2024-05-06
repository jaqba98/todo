import { ApplicationConfig } from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";

import { pageRoutes } from "@todo/page";

export const feConfig: ApplicationConfig = {
  providers: [
    provideRouter(pageRoutes, withHashLocation())
  ]
};
