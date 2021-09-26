import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUseCaseComponent } from './new-use-case.component';

describe('NewUseCaseComponent', () => {
  let component: NewUseCaseComponent;
  let fixture: ComponentFixture<NewUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUseCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
