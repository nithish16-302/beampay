import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamEmailConfirmationFormComponent } from './beam-email-confirmation-form.component';

describe('BeamEmailConfirmationFormComponent', () => {
  let component: BeamEmailConfirmationFormComponent;
  let fixture: ComponentFixture<BeamEmailConfirmationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeamEmailConfirmationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeamEmailConfirmationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
