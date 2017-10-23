import { Component, OnInit, Input } from '@angular/core';
import { Iris } from '../iris';

@Component({
  selector: 'iris-detail',
  templateUrl: './iris-detail.component.html',
  styleUrls: ['./iris-detail.component.css']
})
export class IrisDetailComponent implements OnInit {

  @Input() datum:Iris;

  constructor() { }

  ngOnInit() {
  }

}
