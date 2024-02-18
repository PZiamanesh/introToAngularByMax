import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private dropEl: ElementRef) { }

  @HostListener('click') onClickDrop() {
    this.dropEl.nativeElement.classList.toggle("open");
  }
}
