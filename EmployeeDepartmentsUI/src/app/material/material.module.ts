import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatTableModule, MatButtonToggleModule,
  MatIconModule, MatSortModule, MatFormFieldModule, MatInputModule, MatDialogModule,
  MatSnackBar, MatSnackBarModule, MatSpinner, MatCardModule, MatProgressSpinnerModule,
} from '@angular/material';



const MaterialComponent = [
  MatButtonModule, MatCheckboxModule,
  MatTableModule, MatButtonToggleModule, MatTableModule, MatIconModule, MatSortModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule,
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponent

  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
