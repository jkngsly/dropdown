import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent {

  faBars = faBars;

  @HostBinding('class.active') showMenu: boolean = false;
  @Output() menuToggle = new EventEmitter<boolean>();

  toggle() {
    this.showMenu = !this.showMenu ? true : false;
    this.menuToggle.emit(this.showMenu);
  }

  toggleOutside() {
    if(this.showMenu)
      this.toggle();
  }
}
