import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      title: 'ASP.NET MVC',
      subtitle: 'I build full-stack applications with ASP.NET MVC for dynamic web development.',
      icon: 'assets/imgs/full-stack.png'
    },
    {
      title: 'ASP .NET API',
      subtitle: 'I create robust APIs with ASP.NET to enable seamless client-server communication.',
      icon: 'assets/imgs/api.svg'
    },
    {
      title: 'Angular',
      subtitle: 'I develop dynamic SPAs using Angular for an engaging user experience.',
      icon: 'assets/imgs/logo-angular.svg'
    },
    {
      title: 'Business Analyst',
      subtitle: 'I help users identify needs and deliver effective solutions.',
      icon: 'assets/imgs/Business-Analyst.png'
    },
    {
      title: 'Application Support',
      subtitle: 'I provide technical support and troubleshooting for seamless application performance.',
      icon: 'assets/imgs/Application-Support.png'
    }
  ];
}
