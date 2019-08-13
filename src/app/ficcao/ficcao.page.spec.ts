import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiccaoPage } from './ficcao.page';

describe('FiccaoPage', () => {
  let component: FiccaoPage;
  let fixture: ComponentFixture<FiccaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiccaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
