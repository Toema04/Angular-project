// src/app/service/customerservice.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1000,
      name: 'Amy Elsner',
      country: {
        name: 'Algeria',
        code: 'dz'
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
        name: 'Amy Elsner',
        image: 'amyelsner.png'
      },
      balance: 70663
    },{
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },{
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },{
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },{
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },{
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      }
    // Add more customers here if needed
  ];

  constructor() {}

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }

  getCustomerById(id: number): Observable<Customer | undefined> {
    const customer = this.customers.find((c) => c.id === id);
    return of(customer);
  }
}
