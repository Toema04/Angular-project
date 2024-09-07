import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';


@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    
  styleUrls: ['./table.component.scss'],

    
})
export class UsersTableComponent implements OnInit {
  customers!: Customer[];
  value!: string;  // Make sure 'value' is declared as a class property
  users!:any[]

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = false;

    activityValues: number[] = [0, 100];

    searchValue: string | undefined;

  constructor(private customerService: CustomerService) {
    this.users = this.generateUsers(100); // Generate 100 user records for the table
  }
  generateUsers(count: number) {
    const userArray = [];
    for (let i = 1; i <= count; i++) {
      const user = {
        index: i,
        userName: `User${i}`,
        userId: Math.floor(Math.random() * 10000),
        ticketNumber: `TKT-${i.toString().padStart(3, '0')}`,
        ticketValue: `$${(Math.random() * 100).toFixed(2)}`,
        cinemaName: `Cinema${i % 10}`, // Rotates cinema names
        cinemaAddress: `${i} Cinema Street, City`,
        numOfIndividuals: Math.floor(Math.random() * 6) + 1, // Between 1 and 6 individuals
        numOfPurchases: Math.floor(Math.random() * 5) + 1, // Between 1 and 5 purchases
        ticket: new File([''], `ticket_${i}.pdf`, { type: 'application/pdf' }),
        ticketName: `ticket_${i}.pdf`,
        ticketFileFormat: 'PDF',
        ticketFileSize: `${(Math.random() * 5).toFixed(2)} MB` // Random size between 0 and 5 MB
      };
      userArray.push(user);
    }
    return userArray;
  }

  downloadTicket(ticket: File) {
    const url = window.URL.createObjectURL(ticket);
    const a = document.createElement('a');
    a.href = url;
    a.download = ticket.name;
    a.click();
  }
    ngOnInit() {
      this.customerService.getCustomers().subscribe((data) => {
        this.customers = data;
      });

        this.representatives = [
         
          { name: 'Amy Elsner', image: 'amyelsner.png' },
          { name: 'Anna Fali', image: 'annafali.png' },
          { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
          { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
          { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },

            
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    clear(table: Table) {
        table.clear();
        this.searchValue = ''
    }

    getSeverity(status: string) {
        switch (status.toLowerCase()) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
            return "testing";
          default:
            return "test"
        }
    }
}