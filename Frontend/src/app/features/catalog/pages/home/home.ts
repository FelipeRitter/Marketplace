import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Catalog } from '../../../../core/services/catalog';
import { CategoryCardComponent } from '../../../../shared/components/category-card/category-card';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [CategoryCardComponent, ProductCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private readonly catalog = inject(Catalog);

  readonly categories = this.catalog.getCategories();
  readonly featuredProducts = this.catalog.getFeaturedProducts();
}
