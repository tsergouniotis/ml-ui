import { Component, OnInit } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'ml-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var dataset = [5, 10, 20, 45, 6, 25];

    var w = 300;
    var h = 300;

    var outerRadius = w / 2;
    var innerRadius = 0;



  }

}
