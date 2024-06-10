import { bootstrapApplication } from "@angular/platform-browser";

import { FeComponent, feConfig } from "@todo/fe";

bootstrapApplication(FeComponent, feConfig).catch((err) =>
  console.error(err)
);
