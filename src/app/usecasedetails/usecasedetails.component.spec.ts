import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasedetailsComponent } from './usecasedetails.component';

describe('UsecasedetailsComponent', () => {
  let component: UsecasedetailsComponent;
  let fixture: ComponentFixture<UsecasedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsecasedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecasedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
