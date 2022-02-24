import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmIndiComponent } from './farm-indi.component';

describe('FarmIndiComponent', () => {
  let component: FarmIndiComponent;
  let fixture: ComponentFixture<FarmIndiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmIndiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmIndiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
