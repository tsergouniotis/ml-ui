import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

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

    var dataset = [
      [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
      [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];

    var margin = { top: 10, right: 30, bottom: 30, left: 40 };
    var w = 400 - margin.left - margin.right;
    var h = 400 - margin.top - margin.bottom;

    //var margin = { top: 10, right: 50, bottom: 20, left: 50 };
    //var w = 600 - margin.left - margin.right;
    //var h = 200 - margin.top - margin.bottom;
    var padding = 20;

    d3.max(dataset, function (d) {
      return d[0]; //References first value in each subarray
    });

    var xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[0]; })])
      .range([padding, w - padding * 2]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      .range([h - padding, padding]);

    var rScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function (d) { return d[1]; })])
      .range([2, 5]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    //create the svg
    var svg = d3.select(selfElement)
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    //append the circles
    svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[0]);
      })
      .attr("cy", function (d) {
        return yScale(d[1]);
      })
      .attr("r", d => rScale(d[1]));

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d[0] + "," + d[1];
      })
      .attr("x", d => xScale(d[0]))
      .attr("y", d => yScale(d[1]))
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "red");

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);

  }

}
