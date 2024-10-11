import { Component } from '@angular/core';
import Typed from 'typed.js'; // Import Typed.js

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ngAfterViewInit() {
    this.initializeTyped();
  }

  initializeTyped() {
    const options = {
      strings: ['Web Developer', 'Full-Stack Developer' , 'Freelancer'], // Add your strings here
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      showCursor: true
    };

    const typed = new Typed('.typed-subtitle', options); // Target your HTML element
  }
}
