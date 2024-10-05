import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav-lank',
  standalone: true,
  imports: [ RouterLink,RouterLinkActive],
  templateUrl: './nav-lank.component.html',
  styleUrl: './nav-lank.component.scss'
})
export class NavLankComponent {
  readonly _AuthService =inject(AuthService)

}
