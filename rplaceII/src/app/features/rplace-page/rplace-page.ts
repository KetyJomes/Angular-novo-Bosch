import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PixelPage } from '../pixel-page/pixel-page';

@Component({
  selector: 'app-rplace-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,PixelPage],
  templateUrl: './rplace-page.html',
  styleUrls: ['./rplace-page.css'],
})
export class RplacePage {
}