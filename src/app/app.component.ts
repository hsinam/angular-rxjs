import { Component, OnInit } from '@angular/core';
import { interval, Observable, from } from 'rxjs';
import { getInvoice, getCustomer, getAddress } from 'src/backend/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app03';

  stream1$ = interval(1000);
}
