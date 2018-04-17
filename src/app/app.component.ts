import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){
  	const observableOne = new Observable(observer => {
  		observer.next(Math.random());
  	});
  	observableOne.subscribe(value => console.log('Subscriber ONE A: ', value));
  	observableOne.subscribe(value => console.log('Subscriber ONE B: ', value));

  	const observableTwo = new Observable(observer => {
  		observer.next(Math.random());
  	});
  	const subject = new Subject();

  	subject.subscribe(value => console.log('Subcriber TWO A: ', value));
  	subject.subscribe(value => console.log('Subcriber TWO B: ', value));

  	subject.next('My personal message');

  	observableTwo.subscribe(subject);

  	const promise = new Promise((resolve, reject) => {
  		resolve(42);
  	});
  	promise.then(result => {
  		console.log('Promise ', result);
  	});

  }

}
