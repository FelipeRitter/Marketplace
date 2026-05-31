# Marketplace Screen Specs

This document captures initial screen-level requirements for future prototype and implementation work.

## Global Components

### Top Navigation

- Brand: `MarketNest` for the initial prototype.
- Primary search input with category selector.
- Delivery/location indicator.
- Account entry.
- Orders entry.
- Cart entry with estimated total.
- Secondary category navigation below the main bar.

### Product Card

- Product image area.
- Optional badge such as `Choice`, `Deal`, or `New`.
- Product title.
- Short metadata line.
- Rating and review count.
- Price.
- Primary action.

### Filters

- Filter groups should be collapsible in implementation.
- Desktop layout uses a left sidebar.
- Mobile layout should use a filter drawer.
- Common filters: delivery speed, customer rating, price range, brand, seller type, availability, deals.

## Cart

### Purpose

Help shoppers review selected items and confidently move into checkout.

### Required Content

- Page title: `Cart`
- Item rows with image, title, seller, price, quantity, delivery estimate, remove action, and save-for-later action.
- Order subtotal.
- Estimated shipping.
- Estimated tax placeholder.
- Primary CTA: `Proceed to checkout`
- Secondary link: `Continue shopping`

### States

- Empty cart.
- Cart with unavailable item.
- Cart with price change notice.
- Cart with saved-for-later items.

## Checkout

### Purpose

Collect shipping and payment details while keeping order summary visible.

### Required Content

- Page title: `Checkout`
- Shipping address section.
- Delivery options section.
- Payment method section.
- Promo code input.
- Order summary.
- Primary CTA: `Place order`

### States

- Missing address.
- Invalid payment.
- Promo code accepted.
- Promo code rejected.
- Loading order placement.

## Sign In

### Purpose

Authenticate users before checkout, account management, and seller tools.

### Required Content

- Page title: `Sign in`
- Email input.
- Password input.
- Primary CTA: `Sign in`
- Secondary CTA: `Create account`
- Recovery link: `Forgot password?`
- Trust/support text for secure access.

### States

- Invalid credentials.
- Password visibility toggle.
- Loading.
- Account locked or verification required.

## Create Account

### Purpose

Register new shopper accounts with minimal friction.

### Required Content

- Page title: `Create account`
- Full name.
- Email.
- Password.
- Confirm password.
- Primary CTA: `Create account`
- Link back to sign in.

### States

- Email already registered.
- Password requirements not met.
- Verification required.

## Seller Dashboard

### Purpose

Give sellers an operational overview of business health and pending work.

### Required Content

- KPI cards: sales, orders, conversion, active listings.
- Task list: orders to ship, low stock, listings needing review.
- Recent orders.
- Inventory alerts.
- Quick actions: `Add product`, `View orders`, `Manage inventory`.

### States

- New seller with no products.
- Active seller with alerts.
- Error/loading states for metrics.

## Product Management

### Purpose

Allow sellers to manage listings efficiently.

### Required Content

- Product table.
- Search and filters.
- Status tabs: active, draft, paused, out of stock.
- Columns: product, status, stock, price, sales, updated, actions.
- Primary CTA: `Add product`

### States

- Empty product list.
- No search results.
- Bulk selection.
- Draft listing.

## Create Product

### Purpose

Create a complete marketplace listing.

### Required Content

- Product basics: title, category, brand, description.
- Media upload area.
- Pricing.
- Inventory.
- Shipping options.
- Preview/review section.
- Primary CTA: `Publish listing`
- Secondary CTA: `Save draft`

### States

- Validation errors.
- Draft saved.
- Uploading media.
- Publish success.
