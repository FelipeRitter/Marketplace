import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar';
import { Account } from '../../../core/services/account';

@Component({
  selector: 'app-site-shell',
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss'
})
export class SiteShellComponent {
  private readonly account = inject(Account);

  readonly navigationItems = ['Today Deals', 'New Releases', 'Best Sellers', 'Small Business', 'Gift Cards', 'Customer Service'];
  readonly user = this.account.getCurrentUser();
}
