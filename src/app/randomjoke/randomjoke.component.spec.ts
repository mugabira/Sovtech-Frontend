import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomjokeComponent } from './randomjoke.component';

describe('RandomjokeComponent', () => {
  let component: RandomjokeComponent;
  let fixture: ComponentFixture<RandomjokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomjokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomjokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
