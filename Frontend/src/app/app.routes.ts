import { Routes } from '@angular/router';
import { Home } from './features/catalog/pages/home/home';
import { ProductDetail } from './features/catalog/pages/product-detail/product-detail';
import { SearchResults } from './features/catalog/pages/search-results/search-results';
import { MyAccount } from './features/account/pages/my-account/my-account';
import { OrderHistory } from './features/account/pages/order-history/order-history';
import { SignUp } from './features/account/pages/sign-up/sign-up';
import { SellProduct } from './features/seller/pages/sell-product/sell-product';

export const routes: Routes = [
  { path: '', component: Home, title: 'MarketNest | Home' },
  { path: 'search', component: SearchResults, title: 'MarketNest | Search Results' },
  { path: 'product/:slug', component: ProductDetail, title: 'MarketNest | Product Detail' },
  { path: 'sign-up', component: SignUp, title: 'MarketNest | Sign Up' },
  { path: 'account', component: MyAccount, title: 'MarketNest | My Account' },
  { path: 'account/orders', component: OrderHistory, title: 'MarketNest | Order History' },
  { path: 'sell-product', component: SellProduct, title: 'MarketNest | Sell Product' },
  { path: '**', redirectTo: '' }
];
