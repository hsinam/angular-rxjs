import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { getAddress, getInvoice, getCustomer } from 'src/backend/api';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.css']
})
export class Topic2Component implements OnInit {
  constructor() {}
  invoiceId = 100;

  neatObservable$ = from(getInvoice(this.invoiceId)).pipe(
    mergeMap((result: any) => from(getCustomer(result.customerId))),
    mergeMap((result: any) => from(getAddress(result.addressId)))
  );

  ngOnInit() {}
}
