export interface Address {
  readonly street: string;
  readonly number: string;
  readonly complement?: string;
  readonly neighborhood: string;
  readonly city: string;
  readonly state: string;
  readonly postalCode: string;
  readonly country: string;
}

export interface MarketplaceUser {
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly birthDate: string;
  readonly documentNumber: string;
  readonly phone: string;
  readonly memberSince: string;
  readonly primaryAddress: Address;
}

export interface OrderItem {
  readonly productName: string;
  readonly quantity: number;
  readonly unitPrice: number;
}

export interface CustomerOrder {
  readonly id: string;
  readonly placedAt: string;
  readonly status: 'delivered' | 'shipped' | 'processing' | 'canceled';
  readonly total: number;
  readonly deliveryEstimate: string;
  readonly items: readonly OrderItem[];
}

export interface ProductListingCategory {
  readonly id: string;
  readonly label: string;
}
