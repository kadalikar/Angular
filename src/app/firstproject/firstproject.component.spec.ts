import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstprojectComponent } from './firstproject.component';

describe('FirstprojectComponent', () => {
  let component: FirstprojectComponent;
  let fixture: ComponentFixture<FirstprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
