import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.css'],
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  register() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('Preencha os campos');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Senhas não coincidem');
    }
  }
}