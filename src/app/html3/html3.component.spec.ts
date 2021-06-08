import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html3Component } from './html3.component';

describe('Html3Component', () => {
  let component: Html3Component;
  let fixture: ComponentFixture<Html3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
