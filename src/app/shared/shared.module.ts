import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [NavbarComponent, SlideShowComponent],
  exports: [NavbarComponent, SlideShowComponent],
  imports: [CommonModule],
})
export class SharedModule {}
