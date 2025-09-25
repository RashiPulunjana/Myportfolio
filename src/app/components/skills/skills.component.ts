import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  skillsProgress = {
    dotnet: '0%',
    angular: '0%',
    database: '0%',
    cloud: '0%'
  };

  ngOnInit() {
    this.initScrollAnimations();
    this.animateProgressBars();
  }

  initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
  }

  animateProgressBars() {
    setTimeout(() => {
      this.skillsProgress = {
        dotnet: '95%',
        angular: '90%',
        database: '88%',
        cloud: '82%'
      };
    }, 500);
  }
}