import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { H } from "highlight.run";

// See https://app.highlight.run/setup for your project ID.
H.init("YOUR_PROJECT_ID", {
  debug: { clientInteractions: true, domRecording: true },
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
  },
  tracingOrigins: true,
  scriptUrl: "http://localhost:8080/dist/index.js",
  backendUrl: "http://localhost:8082/public",
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
