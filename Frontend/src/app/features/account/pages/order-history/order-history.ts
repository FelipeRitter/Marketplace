import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Account } from '../../../../core/services/account';

@Component({
  selector: 'app-order-history',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './order-history.html',
  styleUrl: './order-history.scss'
})
export class OrderHistory {
  private readonly account = inject(Account);

  readonly orders = this.account.getOrderHistory();
}
