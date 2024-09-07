// src/app/domain/customer.ts

export interface Country {
    name: string;
    code: string;
  }
  
  export interface Representative {
    name: string;
    image: string;  // Path to the image of the representative
  }
  
  export interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;  // Date as a string, you may want to convert it to a Date object if needed
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
  }
  