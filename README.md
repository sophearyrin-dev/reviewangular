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



# Publish-Subscribe (Pub-Sub) in Angular

In Angular, the **publish-subscribe (pub-sub) pattern** is commonly implemented using **RxJS Observables** to enable communication between different parts of an application. This pattern is useful for event handling, state management, and inter-component communication.

## How Subscribe and Publish Work in Angular
- **Publish (Emit an event or value)**: A component or service emits data using an `Observable` or `Subject`.
- **Subscribe (React to the emitted event or value)**: Other components or services listen to that observable and react to the changes.

## Key RxJS Components Used in Pub-Sub
1. **Subject** – Acts as both an Observable and Observer. It allows multiple subscribers and is used for event-based communication.
2. **BehaviorSubject** – Similar to `Subject`, but it stores the last emitted value and emits it immediately to new subscribers.
3. **ReplaySubject** – Stores multiple past values and replays them to new subscribers.
4. **AsyncSubject** – Emits only the last value when the Observable completes.

---

## Example: Using a Service for Pub-Sub
A common use case is communication between two components that don't have a direct relationship (e.g., siblings or distant components in the component tree).

### Step 1: Create a Service
```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<string>(); // Observable source
  message$ = this.messageSubject.asObservable();  // Expose it as Observable

  sendMessage(message: string) {
    this.messageSubject.next(message); // Publish message
  }
}
```

### Step 2: Publishing Data (Component A)
```typescript
import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-sender',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class SenderComponent {
  constructor(private messageService: MessageService) {}

  sendMessage() {
    this.messageService.sendMessage('Hello from Sender!');
  }
}
```

### Step 3: Subscribing to Data (Component B)
```typescript
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver',
  template: `<p>Received Message: {{ message }}</p>`
})
export class ReceiverComponent implements OnDestroy {
  message: string = '';
  private subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.message$.subscribe(msg => {
      this.message = msg; // Subscribe to messages
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Prevent memory leaks
  }
}
```

---

## When to Use Pub-Sub in Angular
**Component communication** (especially between non-parent-child components)  
**Event-driven architecture** (handling global events like notifications, loaders, etc.)  
**State management** (alternative to centralized state management libraries)  


# Input and Output in Angular

## Introduction
In Angular, `@Input` and `@Output` decorators are used for component communication. 
- `@Input` allows a parent component to pass data to a child component.
- `@Output` allows a child component to emit events to the parent component.

## Using `@Input`
The `@Input` decorator is used to bind data from a parent component to a child component.

### Example:
#### Parent Component (`app.component.ts`)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-child [message]="parentMessage"></app-child>`
})
export class AppComponent {
  parentMessage = 'Hello from Parent';
}
```

#### Child Component (`child.component.ts`)
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Message from parent: {{ message }}</p>`
})
export class ChildComponent {
  @Input() message!: string;
}
```

## Using `@Output`
The `@Output` decorator allows a child component to send an event to the parent component.

### Example:
#### Parent Component (`app.component.ts`)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>Received message: {{ receivedMessage }}</p>
  `
})
export class AppComponent {
  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
```

#### Child Component (`child.component.ts`)
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child');
  }
}
```

## Summary
- Use `@Input` to receive data from the parent component.
- Use `@Output` with `EventEmitter` to send data from the child to the parent component.
- This is essential for component interaction and data flow in Angular applications.





