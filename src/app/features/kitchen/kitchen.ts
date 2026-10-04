import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrderService } from '../orders/order.service';

// Kitchen view listens to incoming orders and tracks their current cooking status.
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.html',
  styleUrl: './kitchen.css'
})
export class Kitchen implements OnInit, OnDestroy {

  // Stores the orders received from the shared OrderService.
  kitchenOrders: any[] = [];

  // Keeps the subscription reference so it can be cleaned on component destroy.
  private orderSubscription!: Subscription;

  constructor(private orderService: OrderService) {}

  // ngOnInit subscribes to BehaviorSubject and updates kitchen list in real time.
  ngOnInit() {

    this.orderSubscription =
      this.orderService.behaviorOrder.subscribe(orders => {

        this.kitchenOrders = orders;

        console.log('Kitchen orders:', orders);
      });
  }

  // Cleanup: unsubscribe to avoid memory leak when kitchen page is closed.
  ngOnDestroy() {

    this.orderSubscription.unsubscribe();

    console.log('Kitchen subscription destroyed');
  }
}