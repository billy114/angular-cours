import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/api/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent implements OnInit {
  me : any = {}

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getMe().subscribe({
      next: data => {this.me = data},
      error: error => {
        if (error.status === 401) {
          alert('Not logged in');
          this.router.navigate(['/login']);
        }
      }
    });
  }

}
