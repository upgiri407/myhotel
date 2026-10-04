import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

// Global order service for passing order data between orders and kitchen features.
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // Plain Subject
  subjectOrder = new Subject<any>();

  // BehaviorSubject
 behaviorOrder = new BehaviorSubject<any[]>([]);

}