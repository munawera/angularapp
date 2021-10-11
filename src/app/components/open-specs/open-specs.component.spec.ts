import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSpecsComponent } from './open-specs.component';

describe('OpenSpecsComponent', () => {
  let component: OpenSpecsComponent;
  let fixture: ComponentFixture<OpenSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
