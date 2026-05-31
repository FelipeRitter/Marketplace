import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteShellComponent } from './shared/components/site-shell/site-shell';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
