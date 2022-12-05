import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionStatsComponent } from './action-stats.component';

describe('ActionStatsComponent', () => {
  let component: ActionStatsComponent;
  let fixture: ComponentFixture<ActionStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
