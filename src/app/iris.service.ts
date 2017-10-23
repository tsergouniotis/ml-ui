import { Injectable } from '@angular/core';
import { Iris } from './iris';

const IRIS_DATA_SET: Iris[] = [
  {petaLength:1,petalWidth:1,sepalLength:1,sepalWidth:1},
  {petaLength:2,petalWidth:2,sepalLength:2,sepalWidth:2},
  {petaLength:3,petalWidth:3,sepalLength:3,sepalWidth:3}
];

@Injectable()
export class IrisService {

  dataset:Iris[] = IRIS_DATA_SET;

  constructor() { }

  getDataSet():Promise<Iris[]>{
    return Promise.resolve(IRIS_DATA_SET);
  }

  getDataSetSlowly(): Promise<Iris[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getDataSet()), 2000);
  });
}

}
