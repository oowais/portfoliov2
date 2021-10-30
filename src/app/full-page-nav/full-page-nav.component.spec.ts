import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageNavComponent } from './full-page-nav.component';

describe('FullPageNavComponent', () => {
  let component: FullPageNavComponent;
  let fixture: ComponentFixture<FullPageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
