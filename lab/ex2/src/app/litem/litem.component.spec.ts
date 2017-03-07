/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LitemComponent } from './litem.component';

describe('LitemComponent', () => {
  let component: LitemComponent;
  let fixture: ComponentFixture<LitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
