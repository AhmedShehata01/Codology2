import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarVisible = false;
  isAffixed = false; // Variable to track affixed state

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Change this value to the scroll position at which you want to add the class
    this.isAffixed = scrollPosition > 50; // Example: 50px from the top
  }

  // scrollTo(sectionId: string) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }
}
