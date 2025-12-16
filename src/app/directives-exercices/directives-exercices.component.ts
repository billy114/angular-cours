import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-directives-exercices',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './directives-exercices.component.html',
  styleUrl: './directives-exercices.component.scss'
})
export class DirectivesExercicesComponent {

  completed : boolean = false;
  delay : boolean = false;
  pending : boolean = false;

   projectData = [
    {
      id: 1,
      image: 'assets/images/companies/img-1.png',
      text: 'New admin Design',
      subtext: 'It will be as simple as Occidental',
      status: 'Completed',
      comment: 214,
      technologies: ['Angular', 'TypeScript', 'SCSS']
    },
    {
      id: 2,
      image: 'assets/images/companies/img-2.png',
      text: 'Brand logo design',
      subtext: 'To achieve it would be necessary',
      status: 'Pending',
      comment: 183,
      technologies: ['Figma', 'Illustrator', 'Photoshop']
    },
    {
      id: 3,
      image: 'assets/images/companies/img-3.png',
      text: 'New Landing Design',
      subtext: 'For science, music, sport, etc',
      status: 'Delay',
      comment: 175,
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      image: 'assets/images/companies/img-4.png',
      text: 'Redesign - Landing page',
      subtext: 'If several languages coalesce',
      status: 'Completed',
      comment: 202,
      technologies: ['React', 'Tailwind CSS', 'Node.js']
    },
    {
      id: 5,
      image: 'assets/images/companies/img-5.png',
      text: 'Skote Dashboard UI',
      subtext: 'Separate existence is a myth',
      status: 'Completed',
      comment: 194,
      technologies: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      id: 6,
      image: 'assets/images/companies/img-6.png',
      text: 'Blog Template UI',
      subtext: 'For science, music, sport, etc',
      status: 'Pending',
      comment: 122,
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS']
    },
    {
      id: 7,
      image: 'assets/images/companies/img-3.png',
      text: 'Multipurpose Landing',
      subtext: 'It will be as simple as Occidental',
      status: 'Delay',
      comment: 214,
      technologies: ['Gatsby', 'GraphQL', 'Sass']
    },
    {
      id: 8,
      image: 'assets/images/companies/img-4.png',
      text: 'App Landing UI',
      subtext: 'For science, music, sport, etc',
      status: 'Completed',
      comment: 185,
      technologies: ['Flutter', 'Firebase']
    },
    {
      id: 9,
      image: 'assets/images/companies/img-2.png',
      text: 'New admin Design',
      subtext: 'Their most common words.',
      status: 'Completed',
      comment: 106,
      technologies: ['Spring Boot', 'Thymeleaf', 'PostgreSQL']
    }
  ];


}
