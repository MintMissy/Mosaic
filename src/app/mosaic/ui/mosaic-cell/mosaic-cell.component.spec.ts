import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicCellComponent } from './mosaic-cell.component';

describe('MosaicCellComponent', () => {
  let component: MosaicCellComponent;
  let fixture: ComponentFixture<MosaicCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MosaicCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
