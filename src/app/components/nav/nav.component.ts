import { Component } from '@angular/core';

@Component({
  selector: 'app-nav', // Ensure this matches the element in the template
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  dropdowns = [
    { name: 'Configuration', icon: 'fa-solid fa-gear' },
    { name: 'Reports', icon: 'fa-regular fa-calendar' },
    { name: 'ETL', icon: 'fa-solid fa-gears' },
  ];
}
