import { AnimatedButtonComponent } from './animated-button/animated-button.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AnimatedButtonComponent, BottomPanelComponent],
  imports: [CommonModule],
})
export class SharedModule {}
