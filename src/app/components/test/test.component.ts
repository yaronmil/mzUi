import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  falts:string;
  http:Http;
  constructor(https:Http) {
    this.falts="dsds";
    this.http=https;
  }
  displayDialog:boolean;
  public cars:any[]=[{vin:'11',year:'1989',brand:'aa',color:'red'},{vin:'22',year:'33',brand:'ירון',color:'מילשטיין'}];
  ngOnInit() {
    console.log("ctorrrrrrrrrrr");

  }
  private  aaa( )
  {

    this.http.get( "api/faults").map(this.extractData)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error')).subscribe(res => {
      console.log(res);
    });
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  showDialogToAdd()
  {
    this.displayDialog = true;
  }

}
