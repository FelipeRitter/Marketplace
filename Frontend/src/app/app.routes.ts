import { Routes } from '@angular/router';
import { Home } from './features/catalog/pages/home/home';
import { ProductDetail } from './features/catalog/pages/product-detail/product-detail';
import { SearchResults } from './features/catalog/pages/search-results/search-results';

export const routes: Routes = [
  { path: '', component: Home, title: 'MarketNest | Home' },
  { path: 'search', component: SearchResults, title: 'MarketNest | Search Results' },
  { path: 'product/:slug', component: ProductDetail, title: 'MarketNest | Product Detail' },
  { path: '**', redirectTo: '' }
];
