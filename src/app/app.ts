import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
import { SideNav } from './side-nav/side-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Main, SideNav],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'ticken-management-frontend';
}
