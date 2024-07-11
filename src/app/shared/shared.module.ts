import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, SlideShowComponent],
  exports: [NavbarComponent, SlideShowComponent],
  imports: [CommonModule, FormsModule],
})
export class SharedModule {}
