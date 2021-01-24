import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconMeaningComponent } from './components/icon-meaning/icon-meaning.component';
import { ChefOfTheWeekComponent } from './components/chef-of-the-week/chef-of-the-week.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishDialogComponent } from './components/dish-dialog/dish-dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { ChefRestaurantCardComponent } from './components/chef-restaurant-card/chef-restaurant-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminDialogComponent } from './components/admin-dialog/admin-dialog.component'

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  navigation: false,
  keyboard: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    MainComponent,
    CardComponent,
    IconMeaningComponent,
    ChefOfTheWeekComponent,
    AboutComponent,
    FooterComponent,
    DishDialogComponent,
    DishCardComponent,
    ChefRestaurantCardComponent,
    AdminLoginComponent,
    AdminMainComponent,
    AdminDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [{ provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
