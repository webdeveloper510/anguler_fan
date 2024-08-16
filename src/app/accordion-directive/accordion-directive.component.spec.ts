import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDirectiveComponent } from './accordion-directive.component';

describe('AccordionDirectiveComponent', () => {
  let component: AccordionDirectiveComponent;
  let fixture: ComponentFixture<AccordionDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
