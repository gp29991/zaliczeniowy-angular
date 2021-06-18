import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHussarComponent } from './add-hussar.component';

describe('AddHussarComponent', () => {
  let component: AddHussarComponent;
  let fixture: ComponentFixture<AddHussarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHussarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHussarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
