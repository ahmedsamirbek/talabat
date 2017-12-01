import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResturantComponent } from './single-resturant.component';

describe('SingleResturantComponent', () => {
  let component: SingleResturantComponent;
  let fixture: ComponentFixture<SingleResturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleResturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
