import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicCardComponent } from './mosaic-card.component';

describe('MosaicCardComponent', () => {
  let component: MosaicCardComponent;
  let fixture: ComponentFixture<MosaicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MosaicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
