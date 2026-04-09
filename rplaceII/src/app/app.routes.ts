import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { LoginPage } from './features/login-page/login-page';
import { RegisterPage } from './features/register-page/register-page';
import { RplacePage } from './features/rplace-page/rplace-page';
// import { PixelPage } from './features/pixel-page/pixel-page';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'rplace', component: RplacePage },
  // { path: 'pixel', component: PixelPage },
];