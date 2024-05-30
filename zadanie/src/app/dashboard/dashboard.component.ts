import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
