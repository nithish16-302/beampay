import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamPayLoginComponent } from './beam-pay-login.component';

describe('BeamPayLoginComponent', () => {
  let component: BeamPayLoginComponent;
  let fixture: ComponentFixture<BeamPayLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeamPayLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeamPayLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
