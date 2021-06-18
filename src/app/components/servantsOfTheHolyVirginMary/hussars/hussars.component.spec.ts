import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HussarsComponent } from './hussars.component';

describe('HussarsComponent', () => {
  let component: HussarsComponent;
  let fixture: ComponentFixture<HussarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HussarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HussarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
