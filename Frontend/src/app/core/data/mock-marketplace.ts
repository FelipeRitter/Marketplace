import { DealModule, MarketplaceCategory, Product } from '../models/marketplace.models';

export const marketplaceCategories: readonly MarketplaceCategory[] = [
  {
    id: 'tech',
    title: 'Tech deals',
    description: 'Headphones, smart home, office gear, and everyday electronics.',
    accent: 'teal',
    items: ['Audio', 'Smart home', 'Computers', 'Accessories']
  },
  {
    id: 'home',
    title: 'Home refresh',
    description: 'Useful upgrades for kitchens, bedrooms, workspaces, and storage.',
    accent: 'coral',
    items: ['Kitchen', 'Lighting', 'Storage', 'Cleaning']
  },
  {
    id: 'fashion',
    title: 'Fashion finds',
    description: 'Seasonal staples, bags, shoes, and comfortable daily wear.',
    accent: 'amber',
    items: ['Women', 'Men', 'Shoes', 'Bags']
  },
  {
    id: 'grocery',
    title: 'Grocery picks',
    description: 'Pantry favorites, coffee, snacks, wellness, and household basics.',
    accent: 'green',
    items: ['Coffee', 'Snacks', 'Pantry', 'Wellness']
  }
];

export const products: readonly Product[] = [
  {
    id: 'p-1001',
    slug: 'aurora-wireless-headphones',
    name: 'Aurora Wireless Headphones',
    seller: 'SoundPeak',
    price: 89.99,
    previousPrice: 129.99,
    rating: 4.8,
    reviewCount: 1248,
    boughtThisMonth: 900,
    badge: 'Choice',
    category: 'Electronics',
    summary: 'Adaptive noise cancellation, multipoint pairing, and a 40-hour battery.',
    deliveryPromise: 'Fast delivery tomorrow',
    imageTone: 'mint',
    features: [
      'Adaptive noise cancellation with transparency mode',
      '40-hour battery life with quick charge',
      'Multipoint pairing for work and travel',
      'Includes travel case and USB-C cable'
    ],
    stockStatus: 'in-stock'
  },
  {
    id: 'p-1002',
    slug: 'everyday-carry-backpack',
    name: 'Everyday Carry Backpack',
    seller: 'Northline Goods',
    price: 64,
    rating: 4.6,
    reviewCount: 842,
    boughtThisMonth: 320,
    badge: 'Deal',
    category: 'Travel',
    summary: 'Weather-resistant 24L backpack with laptop protection and clean storage.',
    deliveryPromise: 'Free delivery Friday',
    imageTone: 'coral',
    features: ['24L capacity', 'Padded laptop sleeve', 'Water-resistant shell', 'Hidden passport pocket'],
    stockStatus: 'in-stock'
  },
  {
    id: 'p-1003',
    slug: 'smart-home-hub',
    name: 'Smart Home Hub',
    seller: 'NestWave',
    price: 119.99,
    previousPrice: 149.99,
    rating: 4.7,
    reviewCount: 2110,
    boughtThisMonth: 740,
    badge: 'New',
    category: 'Smart Home',
    summary: 'Voice-enabled control center for lights, plugs, scenes, and routines.',
    deliveryPromise: 'Fast delivery tomorrow',
    imageTone: 'blue',
    features: ['Voice assistant ready', 'Matter compatible', 'Compact display', 'Privacy shutter'],
    stockStatus: 'low-stock'
  },
  {
    id: 'p-1004',
    slug: 'craft-coffee-starter-kit',
    name: 'Craft Coffee Starter Kit',
    seller: 'Morning Harbor',
    price: 42.5,
    rating: 4.9,
    reviewCount: 534,
    boughtThisMonth: 260,
    category: 'Grocery',
    summary: 'Fresh roast bundle with grinder, filters, and tasting cards.',
    deliveryPromise: 'Arrives this weekend',
    imageTone: 'amber',
    features: ['Two roast profiles', 'Reusable measuring scoop', 'Guided brew cards', 'Gift-ready packaging'],
    stockStatus: 'in-stock'
  },
  {
    id: 'p-1005',
    slug: 'ergo-desk-lamp',
    name: 'Ergo Desk Lamp',
    seller: 'Lumora',
    price: 34.99,
    rating: 4.5,
    reviewCount: 689,
    boughtThisMonth: 410,
    badge: 'Choice',
    category: 'Home Office',
    summary: 'Warm LED desk lamp with USB-C charging and adjustable brightness.',
    deliveryPromise: 'Free delivery Saturday',
    imageTone: 'cream',
    features: ['Three light temperatures', 'USB-C charging port', 'Low-glare diffuser', 'Foldable arm'],
    stockStatus: 'in-stock'
  },
  {
    id: 'p-1006',
    slug: 'pulsefit-earbuds',
    name: 'PulseFit Earbuds',
    seller: 'RunLoop',
    price: 49.99,
    rating: 4.4,
    reviewCount: 1190,
    boughtThisMonth: 870,
    category: 'Electronics',
    summary: 'Sweat-resistant earbuds with secure fit and compact charging case.',
    deliveryPromise: 'Fast delivery tomorrow',
    imageTone: 'green',
    features: ['IPX5 water resistance', 'Secure wing tips', '24-hour case battery', 'Low-latency mode'],
    stockStatus: 'in-stock'
  },
  {
    id: 'p-1007',
    slug: 'studiobeam-pro',
    name: 'StudioBeam Pro',
    seller: 'SoundPeak',
    price: 129,
    rating: 4.7,
    reviewCount: 1643,
    boughtThisMonth: 520,
    badge: 'Deal',
    category: 'Electronics',
    summary: 'Hi-res over-ear headphones tuned for detail, comfort, and calls.',
    deliveryPromise: 'Arrives Friday',
    imageTone: 'slate',
    features: ['Hi-res audio certified', 'Memory foam cushions', 'Dual beam microphones', 'Fold-flat design'],
    stockStatus: 'in-stock'
  },
  {
    id: 'p-1008',
    slug: 'quietwave-mini',
    name: 'QuietWave Mini',
    seller: 'ClearTone',
    price: 74.5,
    rating: 4.3,
    reviewCount: 398,
    boughtThisMonth: 180,
    category: 'Electronics',
    summary: 'Compact noise-canceling headphones for commuting and shared workspaces.',
    deliveryPromise: 'Free delivery Monday',
    imageTone: 'mint',
    features: ['Compact profile', 'Active noise reduction', 'Soft carry pouch', 'Quick device switching'],
    stockStatus: 'low-stock'
  }
];

export const dealModules: readonly DealModule[] = [
  {
    title: 'Today featured deals',
    subtitle: 'Fresh markdowns across customer favorites.',
    productIds: ['p-1001', 'p-1002', 'p-1003', 'p-1004', 'p-1005']
  },
  {
    title: 'Customers also viewed',
    subtitle: 'Related picks from trusted sellers.',
    productIds: ['p-1007', 'p-1008', 'p-1006', 'p-1003']
  }
];
