import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpageScrollComponent } from './fullpage-scroll.component';

describe('FullpageScrollComponent', () => {
  let component: FullpageScrollComponent;
  let fixture: ComponentFixture<FullpageScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullpageScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullpageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
