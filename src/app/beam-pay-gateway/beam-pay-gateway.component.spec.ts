import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamPayGatewayComponent } from './beam-pay-gateway.component';

describe('BeamPayGatewayComponent', () => {
  let component: BeamPayGatewayComponent;
  let fixture: ComponentFixture<BeamPayGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeamPayGatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeamPayGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
