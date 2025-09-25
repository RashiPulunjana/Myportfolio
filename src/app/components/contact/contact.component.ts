import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  formData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;

  ngOnInit() {
    this.initScrollAnimations();
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

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.isSubmitting = false;
    }, 2000);
  }
}