import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionStatComponent } from './action-stat.component';

describe('ActionStatComponent', () => {
  let component: ActionStatComponent;
  let fixture: ComponentFixture<ActionStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
