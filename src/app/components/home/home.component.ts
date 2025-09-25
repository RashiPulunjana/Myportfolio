import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentText: string = 'Full Stack Software Developer';
  private texts: string[] = [
    'Full Stack Software Developer',
    'IoT Solutions Architect',
    '.NET Core Specialist',
    'Angular Expert',
    'Database Optimization Specialist'
  ];
  private textIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typingInterval: any;

  ngOnInit() {
    this.startTyping();
    this.createParticles();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  startTyping() {
    const type = () => {
      const currentText = this.texts[this.textIndex];
      
      if (this.isDeleting) {
        this.currentText = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.currentText = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
      }
      
      let typeSpeed = this.isDeleting ? 100 : 150;
      
      if (!this.isDeleting && this.charIndex === currentText.length) {
        typeSpeed = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        typeSpeed = 500;
      }
      
      this.typingInterval = setTimeout(type, typeSpeed);
    };
    
    setTimeout(type, 1000);
  }

  createParticles() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.1)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 3 + 2}s infinite linear`;
        hero.appendChild(particle);
      }
    }
  }
}