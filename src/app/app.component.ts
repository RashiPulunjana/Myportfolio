import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-portfolio';
  closeMenu() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }
}
