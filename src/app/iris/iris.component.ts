import { Component, OnInit } from '@angular/core';
import { Iris } from '../iris';
import { IrisService } from '../iris.service';


@Component({
  selector: 'app-iris',
  templateUrl: './iris.component.html',
  styleUrls: ['./iris.component.css'],
  providers:[IrisService]
})
export class IrisComponent implements OnInit {

  dataset: Iris[];

  selectedDatum:Iris;

  constructor(private irisService:IrisService) { }

  ngOnInit() {
    var self = this;
    self.irisService.getDataSetSlowly().then(f=>self.dataset=f);
  }

  onSelect(datum:Iris){
    this.selectedDatum = datum;
  }

}
