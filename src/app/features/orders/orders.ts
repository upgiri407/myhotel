import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ORDERS } from '../../data/mock-data';
import { OrderService } from './order.service';
import { delay, from, mergeMap, of } from 'rxjs';

// Order list component for displaying current customer orders and sending them to kitchen.
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html'
})
export class Orders {


  constructor(private orderService: OrderService) {}

  // Static mock orders loaded from data file.
  orders = ORDERS;

  // Send selected order to kitchen using RxJS subjects.
  sendToKitchen(order: any) {

  console.log('Sending:', order.itemName);

  // Subject: current event emit
  this.orderService.subjectOrder.next(order);

  // BehaviorSubject: maintains full list of kitchen items for subscribers.
  const currentOrders = this.orderService.behaviorOrder.value;

  this.orderService.behaviorOrder.next([
    ...currentOrders,
    order
  ]);
}

  // RxJS learning example: mergeMap can run multiple async tasks concurrently.
  testMergeMap() {
  const orders = [
    { name: 'Paneer', time: 3000 },
    { name: 'Biryani', time: 1000 },
    { name: 'Dosa', time: 2000 }
  ];

  from(orders)
    .pipe(
      mergeMap(order => {
        console.log('START:', order.name);

        return of(order).pipe(
          delay(order.time)
        );
      })
    )
    .subscribe(order => {
      console.log('COMPLETE:', order.name);
    });
}


}