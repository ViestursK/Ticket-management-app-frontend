import { Component } from '@angular/core';
import { LandingCta } from './landing-cta/landing-cta';
import { LandingFeatures } from './landing-features/landing-features';
import { LandingFooter } from './landing-footer/landing-footer';
import { LandingHero } from './landing-hero/landing-hero';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-landing-page',
  imports: [LandingCta, LandingFeatures, LandingFooter, LandingHero, NavBar],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
