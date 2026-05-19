import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Catalog } from '../../../../core/services/catalog';
import { BuyBoxComponent } from '../../../../shared/components/buy-box/buy-box';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-product-detail',
  imports: [BuyBoxComponent, CurrencyPipe, DecimalPipe, ProductCardComponent, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail {
  private readonly catalog = inject(Catalog);
  private readonly route = inject(ActivatedRoute);

  readonly product = this.catalog.findProductBySlug(this.route.snapshot.paramMap.get('slug'));
  readonly relatedProducts = this.catalog.getRelatedProducts(this.product.id);
}
