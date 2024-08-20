import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent {
  items = [
    { image: 'assets/images/profile (1).png' },
    { image: 'assets/images/profile (2).png' },
    { image: 'assets/images/profile (3).png' },
    { image: 'assets/images/profile (4).png' },
    { image: 'assets/images/profile (5).png' },
    { image: 'assets/images/profile (6).png' }
  ];

  currentIndex = 0;
  itemWidth = 25; // Width in percentage (25% because we want 4 images at a time)
  itemsPerSlide = 4;

  next() {
    const totalItems = this.items.length;
    const maxIndex = Math.ceil(totalItems / this.itemsPerSlide) - 1;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the start if needed
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.ceil(this.items.length / this.itemsPerSlide) - 1; // Loop to the last full set
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * this.itemWidth}%)`;
  }
}