import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFormSecondaryComponent } from './mentor-form-secondary.component';

describe('MentorFormSecondaryComponent', () => {
  let component: MentorFormSecondaryComponent;
  let fixture: ComponentFixture<MentorFormSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorFormSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFormSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
