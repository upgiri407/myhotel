// Custom attribute directive: highlights an element on hover.
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor(private el: ElementRef) {}

  // When the mouse enters, change background to highlight color.
  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  // When the mouse leaves, remove the highlight.
  @HostListener('mouseleave')
onMouseLeave() {
  this.el.nativeElement.style.backgroundColor = '';
}
}