import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'ml-scatter-plot',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    var self = this;

    var selfElement = self.elementRef.nativeElement;

    var w = 500;
    var h = 100;

    var dataset = [
      [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
      [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];


    d3.max(dataset, function (d) {
      return d[0]; //References first value in each subarray
    });

    var xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[0]; })])
      .range([0, w]);


    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      .range([0, h]);


    var svg = d3.select(selfElement)
      .append("svg")
      .attr("width", w)
      .attr("height", h);


    svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return d[0];
      })
      .attr("cy", function (d) {
        return d[1];
      })
      .attr("r", d => Math.sqrt(h - d[1]));

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d[0] + "," + d[1];
      })
      .attr("x", d => d[0])
      .attr("y", d => d[1])
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "red");

  }

}
