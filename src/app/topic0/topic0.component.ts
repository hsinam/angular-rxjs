import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, filter, concatMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-topic0',
  templateUrl: './topic0.component.html',
  styleUrls: ['./topic0.component.css']
})
export class Topic0Component implements OnInit {
  stream1$ = interval(1000);
  streamModified$ = this.stream1$.pipe(map(val => val * 2));

  constructor() {}

  ngOnInit() {}
}
