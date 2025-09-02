# CDN Example

Direct browser usage of __LIB_NAME__ without build tools.

## Usage

Include the component via CDN:

```html
<script type="module" src="https://unpkg.com/__LIB_NAME__"></script>
```

Use in your HTML:

```html
<__TAG_NAME__ cols="3" gap="1rem" padding="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</__TAG_NAME__>
```

## JavaScript API

```javascript
const component = document.createElement('__TAG_NAME__')
component.setAttribute('cols', '3')
component.setAttribute('gap', '1rem')
component.setAttribute('padding', '1rem')
```

## Features

- No build step required
- Works in any modern browser
- Responsive grid layout
- Customizable columns, gap, and padding


