import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosConfirmationComponent } from './sos-confirmation.component';

describe('SosConfirmationComponent', () => {
  let component: SosConfirmationComponent;
  let fixture: ComponentFixture<SosConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SosConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SosConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
