import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from "ng2-validation";
import { 
  MdButtonModule, 
  MdRadioModule, 
  MdInputModule, 
  MdMenuModule, 
  MdCheckboxModule, 
  MdIconModule,
  MdDialogModule, 
} from '@angular/material';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';


import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    FormsModule,
    ReactiveFormsModule,
    MdDialogModule,
    CustomFormsModule,
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    FormsModule,
    ReactiveFormsModule,
    MdDialogModule,
    CustomFormsModule,
  ],
  declarations: [
    ConfirmDialogComponent 
  ],
  entryComponents: [
    ConfirmDialogComponent 
  ]
})
export class SharedModule { }
