class ComponentName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['cols', 'gap', 'padding'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const cols = this.getAttribute('cols') || 'auto-fit';
    const gap = this.getAttribute('gap') || '1rem';
    const padding = this.getAttribute('padding') || '1rem';
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: grid;
          grid-template-columns: repeat(${cols}, minmax(0, 1fr));
          gap: ${gap};
          padding: ${padding};
          width: 100%;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('component-name', ComponentName);

export default ComponentName;
