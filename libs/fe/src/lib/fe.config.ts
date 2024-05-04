import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { pageRoutes } from "@todo/page";

export const feConfig: ApplicationConfig = {
  providers: [provideRouter(pageRoutes)]
};
