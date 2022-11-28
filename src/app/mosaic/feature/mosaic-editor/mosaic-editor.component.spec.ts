import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicEditorComponent } from './mosaic-editor.component';

describe('MosaicEditorComponent', () => {
  let component: MosaicEditorComponent;
  let fixture: ComponentFixture<MosaicEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MosaicEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
