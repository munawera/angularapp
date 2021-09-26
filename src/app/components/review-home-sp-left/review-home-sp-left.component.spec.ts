import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHomeSpLeftComponent } from './review-home-sp-left.component';

describe('ReviewHomeSpLeftComponent', () => {
  let component: ReviewHomeSpLeftComponent;
  let fixture: ComponentFixture<ReviewHomeSpLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewHomeSpLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHomeSpLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
