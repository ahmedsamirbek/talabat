import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWithCartComponent } from './single-with-cart.component';

describe('SingleWithCartComponent', () => {
  let component: SingleWithCartComponent;
  let fixture: ComponentFixture<SingleWithCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWithCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWithCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
