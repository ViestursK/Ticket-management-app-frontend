import { Routes } from '@angular/router';
import { LandingPage } from './public/landing-page/landing-page';
import { AuthLayout } from './public/auth-layout/auth-layout';
import { Login } from './public/auth-layout/login/login';
import { Register } from './public/auth-layout/register/register';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'auth',
    component: AuthLayout,
    children:[
      { path: 'login', component: Login},
      { path: 'register', component: Register}
    ]
  }
];
