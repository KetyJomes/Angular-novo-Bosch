import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pixel-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pixel-page.html',
  styleUrls: ['./pixel-page.css']
})
export class PixelPage {
  PIXEL_SIZE = 4;
  CANVAS_WIDTH = 800;
  CANVAS_HEIGHT = 600;
  COLS = this.CANVAS_WIDTH / this.PIXEL_SIZE; // 200
  ROWS = this.CANVAS_HEIGHT / this.PIXEL_SIZE; // 150

  pixels: string[][] = [];
  selectedColor: string = '#000000';

  constructor() {
    for (let i = 0; i < this.ROWS; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.COLS; j++) {
        row.push('#ffffff');
      }
      this.pixels.push(row); 
    }
  }

  paintPixel(i: number, j: number) {
    this.pixels[i][j] = this.selectedColor;
  }
}