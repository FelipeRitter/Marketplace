import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarketplaceCategory } from '../../../core/models/marketplace.models';

@Component({
  selector: 'app-category-card',
  imports: [RouterLink],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss'
})
export class CategoryCardComponent {
  @Input({ required: true }) category!: MarketplaceCategory;
}
