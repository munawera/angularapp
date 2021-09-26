import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSelectedComponent } from './review-selected.component';

describe('HomeComponent', () => {
  let component: ReviewSelectedComponent;
  let fixture: ComponentFixture<ReviewSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
