import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabComponent } from './pab.component';

describe('PabComponent', () => {
  let component: PabComponent;
  let fixture: ComponentFixture<PabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
