import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { FeaturesComponent } from "./features/features.component";
import { DemoComponent } from "./demo/demo.component";
import { CtaComponent } from "./cta/cta.component";
@Component({
  selector: 'app-root',
  imports: [HeroComponent, FeaturesComponent, DemoComponent, CtaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jicho-landing-page';
}
