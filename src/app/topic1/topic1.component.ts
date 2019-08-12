import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { getAddress, getCustomer, getInvoice } from 'src/backend/api';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component implements OnInit {
  constructor() {}

  invoiceId = 100;
  ngOnInit() {
    const invoice$ = from(getInvoice(this.invoiceId));

    invoice$.subscribe((data: any) => {
      let customer$ = from(getCustomer(data.customerId));

      customer$.subscribe((result: any) => {
        let address$ = from(getAddress(result.addressId));

        address$.subscribe(final => {
          console.log(final);
        });
      });
    });
  }
}
