import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  constructor() {

  }
  displayDialog:boolean;
  public cars:any[]=[{vin:'11',year:'1989',brand:'aa',color:'red'},{vin:'22',year:'33',brand:'ירון',color:'מילשטיין'}];
  ngOnInit() {

  }
  showDialogToAdd()
  {
    this.displayDialog = true;
  }

}
