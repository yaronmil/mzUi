import { Component, OnInit } from '@angular/core';
import { GaugeSegment, GaugeLabel } from 'ng2-kw-gauge';

@Component({
  selector: 'sys-monthly-gouge',
  template : `<img src="../../../assets/gauge.png" width="250px"/>
<!-- <ng2-kw-gauge
  [bgRadius] = gaugeTemplate.bgRadius
  [bgColor] = gaugeTemplate.bgColor
  [rounded] = gaugeTemplate.rounded
  [reverse] = gaugeTemplate.reverse
  [animationSecs] = gaugeTemplate.animationSecs
  [segments] = gaugeTemplate.segments
>
</ng2-kw-gauge>-->
`,
  styles: ['']
})
export class MonthlyGougeComponent implements OnInit {

  public gaugeTemplate = {
    bgRadius: 20,
    bgColor: "grey",
    rounded: true,
    reverse: false,
    animationSecs: 5,
    labels: [
      new GaugeLabel({
        color: 'black',
        text: 'yarr',
        x: 0,
        y: 2,
        fontSize: '50px'
      })
    ],
    segments: [
      new GaugeSegment({
        value: 50,
        color: "#7cc17c",
        borderWidth: 5,
        radius: 40
      }),
      new GaugeSegment({
        value: 75,
        color: "#5a5a8a",
        borderWidth: 5,
        radius: 30
      })
    ]
  };
  constructor() {

  }

  ngOnInit() {
  }

}
