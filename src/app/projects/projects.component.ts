import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../Pipe/safe-url.pipe';
// import { SafeUrlPipe }

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule , SafeUrlPipe ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Material Request Application',
      description: 'An ASP.NET app designed for streamlined workflows, role management, audit tracking, and multi-language support. Watch the video to see it in action!',
      // Use embed URL with the timestamp for the video
      videoUrl: 'https://www.youtube.com/embed/lwVE1JI39Lg?start=7',  // Embed URL with timestamp
      visitSiteUrl: 'https://example.com',
      githubRepoUrl: 'https://github.com/example/repo'
    },
    
    // Add more projects as needed
  ];
}
