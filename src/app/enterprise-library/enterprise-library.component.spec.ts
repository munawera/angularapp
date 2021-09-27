import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseLibraryComponent } from './enterprise-library.component';

describe('EnterpriseLibraryComponent', () => {
  let component: EnterpriseLibraryComponent;
  let fixture: ComponentFixture<EnterpriseLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
