import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { feRoutes } from "./fe.routes";

export const feConfig: ApplicationConfig = {
  providers: [provideRouter(feRoutes)]
};
