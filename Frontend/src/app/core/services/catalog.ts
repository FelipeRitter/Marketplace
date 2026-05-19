import { Injectable } from '@angular/core';
import { dealModules, marketplaceCategories, products } from '../data/mock-marketplace';
import { DealModule, MarketplaceCategory, Product } from '../models/marketplace.models';

@Injectable({ providedIn: 'root' })
export class Catalog {
  getCategories(): readonly MarketplaceCategory[] {
    return marketplaceCategories;
  }

  getProducts(): readonly Product[] {
    return products;
  }

  getFeaturedProducts(): readonly Product[] {
    const featuredIds = new Set(dealModules[0].productIds);
    return products.filter((product) => featuredIds.has(product.id));
  }

  getRelatedProducts(productId: string): readonly Product[] {
    return products.filter((product) => product.id !== productId).slice(0, 4);
  }

  getDealModules(): readonly DealModule[] {
    return dealModules;
  }

  findProductBySlug(slug: string | null): Product {
    return products.find((product) => product.slug === slug) ?? products[0];
  }
}
