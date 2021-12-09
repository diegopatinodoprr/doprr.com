import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DoprrBodyComponent } from './doprr-body.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: DoprrBodyComponent },

  {
    path: 'carrier',
    loadChildren: () =>
      import('../carrier/carrier.module').then((m) => m.CarrierModule),
  },
];
@NgModule({
  declarations: [DoprrBodyComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    SharedModule,
  ],
  exports: [SharedModule],
})
export class DoprrbodyModule {}
