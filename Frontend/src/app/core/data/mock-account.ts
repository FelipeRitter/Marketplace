import { CustomerOrder, MarketplaceUser, ProductListingCategory } from '../models/account.models';

export const currentUser: MarketplaceUser = {
  id: 'usr-1001',
  fullName: 'Felipe Ritter',
  email: 'felipe.ritter@example.com',
  birthDate: '1990-08-18',
  documentNumber: 'BR-458.982.770-00',
  phone: '+55 51 99999-0123',
  memberSince: '2026-05-18',
  primaryAddress: {
    street: 'Market Street',
    number: '482',
    complement: 'Apt 1204',
    neighborhood: 'Central District',
    city: 'Porto Alegre',
    state: 'RS',
    postalCode: '90010-000',
    country: 'Brazil'
  }
};

export const orderHistory: readonly CustomerOrder[] = [
  {
    id: 'MN-2026-000184',
    placedAt: '2026-05-24',
    status: 'delivered',
    total: 132.49,
    deliveryEstimate: 'Delivered on May 27, 2026',
    items: [
      { productName: 'Aurora Wireless Headphones', quantity: 1, unitPrice: 89.99 },
      { productName: 'Craft Coffee Starter Kit', quantity: 1, unitPrice: 42.5 }
    ]
  },
  {
    id: 'MN-2026-000143',
    placedAt: '2026-05-19',
    status: 'shipped',
    total: 64,
    deliveryEstimate: 'Arriving tomorrow',
    items: [{ productName: 'Everyday Carry Backpack', quantity: 1, unitPrice: 64 }]
  },
  {
    id: 'MN-2026-000098',
    placedAt: '2026-05-11',
    status: 'processing',
    total: 119.99,
    deliveryEstimate: 'Expected by June 3, 2026',
    items: [{ productName: 'Smart Home Hub', quantity: 1, unitPrice: 119.99 }]
  }
];

export const listingCategories: readonly ProductListingCategory[] = [
  { id: 'electronics', label: 'Electronics' },
  { id: 'home-office', label: 'Home Office' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'grocery', label: 'Grocery' },
  { id: 'travel', label: 'Travel' },
  { id: 'small-business', label: 'Small Business' }
];
