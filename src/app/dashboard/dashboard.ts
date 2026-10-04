import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../users/users';

// Dashboard component displays KPIs, product cards, and a form for add/edit product actions.
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, Users],
  templateUrl:'dashboard.html' ,
})
export class Dashboard {
  // @Input() example concept: parent passes date value to child, and here it is captured from UI input.
  selectedDate = '';

  // Event binding: when user changes date picker, this method reads the value from the DOM event.
  onDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value;

    console.log('Parent selected date:', this.selectedDate);
  }

  // This flag decides whether the form is in edit mode or add mode.
  isEditing = false;
  cards = [
    { title: 'Total Sales', value: '₹1,25,000', trend: '+12.5%' },
    { title: 'Orders', value: '482', trend: '+8.3%' },
    { title: 'Customers', value: '1,240', trend: '+5.1%' },
    { title: 'Profit', value: '₹38,500', trend: '-2.1%' },
  ];

  products = [
    { id: 1, name: 'Switpotato Chips', category: 'Snacks', quantity: 120, amount: 4500, status: 'Active' },
    { id: 2, name: 'Masala Mix', category: 'Seasoning', quantity: 85, amount: 3200, status: 'Low Stock' },
    { id: 3, name: 'Sweet Potato Flour', category: 'Bakery', quantity: 64, amount: 6100, status: 'Active' },
    { id: 4, name: 'Family Pack', category: 'Snacks', quantity: 30, amount: 8900, status: 'Inactive' },
  ];

  // Form object stores the current row values before saving or editing a product.
  form={
    id:null as number | null,
    name:'',
    category:'',
    quantity:0,
    amount:0,
    status:''
  }

  // Save logic: if form is in edit mode, update existing product; otherwise push new item.
 saveProduct() {
  if (!this.form.name || !this.form.category) {
    return;
  }

  if (this.isEditing && this.form.id !== null) {
    const index = this.products.findIndex(p => p.id === this.form.id);

    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        name: this.form.name,
        category: this.form.category,
        quantity: this.form.quantity,
        amount: this.form.amount,
        status: this.form.status
      };
    }
  } else {
    const nextId = this.products.length
      ? Math.max(...this.products.map(p => p.id)) + 1
      : 1;

    this.products.push({
      id: nextId,
      name: this.form.name,
      category: this.form.category,
      quantity: this.form.quantity,
      amount: this.form.amount,
      status: this.form.status
    });
  }

  this.resetForm();
}

  // Edit flow: fills form with selected product data to modify and save.
  editProduct(item: any){
    this.isEditing=true;
    this.form= { ...item };
  }

  // Reset form back to empty state after update or save.
  resetForm() {
  this.isEditing = false;
  this.form = {
    id: null,
    name: '',
    category: '',
    quantity: 0,
    amount: 0,
    status: 'Active'
  };
}
  // Delete flow: removes product from array without reloading the page.
  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}