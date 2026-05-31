import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../../../core/services/account';

@Component({
  selector: 'app-sell-product',
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './sell-product.html',
  styleUrl: './sell-product.scss'
})
export class SellProduct {
  private readonly account = inject(Account);
  private readonly formBuilder = inject(FormBuilder);

  readonly categories = this.account.getListingCategories();
  readonly listingForm = this.formBuilder.nonNullable.group({
    imageUrl: ['https://images.example.com/product-preview.jpg'],
    productName: ['Aurora Wireless Headphones', [Validators.required, Validators.minLength(4)]],
    description: [
      'Adaptive noise-canceling headphones with long battery life, soft cushions, and travel-ready accessories.',
      [Validators.required, Validators.minLength(20)]
    ],
    price: [89.99, [Validators.required, Validators.min(1)]],
    quantity: [12, [Validators.required, Validators.min(1)]],
    condition: ['New', Validators.required],
    shippingMethod: ['Fast delivery available', Validators.required],
    returnPolicy: ['30-day free returns', Validators.required]
  });
  readonly selectedCategoryIds = new Set(['electronics']);
  wasSubmitted = false;

  toggleCategory(categoryId: string): void {
    if (this.selectedCategoryIds.has(categoryId)) {
      this.selectedCategoryIds.delete(categoryId);
      return;
    }

    this.selectedCategoryIds.add(categoryId);
  }

  submitListing(): void {
    // In this prototype, publishing only confirms the local draft state.
    this.wasSubmitted = true;
    this.listingForm.markAllAsTouched();
  }
}
