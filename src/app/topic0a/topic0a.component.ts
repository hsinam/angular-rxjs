import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-topic0a',
  templateUrl: './topic0a.component.html',
  styleUrls: ['./topic0a.component.css']
})
export class Topic0aComponent implements OnInit {
  stream1$ = of(1, 2, 3, 4, 5);
  stream2$ = of(2, 5, 9);

  concatStream$ = concat(this.stream1$, this.stream2$);

  constructor() {}

  ngOnInit() {}
}
