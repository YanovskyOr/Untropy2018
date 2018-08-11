import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsChartD3Component } from './results-chart-d3.component';

describe('ResultsChartD3Component', () => {
  let component: ResultsChartD3Component;
  let fixture: ComponentFixture<ResultsChartD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsChartD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsChartD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
