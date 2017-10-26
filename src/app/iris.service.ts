import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Iris } from './iris';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IrisService {

  constructor(private http: Http) { }

  _getDataSet(): Promise<Iris[]> {
    return new Promise(resolve => {
      return this.http.get('http://192.168.99.100:8080/iris').map(response => {
        return response;
      });
    });
  }

  getDataSet(): Promise<Iris[]> {
    return this.http.get('http://192.168.99.100:8080/iris')
      .toPromise()
      .then(response => {
        return response.json() as Iris[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
