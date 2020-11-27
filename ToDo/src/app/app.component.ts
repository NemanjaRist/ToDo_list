import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#f9d56b');
}
}
