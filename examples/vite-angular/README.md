# Angular + Vite Example

Angular standalone components integration with __LIB_NAME__.

## Usage

```typescript
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import '__LIB_NAME__';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<__TAG_NAME__ #component></__TAG_NAME__>`
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
}
```

## Features

- Angular standalone components
- ViewChild for DOM access
- AfterViewInit lifecycle hook
- Vite dev server with HMR
