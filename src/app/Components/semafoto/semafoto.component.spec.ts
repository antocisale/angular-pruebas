import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemafotoComponent } from './semafoto.component';

describe('SemafotoComponent', () => {
  let component: SemafotoComponent;
  let fixture: ComponentFixture<SemafotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemafotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemafotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
