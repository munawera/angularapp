import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSpecsModalComponent } from './save-specs-modal.component';

describe('SaveSpecsModalComponent', () => {
  let component: SaveSpecsModalComponent;
  let fixture: ComponentFixture<SaveSpecsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSpecsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSpecsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
