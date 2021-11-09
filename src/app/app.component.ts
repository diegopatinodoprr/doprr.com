import { Component, ViewChild } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event as RouterEvent,
} from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public showOverlay = true;

  @ViewChild('introduction', { static: true })
  introChild: any;
  title = 'doprr';
  constructor(private router: Router) {}

  // Shows and hides the loading spinner during RouterEvent changes
  public hideintro() {
    (this.introChild as IntroductionComponent).hide();
  }
}
