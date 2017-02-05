import {Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {D3Service, D3, SimulationNodeDatum} from 'd3-ng2-service';
import{SystemDataProviderService} from  './system-data-provider.service'
import {MzSystem} from './mz-system'
import {SimulationLinkDatum} from "d3-force";
import {sysLink} from "./sys-link";
import {link} from "fs";
import {MdSidenav} from "@angular/material";



@Component({
  selector: 'app-sys-map',
  templateUrl: './mz-sys-map.component.html',
  styles:[
    ` 
      #tile1 figure{
        flex-direction: column !important;
        align-items: stretch;
        justify-content: inherit;
      }
       #tile1 md-grid-tile-header{
       position: static;
       }
       .md-list-item{
       font-size:14px !important;
       height:36px !important;
       }
       
`],
  encapsulation: ViewEncapsulation.None
})
export class MzSysMapComponent   {

  @ViewChild('leftmenu') leftmenu: MdSidenav;
  private d3: D3;
  private parentNativeElement: any;
  private nodes:MzSystem[]=null;
  private links:sysLink[]=null;

  private width: number = window.innerWidth;
  private height: number = window.innerHeight-118;
  constructor(element: ElementRef, d3Service: D3Service, systemDataProviderService: SystemDataProviderService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
    systemDataProviderService.getSystemsList().subscribe(
      nodes => {
        this.nodes = nodes;
        this.checkGetDataDone()

      });

    systemDataProviderService.getSysLinks().subscribe(
      links => {
        this.links = links;
        this.checkGetDataDone()});

  }

  private checkGetDataDone()
  {

    if(this.links!=null && this.nodes!=null)
    {
      const linkSysNames =[];
      this.links.forEach(l=>{
        linkSysNames.push(l.target);
        linkSysNames.push(l.source)
      });
      this.nodes=this.nodes.filter(n=>linkSysNames.includes(n.name));
      this.nodes=this.nodes.filter( (node, index, self)=>{return self.findIndex((n:MzSystem)=>{return n.name==node.name }) === index;});
      this.drawGraph();
    }

  }

  private drawGraph() {
    let svg = this.d3.select("#mzSysMapSvg");


    svg.attr("width", this.width).attr("height", this.height);
    /*let color = this.d3.scaleOrdinal(this.d3.schemeCategory20);*/
    let simulation = this.d3.forceSimulation(this.nodes)
      .force("charge", this.d3.forceManyBody())
      .force("charge", this.d3.forceManyBody())
      .force("collide",this.d3.forceCollide( function(){return 40.5 }).iterations(16) )
      .force("link", this.d3.forceLink(this.links).distance(150).id(function (d:MzSystem) {
        /*return d.id.toString()*/
        return d.name
      }))
      .force("center", this.d3.forceCenter(this.width / 2, this.height / 2));
    let link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.links)
      .enter().append("line");
    let that = this;
    let node = svg.selectAll(".node").data(this.nodes).enter().append("g") .attr("class", "node");
    node.on("click",function(){
        that.leftmenu.toggle();
    })
    node.append("circle").attr("r", 32.5).attr("fill","rgb(255, 216, 110)");


    //.attr("fill",function(d) { return color(d.loadOrder==null ?"2" :d.loadOrder.toString()); });
    node.append("text")
      .attr("y", 10).attr("fill","rgb(96, 74, 14)")
      .attr("text-anchor","middle")
      .text(function(d) { return d.name });
    simulation
      .nodes(this.nodes)
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
        that.d3.selectAll("circle")
          .attr("stroke-width","2px").
          attr("stroke","rgb(237, 186, 57")

          .attr("cx", function (d: SimulationNodeDatum) {
            return d.x;
          })
          .attr("cy", function (d: SimulationNodeDatum) {
            return d.y;
          });

        that.d3.selectAll("text")
          .attr("x", function (d: SimulationNodeDatum) {
            return d.x;
          })
          .attr("y", function (d: SimulationNodeDatum) {
            return d.y;
          });

      });

    svg.call(this.d3.zoom()
      .scaleExtent([1 / 2, 8])
      .on("zoom", function(){
        node.attr("transform", that.d3.event.transform);
        link.attr("transform", that.d3.event.transform);
      }));

    this.d3.selectAll("g").call(this.d3.drag().on("start", function (d: SimulationNodeDatum) {
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
