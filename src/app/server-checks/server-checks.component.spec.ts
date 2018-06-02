import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChecksComponent } from './server-checks.component';

describe('ServerChecksComponent', () => {
  let component: ServerChecksComponent;
  let fixture: ComponentFixture<ServerChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
