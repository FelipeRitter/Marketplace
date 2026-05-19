# Marketplace Screen Map

This document maps the planned screens for the Marketplace web product. The product language is English (US).

## Design Direction

- Storefront structure inspired by large ecommerce marketplaces.
- Distinct visual identity using deep teal, coral, clean white surfaces, and soft neutral backgrounds.
- Modern component-driven UI built from reusable navigation, search, cards, filters, forms, tables, drawers, and status components.

## Prototype Screens Already Created in Figma

- `Home / Marketplace Storefront`
- `Search Results / Product Listing`
- `Product Detail / Buying Experience`

## Shopper Experience

| Screen | Purpose | Priority | Notes |
| --- | --- | --- | --- |
| Home | Entry point for discovery, search, deals, and categories. | P0 | Created in Figma. |
| Search Results | Browse and refine product results. | P0 | Created in Figma. |
| Product Detail | Evaluate item, seller, delivery, reviews, and purchase options. | P0 | Created in Figma. |
| Cart | Review selected items, quantities, prices, delivery estimates, and checkout CTA. | P0 | Should support saved-for-later items. |
| Checkout | Enter shipping, payment, delivery, promo code, and order review. | P0 | Prefer stepper or split summary layout. |
| Order Confirmation | Confirm order success, delivery estimate, and next actions. | P0 | Include order number and tracking entry point. |
| Orders | List past and active orders. | P1 | Include filters by status/date. |
| Order Detail | Show items, shipment status, invoices, returns, and support actions. | P1 | Reuse product row and timeline components. |
| Wishlist | Save products for later. | P2 | Useful after core buying flow. |

## Authentication

| Screen | Purpose | Priority | Notes |
| --- | --- | --- | --- |
| Sign In | Authenticate existing customers and sellers. | P0 | Email/password plus social login placeholder. |
| Create Account | Register a shopper account. | P0 | Keep fields minimal. |
| Forgot Password | Recover account access. | P1 | Email-based reset flow. |
| Account Verification | Confirm email or phone. | P1 | Can be modal or full page. |

## Account Management

| Screen | Purpose | Priority | Notes |
| --- | --- | --- | --- |
| Account Overview | Central hub for profile, orders, addresses, payments, and support. | P1 | Tile/list layout. |
| Profile | Manage name, email, phone, and preferences. | P1 | Use clear edit states. |
| Addresses | Manage shipping addresses. | P1 | Include default address state. |
| Payment Methods | Manage cards and payment options. | P1 | Use masked payment details. |
| Notifications | Manage communication preferences. | P2 | Email, SMS, push. |

## Seller Experience

| Screen | Purpose | Priority | Notes |
| --- | --- | --- | --- |
| Seller Dashboard | Overview sales, orders, products, inventory alerts, and tasks. | P1 | Operational, dense, scan-friendly UI. |
| Product Management | List seller products with status, stock, price, and actions. | P1 | Table-first layout. |
| Create Product | Add product details, media, pricing, inventory, and shipping. | P1 | Multi-section form. |
| Edit Product | Update product listing. | P1 | Same structure as create product. |
| Seller Orders | Manage incoming orders and fulfillment. | P1 | Include status tabs. |
| Seller Profile | Manage seller storefront information. | P2 | Logo, description, policies. |

## Support And Trust

| Screen | Purpose | Priority | Notes |
| --- | --- | --- | --- |
| Help Center | Browse support topics and search help articles. | P2 | Can be simple at first. |
| Returns | Start or review a return request. | P1 | Important for buyer confidence. |
| Reviews | Read and write product reviews. | P2 | Product detail can show preview first. |
| Seller Ratings | Show seller trust signals. | P2 | Could live inside product detail initially. |

## Recommended Next Design Batch

1. Cart
2. Checkout
3. Sign In
4. Create Account
5. Seller Dashboard
6. Product Management
7. Create Product
