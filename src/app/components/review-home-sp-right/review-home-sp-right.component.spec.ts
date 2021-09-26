import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHomeSpRightComponent } from './review-home-sp-right.component';

describe('ReviewHomeSpRightComponent', () => {
  let component: ReviewHomeSpRightComponent;
  let fixture: ComponentFixture<ReviewHomeSpRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewHomeSpRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHomeSpRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
