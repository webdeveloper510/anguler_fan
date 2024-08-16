import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-directive',
  templateUrl: './accordion-directive.component.html',
  styleUrls: ['./accordion-directive.component.css']
})
export class AccordionDirectiveComponent {
  @Input() items: { title: string, content: string }[] = [];
  activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
