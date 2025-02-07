import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSharedComponent } from './components/button-shared/button-shared.component';
import { MatInputModule } from '@angular/material/input';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const MATERIAL_MODULE = [
  MatSnackBarModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    ButtonSharedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL_MODULE
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL_MODULE,
  ]
})
export class SharedModule { }
