import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/marketplace.models';

@Component({
  selector: 'app-buy-box',
  imports: [CurrencyPipe],
  templateUrl: './buy-box.html',
  styleUrl: './buy-box.scss'
})
export class BuyBoxComponent {
  @Input({ required: true }) product!: Product;
}
