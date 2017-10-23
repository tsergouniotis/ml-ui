import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'ml-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  node: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    var self = this;

    var selfElement = self.elementRef.nativeElement;

    var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

    var w = 500;
    var h = 100;

    var barPadding = 1;

    var svg = d3.select(selfElement)
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    var circles = svg.selectAll("circle").data(dataset).enter().append("circle")
      .attr("cx", self.cx)
      .attr("cy", h / 2)
      .attr("r", d => d)
      .attr("fill", "yellow")
      .attr("stroke", "orange")
      .attr("stroke-width", function (d) {
        return d / 2;
      });


    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("fill", self.fill)
      .attr("x", function (d, i) {
        return i * (w / dataset.length);
      })
      .attr("y", d => h - d)
      .attr("width", w / dataset.length - barPadding)
      .attr("height", self.h);


    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", function (d, i) {
        return i * (w / dataset.length);
      })
      .attr("y", function (d) {
        return h - (d * 4);
      });
  }


  fill(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
  }

  h(d) {
    return 4 * d;
  }

  cx(d, i) {
    return (i * 50) + 25;
  }

}
