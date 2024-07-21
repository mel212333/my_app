import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { FormsModule } from '@angular/forms';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [NavbarComponent, SlideShowComponent, CastSlideShowComponent],
  exports: [NavbarComponent, SlideShowComponent, CastSlideShowComponent],
  imports: [CommonModule, FormsModule, PipesModule],
})
export class SharedModule {}
