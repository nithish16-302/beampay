import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeampayPluginComponent } from './beampay-plugin.component';

describe('BeampayPluginComponent', () => {
  let component: BeampayPluginComponent;
  let fixture: ComponentFixture<BeampayPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeampayPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeampayPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
