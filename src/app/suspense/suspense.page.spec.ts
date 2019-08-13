import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensePage } from './suspense.page';

describe('SuspensePage', () => {
  let component: SuspensePage;
  let fixture: ComponentFixture<SuspensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
