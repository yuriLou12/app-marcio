import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentarioPage } from './documentario.page';

describe('DocumentarioPage', () => {
  let component: DocumentarioPage;
  let fixture: ComponentFixture<DocumentarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
