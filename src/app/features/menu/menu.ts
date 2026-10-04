import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
//import { MENU } from '../../data/mock-data';
import { MenuApiService } from './menu-api.service';

// Menu component supports live search and filtering of menu items.
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  constructor(private menuApiService: MenuApiService) {}

  // Old static approach was using mock data; now dynamic API-based list is used.
  // allMenuItems = [...MENU];
  // menuItems = [...MENU];
  menuItems: any[] = [];

  // RxJS Subject stores typed search value and emits it when user types.
  searchSubject = new Subject<string>();

  // Search trigger method: pushes typed keyword into observable stream.
  onSearch(value: string) {
    this.searchSubject.next(value);
  }

  // ngOnInit sets up debounced search pipeline and API call.
  ngOnInit() {
    this.searchSubject
      .pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => {
          console.log('API Search:', value);
          return this.menuApiService.searchMenu(value);
        })
      )
      .subscribe(result => {
        console.log('API Result:', result);
        this.menuItems = Array.isArray(result) ? result : [];
      });
  }

  /*ngOnInit() {
    this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        const searchValue = value.trim().toLowerCase();
        console.log('Search Value:', searchValue);

        // Search box empty असेल तर full menu
        if (!searchValue) {
          this.menuItems = [...this.allMenuItems];
          console.log('All Items:', this.menuItems);
          return;
        }

        // Search
        this.menuItems = this.allMenuItems.filter(item =>
          item.name.toLowerCase().includes(searchValue)
        );

        console.log('Filtered Items:', this.menuItems);
      });
  }*/
}