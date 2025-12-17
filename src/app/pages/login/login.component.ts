import { Component } from '@angular/core';
import {AuthService} from '../../core/services/api/auth.service';
import {LocalStorageService} from '../../core/services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  error : string = "";

  constructor(
    private authService: AuthService,
    private localStorageService : LocalStorageService,
    private router : Router
  ) {}

  login(username: string, password: string) {
      this.authService.login(username, password).subscribe({
        next: (res) => {
          this.localStorageService.setLoggedIn(true);
          this.localStorageService.setAccessToken(res.accessToken);
          this.router.navigate(['/me']);
        },
        error: (error) => {
          this.error = error.error.message
        }
      });
  }

}
