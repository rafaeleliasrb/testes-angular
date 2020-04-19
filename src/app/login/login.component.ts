import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
    this.router.navigate(['/']);
  }
}
