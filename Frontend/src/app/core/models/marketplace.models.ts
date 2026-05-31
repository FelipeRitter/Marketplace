export interface MarketplaceCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly accent: string;
  readonly items: readonly string[];
}

export interface Product {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly seller: string;
  readonly price: number;
  readonly previousPrice?: number;
  readonly rating: number;
  readonly reviewCount: number;
  readonly boughtThisMonth: number;
  readonly badge?: string;
  readonly category: string;
  readonly summary: string;
  readonly deliveryPromise: string;
  readonly imageTone: string;
  readonly features: readonly string[];
  readonly stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface DealModule {
  readonly title: string;
  readonly subtitle: string;
  readonly productIds: readonly string[];
}
