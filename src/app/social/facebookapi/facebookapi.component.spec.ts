import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookapiComponent } from './facebookapi.component';

describe('FacebookapiComponent', () => {
  let component: FacebookapiComponent;
  let fixture: ComponentFixture<FacebookapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
