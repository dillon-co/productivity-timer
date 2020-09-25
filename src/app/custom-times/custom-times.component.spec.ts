import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimesComponent } from './custom-times.component';

describe('CustomTimesComponent', () => {
  let component: CustomTimesComponent;
  let fixture: ComponentFixture<CustomTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
