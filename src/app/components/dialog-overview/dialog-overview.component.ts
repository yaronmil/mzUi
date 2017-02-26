import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MaterialModule } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Fault } from "../../models/fault";
import { SystemDataProviderService } from '../../services/system-data-provider.service'
import { MzSystem } from "../../models/mz-system";

@Component({
  selector: 'mz-ui-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  public systems: MzSystem[];
  fault:Fault;

  constructor(public dialogRef: MdDialogRef<DialogOverviewComponent>, systemDataProviderService: SystemDataProviderService) {
      this.fault = new Fault();
      systemDataProviderService.getSystemsList().subscribe(
      sys => {
        this.systems = sys;
      });
  }


  ngOnInit() {
  }

}
