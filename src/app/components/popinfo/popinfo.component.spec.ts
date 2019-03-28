import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinfoPage } from './popinfo.page';

describe('PopinfoPage', () => {
  let component: PopinfoPage;
  let fixture: ComponentFixture<PopinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
