# Angular Directives

## Overview
Angular **directives** are used to extend HTML functionality by adding custom behavior to elements in the DOM. There are three main types of directives in Angular:

## 1. Component Directives
- Components are the most common type of directive.
- They include a template (HTML), styles (CSS), and logic (TypeScript).

### Example:
```typescript
@Component({
  selector: 'app-example',
  template: `<h1>Hello, Angular!</h1>`
})
export class ExampleComponent {}
```

## 2. Structural Directives
- These modify the structure of the DOM by adding, removing, or manipulating elements.
- They usually start with an `*` (e.g., `*ngIf`, `*ngFor`).

### Example:
```html
<p *ngIf="isVisible">This paragraph is conditionally displayed.</p>
```
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

## 3. Attribute Directives
- These change the appearance or behavior of an element.

### Example (Using `ngClass` and `ngStyle`):
```html
<p [ngClass]="{'text-danger': isError}">This is a paragraph.</p>
```

### Custom Attribute Directive:
```typescript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

### Usage:
```html
<p appHighlight>This text will be highlighted.</p>
```

## Conclusion
Angular directives are powerful tools for enhancing HTML elements. Whether you need to modify the DOM structure, style elements dynamically, or create reusable behaviors, directives provide a flexible way to achieve this.

---
Would you like to customize this further? 😊

