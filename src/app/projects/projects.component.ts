import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      description: 'This is a description for Project One.',
      img: 'assets/imgs/project1.jpg', // replace with your image path
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/project1'
    },
    {
      title: 'Project One',
      description: 'This is a description for Project One.',
      img: 'assets/imgs/project1.jpg', // replace with your image path
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/project1'
    },    {
      title: 'Project One',
      description: 'This is a description for Project One.',
      img: 'assets/imgs/project1.jpg', // replace with your image path
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/project1'
    },    {
      title: 'Project One',
      description: 'This is a description for Project One.',
      img: 'assets/imgs/project1.jpg', // replace with your image path
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/project1'
    },
    {
      title: 'Project One',
      description: 'This is a description for Project One.',
      img: 'assets/imgs/project1.jpg', // replace with your image path
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/project1'
    },
    {
      title: 'Project One',
      description: 'This is a description for Project One.',
      img: 'assets/imgs/project1.jpg', // replace with your image path
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/project1'
    },
    
    // Add more projects as needed
  ];
}
