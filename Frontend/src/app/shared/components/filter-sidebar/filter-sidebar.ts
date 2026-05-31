import { Component } from '@angular/core';

interface FilterGroup {
  readonly title: string;
  readonly options: readonly string[];
}

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss'
})
export class FilterSidebarComponent {
  readonly filterGroups: readonly FilterGroup[] = [
    { title: 'Delivery speed', options: ['Tomorrow', 'This week', 'Free shipping'] },
    { title: 'Customer rating', options: ['4 stars & up', '3 stars & up'] },
    { title: 'Price range', options: ['Under $50', '$50 to $100', '$100 to $200'] },
    { title: 'Seller type', options: ['Small business', 'Top seller', 'New seller'] },
    { title: 'Availability', options: ['In stock', 'Deals', 'Free returns'] }
  ];
}
