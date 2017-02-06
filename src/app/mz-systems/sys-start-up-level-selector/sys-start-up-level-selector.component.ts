import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';


@Component({
  selector: 'sys-start-up-level-selector',
  templateUrl: './sys-start-up-level-selector.component.html',
  styleUrls: ['./sys-start-up-level-selector.component.css']
})
export class SysStartUpLevelSelectorComponent implements OnInit {

  constructor(public dialog: MdDialog) {

  }
  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog, {
      height: '200px',
      width: '600px'

    });
  }

  ngOnInit() {
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template : ` <h2 md-dialog-title>הוסף תקלה / מערכת</h2>
    <md-dialog-content>
      
      
    </md-dialog-content>
    <md-dialog-actions [attr.align]="actionsAlignment">
      <button
        md-raised-button
        color="primary"
        md-dialog-close>Close</button>
      
      
      
    </md-dialog-actions>`,
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogOverviewExampleDialog>) { }
}
