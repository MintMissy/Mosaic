import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushesSelectorComponent } from './brushes-selector.component';

describe('BrushesSelectorComponent', () => {
  let component: BrushesSelectorComponent;
  let fixture: ComponentFixture<BrushesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrushesSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrushesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
