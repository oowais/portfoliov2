import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedModalComponent } from './animated-modal.component';

describe('AnimatedModalComponent', () => {
  let component: AnimatedModalComponent;
  let fixture: ComponentFixture<AnimatedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
