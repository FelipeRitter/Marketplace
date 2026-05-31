import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Account } from '../../../../core/services/account';

@Component({
  selector: 'app-my-account',
  imports: [DatePipe, RouterLink],
  templateUrl: './my-account.html',
  styleUrl: './my-account.scss'
})
export class MyAccount {
  private readonly account = inject(Account);

  readonly user = this.account.getCurrentUser();
}
