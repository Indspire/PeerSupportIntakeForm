import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndspireFormComponent } from './indspire-form.component';

describe('IndspireFormComponent', () => {
  let component: IndspireFormComponent;
  let fixture: ComponentFixture<IndspireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndspireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndspireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
