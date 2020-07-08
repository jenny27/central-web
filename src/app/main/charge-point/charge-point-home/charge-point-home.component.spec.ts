import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargePointHomeComponent } from './charge-point-home.component';

describe('ChargePointHomeComponent', () => {
  let component: ChargePointHomeComponent;
  let fixture: ComponentFixture<ChargePointHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargePointHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargePointHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
