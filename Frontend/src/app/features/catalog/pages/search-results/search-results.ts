import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catalog } from '../../../../core/services/catalog';
import { FilterSidebarComponent } from '../../../../shared/components/filter-sidebar/filter-sidebar';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-search-results',
  imports: [FilterSidebarComponent, ProductCardComponent],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss'
})
export class SearchResults {
  private readonly catalog = inject(Catalog);
  private readonly route = inject(ActivatedRoute);

  readonly products = this.catalog.getProducts();
  readonly searchTerm = this.route.snapshot.queryParamMap.get('q') ?? 'wireless headphones';
}
