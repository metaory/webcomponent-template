import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import '__LIB_NAME__';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app">
      <div class="header">
        <img class="logo" src="favicon.png" alt="__LIB_NAME__ Logo" />
        <div class="title">__LIB_NAME__</div>
        <div class="subtitle">Angular + Vite Example</div>
      </div>
      <__TAG_NAME__ #component></__TAG_NAME__>
    </div>
  `,
  styles: [`
    .app {
      text-align: center;
      padding: 2rem;
    }
    
    .header {
      margin-bottom: 2rem;
    }
    
    .logo {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
    }
    
    .title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #3b82f6;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      font-size: 1.25rem;
      color: #64748b;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('component', { static: false }) component!: ElementRef;

  ngAfterViewInit() {
    if (this.component?.nativeElement) {
      this.component.nativeElement.setAttribute('cols', '3');
      this.component.nativeElement.setAttribute('gap', '1rem');
      this.component.nativeElement.setAttribute('padding', '1rem');
      
      // Add demo content
      for (let i = 1; i <= 6; i++) {
        const item = document.createElement('div');
        item.textContent = `Item ${i}`;
        item.style.cssText = 'background: #3b82f6; color: white; padding: 1rem; border-radius: 4px; text-align: center;';
        this.component.nativeElement.appendChild(item);
      }
    }
  }

  constructor() {
    console.log('__LIB_NAME__ component loaded');
  }
}
