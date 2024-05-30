import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css',
  imports: [FormsModule, CommonModule],
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  logowanie() {
    if (
      this.formData.username === 'przykladowyUzytkownik' &&
      this.formData.password === 'przykladoweHaslo'
    ) {
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Błąd logowania. Sprawdź dane');
    }
  }
}
