import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicBoardComponent } from './mosaic-board.component';

describe('MosaicBoardComponent', () => {
  let component: MosaicBoardComponent;
  let fixture: ComponentFixture<MosaicBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosaicBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
