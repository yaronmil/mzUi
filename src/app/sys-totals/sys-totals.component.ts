import {Component, OnInit, Input} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-sys-totals',
  templateUrl: './sys-totals.component.html',
  styleUrls: ['./sys-totals.component.css']
})
export class SysTotalsComponent implements OnInit {

  @Input()
  id:number;
  constructor() { }

  ngOnInit() {
    console.log('#chart'+this.id)
    var chart = c3.generate({
      bindto: '#chart1',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
        axes: {
          data2: 'y2'
        }
      },
      axis: {
        y: {
          label: { // ADD
            text: 'Y Label',
            position: 'outer-middle'
          }
        },
        y2: {
          show: true,
          label: { // ADD
            text: 'Y2 Label',
            position: 'outer-middle'
          }
        }
      }
    });

    var pie = c3.generate({
      bindto: '#pie',
      data: {
        // iris data from R
        columns: [
          ['data1', 30],
          ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    });
  }

}
