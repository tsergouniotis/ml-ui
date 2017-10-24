import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'ml-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    var self = this;

    var selfElement = self.elementRef.nativeElement;

    var data = [5, 10, 20, 45, 6, 25];

    //var data = d3.range(1000).map(d3.randomBates(10));

    var margin = { top: 10, right: 30, bottom: 30, left: 40 };
    var width = 200 - margin.left - margin.right;
    var height = 200 - margin.top - margin.bottom;

    var max = d3.max(data);
    var min = d3.min(data);

    var formatCount = d3.format(",.0f");

    var xScale = d3.scaleLinear().domain([min, max]).rangeRound([0, width]);

    //this is the function
    var histogram = d3.histogram()
      .thresholds(xScale.ticks(5));

    // group the data for the bars
    var bins = histogram(data);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, function (d) { return d.length; })])
      .range([height, 0]);

    //create the svg
    var svg = d3.select(selfElement)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var bar = g.selectAll(".bar")
      .data(bins)
      .enter().append("g")
      .attr("class", "bar")
      .attr("transform", function (d) { return "translate(" + xScale(d.x0) + "," + yScale(d.length) + ")"; });

    bar.append("rect")
      .attr("x", 1)
      .attr("width", xScale(bins[0].x1) - xScale(bins[0].x0) - 1)
      .attr("height", function (d) { return height - yScale(d.length); });

    bar.append("text")
      .attr("dy", ".75em")
      .attr("y", 6)
      .attr("x", (xScale(bins[0].x1) - xScale(bins[0].x0)) / 2)
      .attr("text-anchor", "middle")
      .text(function (d) { return formatCount(d.length); });

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    // add the y Axis
    //svg.append("g").call(d3.axisLeft(yScale));

  }

}
