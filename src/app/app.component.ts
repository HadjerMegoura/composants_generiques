import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenericTableComponentComponent } from './components/generic-table-component/generic-table-component.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericTableComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'composants_generiques';

  headers: { key: keyof Product; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'type', label: 'Type' },
    { key: 'inStock', label: 'In Stock' },
    { key: 'date', label: 'Date' },
  ];
  data: Product[] = [
    {
      id: 'P001',
      name: 'Laptop',
      price: 799.99,
      quantity: 25,
      type: 'Electronics',
      inStock: true,
      date: new Date('2022-05-01T10:30:00'),
    },
    {
      id: 'P002',
      name: 'Smartphone',
      price: 499.5,
      quantity: 40,
      type: 'Electronics',
      inStock: false,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P003',
      name: 'Desk Chair',
      price: 129.99,
      quantity: 15,
      type: 'Furniture',
      inStock: true,
      date: new Date('2023-05-06T10:30:00'),
    },
    {
      id: 'P004',
      name: 'Monitor',
      price: 199.99,
      quantity: 30,
      type: 'Electronics',
      inStock: false,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P005',
      name: 'Headphones',
      price: 79.99,
      quantity: 50,
      type: 'Accessories',
      inStock: true,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P006',
      name: 'Backpack',
      price: 59.99,
      quantity: 20,
      type: 'Travel',
      inStock: false,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P007',
      name: 'Coffee Maker',
      price: 89.99,
      quantity: 10,
      type: 'Appliances',
      inStock: true,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P008',
      name: 'Running Shoes',
      price: 120.0,
      quantity: 35,
      type: 'Sports',
      inStock: false,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P009',
      name: 'Desk Lamp',
      price: 45.0,
      quantity: 60,
      type: 'Furniture',
      inStock: true,
      date: new Date('2023-05-01T10:30:00'),
    },
    {
      id: 'P010',
      name: 'Bluetooth Speaker',
      price: 149.99,
      quantity: 22,
      type: 'Electronics',
      inStock: false,
      date: new Date('2023-04-01T10:30:00'),
    },
  ];

  itemsPerPage: number = 5;
  currentPage: number = 1;
}
