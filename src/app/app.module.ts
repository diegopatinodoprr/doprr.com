import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { environment } from '../environments/environment';
import { WeddingComponent } from './wedding/wedding.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { DoprrHeaderComponent } from './doprr-header/doprr-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    BottomPanelComponent,
    AnimatedButtonComponent,
    DoprrHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonToggleModule, MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
