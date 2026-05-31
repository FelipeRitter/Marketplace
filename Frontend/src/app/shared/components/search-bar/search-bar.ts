import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBarComponent {
  searchTerm = 'wireless headphones';

  constructor(private readonly router: Router) {}

  submitSearch(): void {
    // The prototype keeps data local, but the query parameter mirrors the future API contract.
    void this.router.navigate(['/search'], { queryParams: { q: this.searchTerm || 'all' } });
  }
}
