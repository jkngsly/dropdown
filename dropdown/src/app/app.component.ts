import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dropdown';

  @HostBinding('class.menu-active') menuActive: boolean = false;

  menuToggle(menuActive: boolean) {
    console.log(menuActive);
    this.menuActive = menuActive;
  }
}
