import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar';

@Component({
  selector: 'app-site-shell',
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss'
})
export class SiteShellComponent {
  readonly navigationItems = ['Today Deals', 'New Releases', 'Best Sellers', 'Small Business', 'Gift Cards', 'Customer Service'];
}
