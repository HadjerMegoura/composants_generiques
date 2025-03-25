import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericTableComponentComponent } from './components/generic-table-component/generic-table-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericTableComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'composants_generiques';

  headers = ['id', 'Nom', 'Prix', 'Quantité', 'Type', 'In Stock'];
  data = [
    ['P001', 'Laptop', 799.99, 25, 'Electronics', true],
    ['P002', 'Smartphone', 499.5, 40, 'Electronics', false],
    ['P003', 'Desk Chair', 129.99, 15, 'Furniture', true],
    ['P004', 'Monitor', 199.99, 30, 'Electronics', false],
    ['P005', 'Headphones', 79.99, 50, 'Accessories', true],
    ['P006', 'Backpack', 59.99, 20, 'Travel', false],
    ['P007', 'Coffee Maker', 89.99, 10, 'Appliances', true],
    ['P008', 'Running Shoes', 120.0, 35, 'Sports', false],
    ['P009', 'Desk Lamp', 45.0, 60, 'Furniture', true],
    ['P010', 'Bluetooth Speaker', 149.99, 22, 'Electronics', false],
  ];

  itemsPerPage: number = 10;
  currentPage: number = 1;
}
