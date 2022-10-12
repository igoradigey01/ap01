import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgzComponent } from './ogz.component';

describe('OgzComponent', () => {
  let component: OgzComponent;
  let fixture: ComponentFixture<OgzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
