import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
   projects = [
    { title: 'Project One', description: 'Cool Angular app', link: '#' },
    { title: 'Project Two', description: 'Another awesome project', link: '#' },
    { title: 'Project Three', description: 'Something amazing', link: '#' }
  ];

}
