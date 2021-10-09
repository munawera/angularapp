import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFillCaseComponent } from './auto-fill-case.component';

describe('AutoFillCaseComponent', () => {
  let component: AutoFillCaseComponent;
  let fixture: ComponentFixture<AutoFillCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFillCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFillCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
