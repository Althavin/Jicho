import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { DemoComponent } from './demo/demo.component';
import { CtaComponent } from './cta/cta.component';

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule, AppRoutingModule,
  AppComponent,
    HeroComponent,
    FeaturesComponent,
    DemoComponent,
    CtaComponent
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }


