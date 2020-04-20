import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTable2Component } from './api-table2.component';

describe('ApiTable2Component', () => {
  let component: ApiTable2Component;
  let fixture: ComponentFixture<ApiTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
