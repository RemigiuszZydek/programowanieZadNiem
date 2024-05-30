import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };

  logowanie() {
    if (
      this.formData.username === 'przykladowyUzytkownik' &&
      this.formData.password === 'przykladoweHaslo'
    ) {
      console.log('Zalogowano pomyslnie');
    } else {
      console.log('Blad logowania. Sprawdz dane');
    }
  }
}
