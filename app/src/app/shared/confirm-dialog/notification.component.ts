import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-notification',
  template: `
  <div class="alert alert-{0} alert-with-icon col-md-4">
  <i class="material-icons alert-icon">notifications</i>
  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>
  <span>{2}</span>
</div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {

  title: string = '';
  content: string = '';

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  
  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
