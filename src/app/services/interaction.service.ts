import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  initNavbar() {
    const updateNavbar = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(44, 62, 80, 0.98)';
        } else {
          navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();
  }

  initCardInteractions() {
    const cards = document.querySelectorAll('.project-card, .skill-item, .about-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        (card as HTMLElement).style.transform = 'translateY(-10px) scale(1.02)';
      });
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  initButtonRipple() {
    const buttons = document.querySelectorAll('.btn-custom, .btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e: any) => {
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        btn.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
}