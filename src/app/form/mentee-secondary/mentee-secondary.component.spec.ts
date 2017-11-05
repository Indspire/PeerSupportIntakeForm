import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeSecondaryComponent } from './mentee-secondary.component';

describe('MenteeSecondaryComponent', () => {
  let component: MenteeSecondaryComponent;
  let fixture: ComponentFixture<MenteeSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteeSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteeSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
