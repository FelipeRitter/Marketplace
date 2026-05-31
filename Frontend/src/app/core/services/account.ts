import { Injectable } from '@angular/core';
import { currentUser, listingCategories, orderHistory } from '../data/mock-account';
import { CustomerOrder, MarketplaceUser, ProductListingCategory } from '../models/account.models';

@Injectable({ providedIn: 'root' })
export class Account {
  getCurrentUser(): MarketplaceUser {
    return currentUser;
  }

  getOrderHistory(): readonly CustomerOrder[] {
    return orderHistory;
  }

  getListingCategories(): readonly ProductListingCategory[] {
    return listingCategories;
  }
}
