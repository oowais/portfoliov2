import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StairsLoaderComponent } from './stairs-loader.component';

describe('StairsLoaderComponent', () => {
  let component: StairsLoaderComponent;
  let fixture: ComponentFixture<StairsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StairsLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StairsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
