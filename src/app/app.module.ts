import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DoprrBodyComponent } from './doprr-body/doprr-body.component';
import { DoprrOverContainerComponent } from './doprr-over-container/doprr-over-container.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,

    BottomPanelComponent,
    AnimatedButtonComponent,

    DoprrBodyComponent,
    DoprrOverContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,

    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
