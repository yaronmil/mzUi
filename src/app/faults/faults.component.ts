import { Component, OnInit } from '@angular/core';
import {Fault} from "../models/fault";
import {FaultsDataProviderService} from "../services/faults-data-provider.service";

@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css']
})
export class FaultsComponent implements OnInit {
  public faults:Fault[];
  constructor(fds:FaultsDataProviderService) {
    fds.getFaults().subscribe(
      faults => {
        this.faults = faults
      });
  }
  ngOnInit() {
  }

}
