import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushItemComponent } from './brush-item.component';

describe('BrushItemComponent', () => {
  let component: BrushItemComponent;
  let fixture: ComponentFixture<BrushItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrushItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrushItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
