import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersStatusComponent } from './servers-status.component';

describe('ServersStatusComponent', () => {
  let component: ServersStatusComponent;
  let fixture: ComponentFixture<ServersStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
