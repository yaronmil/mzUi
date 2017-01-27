import {Component, OnInit, ElementRef} from '@angular/core';
import {D3Service, D3, Selection, SimulationNodeDatum} from 'd3-ng2-service';
import{SystemDataProviderService} from  './../system-data-provider.service'
import {system} from './../system'
import {sysLink} from './../sys-link'
import {SimulationLinkDatum} from "d3-force";

@Component({
  selector: 'app-sys-relations',
  template: ``
})
export class SysRelationsComponent implements OnInit {

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  node: SimulationNodeDatum;
  private parentNativeElement: any;
  private sdps;

  private width: number = 1800;
  private height: number = 600;
  constructor(element: ElementRef, d3Service: D3Service, systemDataProviderService: SystemDataProviderService) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    console.log(element.nativeElement)
    this.parentNativeElement = element.nativeElement;
    this.sdps=systemDataProviderService.getSystemsWithRelataions();
  }

  public ticked(a) {
    console.log(a);
  }

  ngOnInit() {
    //this.d3.select(this.parentNativeElement).style("color", "red").append("p").text("hghghg");


    var svg = this.d3.select(this.parentNativeElement).append("svg");
    svg.attr("width", this.width).attr("height", this.height);
    let color = this.d3.scaleOrdinal(this.d3.schemeCategory20);


  //  var nodes: system[] = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
    var nodes=this.sdps.nodes;

    /*var links = [
      {"source": "Alice", "target": "Bob"},

    ];*/

    var links=this.sdps.links;

    var simulation = this.d3.forceSimulation(nodes)
      .force("charge", this.d3.forceManyBody())
      .force("link", this.d3.forceLink(links).id(function (d:{ id: string ,group:number}) {
        return d.id
      }))
      .force("center", this.d3.forceCenter(this.width / 2, this.height / 2));

    var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line");

    var that = this;
    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", 25)
      .attr("fill",function(d:{ id: string ,group:number}) { return color(d.id.toString()); })


    simulation
      .nodes(nodes)
      .on("tick", function () {
        link
          .attr("x1", function (d: SimulationLinkDatum<SimulationNodeDatum>) {
            return (<SimulationNodeDatum>d.source).x
          })
          .attr("y1", function (d: SimulationLinkDatum<SimulationNodeDatum>) {
            return (<SimulationNodeDatum>d.source).y
          })
          .attr("x2", function (d: SimulationLinkDatum<SimulationNodeDatum>) {
            return (<SimulationNodeDatum>d.target).x
          })
          .attr("y2", function (d: SimulationLinkDatum<SimulationNodeDatum>) {
            return (<SimulationNodeDatum>d.target).y
          });
        node
          .attr("cx", function (d: SimulationNodeDatum) {
            return d.x;
          })
          .attr("cy", function (d: SimulationNodeDatum) {
            return d.y;
          });
      });
    this.d3.selectAll("circle").call(this.d3.drag().on("start", function (d: SimulationNodeDatum) {
      if (!that.d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      console.log(d)
    }).on("drag", function (d: SimulationNodeDatum) {
        d.fx = that.d3.event.x;
        d.fy = that.d3.event.y;
    }).on("end", function (d: SimulationNodeDatum) {
        if (!that.d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }));


  }

}
