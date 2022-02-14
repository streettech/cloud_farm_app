import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfarmComponent } from './newfarm.component';

describe('NewfarmComponent', () => {
  let component: NewfarmComponent;
  let fixture: ComponentFixture<NewfarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
