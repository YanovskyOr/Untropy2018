import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthChartD3Component } from './health-chart-d3.component';

describe('HealthChartD3Component', () => {
  let component: HealthChartD3Component;
  let fixture: ComponentFixture<HealthChartD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthChartD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthChartD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
