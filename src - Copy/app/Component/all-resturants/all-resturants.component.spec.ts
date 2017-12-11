import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResturantsComponent } from './all-resturants.component';

describe('AllResturantsComponent', () => {
  let component: AllResturantsComponent;
  let fixture: ComponentFixture<AllResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
