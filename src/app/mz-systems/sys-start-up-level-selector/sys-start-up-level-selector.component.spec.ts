/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SysStartUpLevelSelectorComponent } from './sys-start-up-level-selector.component';

describe('SysStartUpLevelSelectorComponent', () => {
  let component: SysStartUpLevelSelectorComponent;
  let fixture: ComponentFixture<SysStartUpLevelSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysStartUpLevelSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysStartUpLevelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
