import { Component, ViewChild } from '@angular/core';

import { IntroductionComponent } from './introduction/introduction.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public showOverlay = true;

  @ViewChild('doprrBody', { static: true })
  doprrBody: any;

  @ViewChild('introduction', { static: true })
  introChild: any;
  title = 'doprr';
  constructor(private router: Router) {}

  // Shows and hides the loading spinner during RouterEvent changes
  public hideintro() {
    (this.introChild as IntroductionComponent).hide();
  }

  public setupTheme(theme: string) {
    this.router.navigate(['/']);
    //(this.doprrBody as DoprrBodyComponent).getPictureForBackground(theme);
  }
}
