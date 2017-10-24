import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'ml-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  xProperty: Function;

  yProperty: Function;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    var self = this;

    var selfElement = self.elementRef.nativeElement;

    let data2: number[][] = [
      [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
      [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];

    let data: number[][] = [
      [1, 1], [2, 2], [3, 3]
    ];

    var margin = { top: 30, right: 20, bottom: 30, left: 50 },
      width = 600 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var xAxis = d3.axisBottom(x).ticks(5);
    var yAxis = d3.axisLeft(y).ticks(5);

    var valueline = d3.line()
      .x(function (d) { return x(d[0]); })
      .y(function (d) { return y(d[1]) });

    var svg = d3.select(selfElement)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // Scale the range of the data
    //x.domain(d3.extent(data, function (d) { return d[0] }));
    x.domain([0, d3.max(data, function (d) { return d[0] })])
    y.domain([0, d3.max(data, function (d) { return d[1] })]);


    let datum: [number, number][] = [];

    // Add the valueline path.
    data.forEach(function (d) {
      datum.push([d[0], d[1]]);
    });

    svg.append("path").attr("d", valueline(datum));

    // Add the X Axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);


    // Add the Y Axis
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);


  }

}
