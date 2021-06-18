import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyMaryComponent } from './holy-mary.component';

describe('HolyMaryComponent', () => {
  let component: HolyMaryComponent;
  let fixture: ComponentFixture<HolyMaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolyMaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyMaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
