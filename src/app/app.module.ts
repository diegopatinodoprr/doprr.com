import {} from 'pexels';

import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DoprrBodyComponent } from './doprr-body/doprr-body.component';
import { DoprrOverContainerComponent } from './doprr-over-container/doprr-over-container.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,

    BottomPanelComponent,
    AnimatedButtonComponent,

    DoprrBodyComponent,
    DoprrOverContainerComponent,
    IntroductionComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]),

    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
