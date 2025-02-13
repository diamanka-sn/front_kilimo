import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends AbstractService<any>{

  constructor(http: HttpClient, matSnackbar: MatSnackBar) {
    super(http, matSnackbar);
  }

}
