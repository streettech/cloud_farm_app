import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsIndiComponent } from './farms-indi.component';

describe('FarmsIndiComponent', () => {
  let component: FarmsIndiComponent;
  let fixture: ComponentFixture<FarmsIndiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsIndiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsIndiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
