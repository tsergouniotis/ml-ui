import { Component, OnInit } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'ml-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var data = [5, 10, 20, 45, 6, 25];

    var margin = { top: 10, right: 30, bottom: 30, left: 40 };
    var width = 200 - margin.left - margin.right;
    var height = 200 - margin.top - margin.bottom;

    var max = d3.max(data);
    var min = d3.min(data);



    var x = d3.scaleLinear().domain([min, max]).rangeRound([0, width]);

    var y = d3.scaleLinear().range([height, 0]);

    //this is the function
    var histogram = d3.histogram().value(d => d).thresholds(x.ticks(5));


    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("[histogram]").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

    // group the data for the bars
    var bins = histogram(data);

    // Scale the range of the data in the y domain
    y.domain([0, d3.max(bins, function (d) { return d.length; })]);

    // append the bar rectangles to the svg element
    svg.selectAll("rect")
      .data(bins)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", 1)
      .attr("transform", function (d) {
        return "translate(" + x(d.x0) + "," + y(d.length) + ")";
      })
      .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
      .attr("height", function (d) { return height - y(d.length); });

    // add the x Axis
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
      .call(d3.axisLeft(y));

  }

}
